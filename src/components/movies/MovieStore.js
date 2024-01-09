import { makeAutoObservable, toJS } from "mobx";

import axios from "axios";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { firestore } from "../../utilities/Firebase";
import Cookies from "js-cookie";

class MovieStore {
  isLoading = true;
  allMovies = [];
  movieCount = 0;
  genres = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadData() {
    axios
      .request({
        method: "GET",
        url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWZlZjhkNDEwNmY0NDM5YTM5NDU3MThjZjU3Y2ZiOCIsInN1YiI6IjY1MzAxNTE5OTQ1ZDM2MDBlYjRkM2ViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._FwSliMjhFnoinOgqkXJF4RjJY75AHig3vqyEArdLco",
        },
      })
      .then((snapshot) => {
        this.genres = snapshot.data.genres;
        console.log("Genres", this.genres);
        axios
          .request({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWZlZjhkNDEwNmY0NDM5YTM5NDU3MThjZjU3Y2ZiOCIsInN1YiI6IjY1MzAxNTE5OTQ1ZDM2MDBlYjRkM2ViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._FwSliMjhFnoinOgqkXJF4RjJY75AHig3vqyEArdLco",
            },
          })
          .then(async (snap) => {
            this.allMovies = snap.data.results;
            this.movieCount = snap.data.total_results;

            const firestoreRef = await getDoc(
              doc(firestore, "movie-catalog", Cookies.get("uid"))
            );

            this.currentUserMovies = firestoreRef.data();

            this.alreadyToWatch = this.currentUserMovies.toWatch;
            this.alreadyWatched = this.currentUserMovies.alreadySeen;

            console.log("All Movies", toJS(this.allMovies));
            console.log("Movie Results", this.movieCount);
            this.isLoading = false;
          });
      })
      .catch((err) => console.log("Error Genre API", err));
  }

  getMovies(page) {
    axios
      .request({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWZlZjhkNDEwNmY0NDM5YTM5NDU3MThjZjU3Y2ZiOCIsInN1YiI6IjY1MzAxNTE5OTQ1ZDM2MDBlYjRkM2ViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._FwSliMjhFnoinOgqkXJF4RjJY75AHig3vqyEArdLco",
        },
      })
      .then((snap) => {
        this.isLoading = true;
        this.allMovies = snap.data.results;
        this.movieCount = snap.data.total_results;

        console.log("All Movies", toJS(this.allMovies));
        console.log("Movie Results", this.movieCount);
        this.isLoading = false;
      });
  }

  searchMovies(queryString) {
    axios
      .request({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?query=${queryString}&api_key=11fef8d4106f4439a3945718cf57cfb8`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWZlZjhkNDEwNmY0NDM5YTM5NDU3MThjZjU3Y2ZiOCIsInN1YiI6IjY1MzAxNTE5OTQ1ZDM2MDBlYjRkM2ViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._FwSliMjhFnoinOgqkXJF4RjJY75AHig3vqyEArdLco",
        },
      })
      .then((snap) => {
        this.isLoading = true;
        this.allMovies = snap.data.results;
        this.movieCount = snap.data.total_results;

        console.log("All Movies", toJS(this.allMovies));
        console.log("Movie Results", this.movieCount);
        this.isLoading = false;
      });
  }

  changeFilteredMoviePage(query, page) {
    axios
      .request({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=11fef8d4106f4439a3945718cf57cfb8`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWZlZjhkNDEwNmY0NDM5YTM5NDU3MThjZjU3Y2ZiOCIsInN1YiI6IjY1MzAxNTE5OTQ1ZDM2MDBlYjRkM2ViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._FwSliMjhFnoinOgqkXJF4RjJY75AHig3vqyEArdLco",
        },
      })
      .then((snap) => {
        this.isLoading = true;
        this.allMovies = snap.data.results;
        this.movieCount = snap.data.total_results;

        console.log("All Movies", toJS(this.allMovies));
        console.log("Movie Results", this.movieCount);
        this.isLoading = false;
      });
  }

  addMovieToWatch(movie) {
    let toWatchList = this.alreadyToWatch;

    if (!toWatchList.includes(movie)) {
      toWatchList.push(movie);

      this.alreadyToWatch = toWatchList;

      updateDoc(doc(firestore, "movie-catalog", Cookies.get("uid")), {
        toWatch: toWatchList,
      });
    }
  }

  addMovieToWatched(movie) {
    let watchedList = this.alreadyWatched;

    if (!watchedList.includes(movie)) {
      watchedList.push(movie);

      const movieIndex = this.alreadyToWatch.indexOf(movie);
      const newToWatch = this.alreadyToWatch.splice(movieIndex, 1);

      this.alreadyToWatch = newToWatch;
      this.alreadyWatched = watchedList;

      updateDoc(doc(firestore, "movie-catalog", Cookies.get("uid")), {
        toWatch: newToWatch,
        alreadySeen: watchedList,
      });
    }
  }
}

export default new MovieStore();
