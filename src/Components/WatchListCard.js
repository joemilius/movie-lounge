import React, {useState} from "react";

function WatchListCard({ img, id, removeMovie }) {
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)

    function handleLike(){
        setLike(!like)
    }

    function handleDislike(){
        setDislike(!dislike)
    }

  function handleClick(e) {
    fetch(`http://localhost:3000/watchList/${id}`, {
      method: "DELETE",
    });
    removeMovie(id);
  }

  return (
    <div>
      <img src={img} alt="Movie Poster" />
      <button onClick={handleLike} style={like ? {background: "green"} : {background: "grey"}}>👍</button>
      <button onClick={handleDislike} style={dislike ? {background: "red"} : {background: "grey"}}>👎</button>
      <button onClick={handleClick}>Remove Movie</button>
    </div>
  );
}

export default WatchListCard;
