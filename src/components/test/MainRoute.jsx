import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import MovieList from "../movies/MovieList.jsx";
import { observer } from "mobx-react-lite";

const MainRoute = () => {
  return (
    // <>
    //   <Button>
    //     <Link to="/second">Second Route</Link>
    //   </Button>
    //   <MovieList />
    // </>
    <MovieList />
  );
};

export default observer(MainRoute);
