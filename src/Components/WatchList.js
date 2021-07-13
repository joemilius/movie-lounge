import React from "react";
import WatchListCard from "./WatchListCard";

function WatchList({ movies }) {
  const displayMovies = movies.map((movie, index) => {
    return <WatchListCard key={index} img={movie.img} />;
  });

  return <ul>{displayMovies}</ul>;
}

export default WatchList;
