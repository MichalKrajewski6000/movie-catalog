import { Card } from "antd";
import React, { useEffect } from "react";

import MovieStore from "./MovieStore.js";
import { observer } from "mobx-react-lite";

import { CiBookmarkPlus, CiCircleCheck } from "react-icons/ci";

const { Meta } = Card;

const MovieCard = ({ movie }) => {
  const { genres, alreadyToWatch, alreadyWatched } = MovieStore;

  // useEffect(() => {
  //   console.log(
  //     "Movie Store",
  //     MovieStore.currentUserMovies.toWatch
  //       .map((movie) => movie.id)
  //       .includes(movie.id)
  //   );
  // }, []);

  const toWatchList = MovieStore.currentUserMovies.toWatch.map(
    (movie) => movie.id
  );
  const watchedList = MovieStore.currentUserMovies.alreadySeen.map(
    (movie) => movie.id
  );

  const currentGenres = genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .map((genre) => genre.name);

  const addToWatch = () => {
    MovieStore.addMovieToWatch(movie);
  };

  const addToWatched = () => {
    MovieStore.addMovieToWatched(movie);
  };

  return (
    <Card
      style={{
        border: "3px indigo solid",
        backgroundColor: toWatchList.includes(movie.id)
          ? "green"
          : watchedList.includes(movie.id)
          ? "gold"
          : "cyan",
        width: 300,
      }}
      hoverable
      cover={
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      }
      actions={[
        <CiBookmarkPlus
          key="toWatch"
          color={toWatchList.includes(movie.id) ? "gray" : "navy"}
          size={24}
          onClick={addToWatch}
        />,
        <CiCircleCheck
          key="watched"
          color={watchedList.includes(movie.id) ? "gray" : "navy"}
          size={24}
          onClick={addToWatched}
        />,
      ]}
    >
      <Meta title={movie.title} description={currentGenres.join(", ")} />
    </Card>
  );
};

export default observer(MovieCard);
