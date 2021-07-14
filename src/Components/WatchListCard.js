import React, {useState} from "react";
import Button from "@material-ui/core/Button"

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
    <div style={{display: 'block'}}>
      <img src={img} alt="Movie Poster" />
      <div>
        <Button onClick={handleLike} style={like ? {background: "mediumseagreen"} : {background: null}}>👍</Button>
        <Button onClick={handleDislike} style={dislike ? {background: "crimson"} : {background: null}}>👎</Button>
        <Button onClick={handleClick}>Remove Movie</Button>
      </div>
    </div>
  );
}

export default WatchListCard;
