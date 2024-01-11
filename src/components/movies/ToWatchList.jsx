import { List, Spin } from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import MovieStore from "./MovieStore";
import MovieCard from "./MovieCard.jsx";

const ToWatchList = () => {
  const { alreadyToWatch, isLoading } = MovieStore;

  useEffect(() => {
    MovieStore.loadData();
  }, []);

  if (isLoading) return <Spin />;

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 5,
      }}
      dataSource={alreadyToWatch}
      pagination={true}
      rowKey="id"
      renderItem={(movie) => (
        <List.Item>
          <MovieCard movie={movie} />
        </List.Item>
      )}
    />
  );
};

export default observer(ToWatchList);
