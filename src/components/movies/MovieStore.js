import { makeAutoObservable, toJS } from "mobx";

import axios from "axios";

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
          .then((snap) => {
            this.allMovies = snap.data.results;
            this.movieCount = snap.data.total_results;

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
}

export default new MovieStore();
