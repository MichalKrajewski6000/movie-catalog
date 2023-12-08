import React, { useEffect, useState } from "react";
import MovieStore from "./MovieStore";
import MovieCard from "./MovieCard.jsx";

import { observer } from "mobx-react-lite";
import { Empty, Input, List, Pagination, Spin } from "antd";

const MovieList = () => {
  const { allMovies, isLoading, movieCount } = MovieStore;

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    MovieStore.loadData();
  }, []);

  const pageChangeHandler = (page) => {
    setCurrentPage(page);

    if (search !== "") {
      MovieStore.changeFilteredMoviePage(search, page);
    } else MovieStore.getMovies(page);
  };

  const searchHandler = (value) => {
    if (value === "") {
      MovieStore.loadData();
    } else {
      const searchValue = value.replace(" ", "+");
      setSearch(searchValue);

      MovieStore.searchMovies(searchValue);
    }
  };

  if (isLoading) return <Spin />;

  return allMovies.length > 0 ? (
    <>
      <Input.Search
        style={{ width: "20vw", marginBottom: 10 }}
        onSearch={searchHandler}
        placeholder="Browse a movie"
        allowClear
      />
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
        dataSource={allMovies}
        rowKey="id"
        renderItem={(movie) => (
          <List.Item>
            <MovieCard movie={movie} />
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        onChange={pageChangeHandler}
        pageSize={20}
        total={movieCount}
      />
    </>
  ) : (
    <Empty />
  );
};

export default observer(MovieList);
