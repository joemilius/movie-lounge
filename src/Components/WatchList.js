import React from "react";
import WatchListCard from "./WatchListCard";

// prettier-ignore
function WatchList({ movies, removeMovie }) {
    const displayMovies = movies.map((movie, index) => {
    return (
        <WatchListCard
            key={index}
            id={movie.id}
            img={movie.img}
            removeMovie={removeMovie}
          />
        )})
    return <ul>{displayMovies}</ul>;
}

export default WatchList;
