import React from "react";

function WatchListCard({ img, id, removeMovie }) {
  function handleClick(e) {
    fetch(`http://localhost:3000/watchList/${id}`, {
      method: "DELETE",
    });
    removeMovie(id);
  }

  return (
    <div>
      <img src={img} alt="Movie Poster" />
      <button onClick={handleClick}>Remove Movie</button>
    </div>
  );
}

export default WatchListCard;
