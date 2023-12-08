import { Card } from "antd";
import React from "react";

import MovieStore from "./MovieStore.js";
import { observer } from "mobx-react-lite";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const MovieCard = ({ movie }) => {
  const { genres } = MovieStore;

  const currentGenres = genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .map((genre) => genre.name);

  const clickHandler = (e) => {
    console.log("Click", movie.id);
  };

  return (
    <Card
      style={{
        border: "3px indigo solid",
        backgroundColor: "#154D92",
        width: 300,
      }}
      onClick={clickHandler}
      hoverable
      cover={
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={movie.title} description={currentGenres.join(", ")} />
    </Card>
  );
};

export default observer(MovieCard);
