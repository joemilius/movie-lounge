import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// Styles
const StyledButton = withStyles({
  root: {
    background:
      "linear-gradient(53deg, rgba(200,126,126,1) 34%, rgba(124,0,0,1) 82%)",
    "&:hover": {
      background:
        "linear-gradient(53deg, rgba(126,0,0,1) 10%, rgba(255,255,255,1) 13%, rgba(255,255,255,1) 88%, rgba(124,0,0,1) 91%);)",
      color: "crimson",
      transition: "all 0.3s ease",
    },
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "36px",
    width: "80px",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .5)",
    justify: "center",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const LikeButton = withStyles({
  root: {
    background:
      "linear-gradient(53deg, rgba(200,126,126,1) 34%, rgba(124,0,0,1) 82%)",
    borderRadius: 3,
    border: 0,
    height: "36px",
    width: "10px",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .5)",
    justify: "center",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const DislikeButton = withStyles({
  root: {
    background:
      "linear-gradient(53deg, rgba(200,126,126,1) 34%, rgba(124,0,0,1) 82%)",
    borderRadius: 3,
    border: 0,
    height: "36px",
    width: "10px",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .5)",
    justify: "center",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

// prettier-ignore
function WatchListCard({img, id, likeButton, dislikeButton, removeMovie, onEditMovie, }) {
  // old state
  // const [like, setLike] = useState(likeButton);
  // const [dislike, setDislike] = useState(dislikeButton);

  function handleLike() {
    // setLike(!like);
    // setDislike(false);

    fetch(`https://movie-lounge.herokuapp.com/watchlist/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likeButton: !likeButton,
        dislikeButton: false,
      }),
    })
      .then((resp) => resp.json())
      .then((data) =>
        onEditMovie(data.id, data.likeButton, data.dislikeButton)
      );
  }

  function handleDislike() {
    // setDislike(!dislike);
    // setLike(false);

    fetch(`https://movie-lounge.herokuapp.com/watchlist/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likeButton: false,
        dislikeButton: !dislikeButton,
      }),
    })
      .then((resp) => resp.json())
      .then((data) =>
        onEditMovie(data.id, data.likeButton, data.dislikeButton)
      );
  }

  function handleClick(e) {
    fetch(`https://movie-lounge.herokuapp.com/watchlist/${id}`, {
      method: "DELETE",
    });
    removeMovie(id);
  }

  // prettier-ignore
  return (
    <div
      style={{ display: "block", paddingLeft: "30px", paddingBottom: "35px" }}
    >
      <img src={img} alt="Movie Poster" style={ {boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)", borderRadius: '3px', width: 200, height: 299}}/>
      <div>
        <LikeButton onClick={handleLike}
          style={
            likeButton
              ? { background: "mediumseagreen", maxWidth: "4px", minWidth: "1px" }
              : { background: null, maxWidth: "4px", minWidth: "1px" }
          }>
          👍
        </LikeButton>
        <DislikeButton onClick={handleDislike}
          style={
            dislikeButton
              ? { background: "crimson", maxWidth: "4px", minWidth: "1px" }
              : { background: null, maxWidth: "4px", minWidth: "1px" }
          }>
          👎
        </DislikeButton>
        <StyledButton onClick={handleClick}>Remove</StyledButton>
      </div>
    </div>
  );
}

export default WatchListCard;
