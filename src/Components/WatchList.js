import React from "react";
import WatchListCard from "./WatchListCard";

// prettier-ignore
function WatchList({ movies, removeMovie, onEditMovie }) {
    const displayMovies = movies.map((movie, index) => {
    return (
        <WatchListCard
            key={index}
            id={movie.id}
            img={movie.img}
            likeButton={movie.likeButton}
            dislikeButton={movie.dislikeButton}
            removeMovie={removeMovie}
            onEditMovie={onEditMovie}
          />
        )})
  return <ul
      style={{
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '200px'
    }}>
    {displayMovies}
  </ul>
}

export default WatchList;
