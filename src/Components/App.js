import "../App.css";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import WatchList from "./WatchList";
import { Route, Switch } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    fetch("https://movie-lounge.herokuapp.com/watchlist")
      .then((resp) => resp.json())
      .then((data) => setMovies(data));
  }, []);

  function addMovie(movie) {
    setMovies([...movies, movie]);
  }

  function removeMovie(id) {
    const updatedMovies = movies.filter((mov) => mov.id !== id);
    setMovies(updatedMovies);
  }

  function onEditMovie(id, like, dislike) {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, likeButton: like, dislikeButton: dislike };
      } else {
        return movie;
      }
    });
    setMovies(updatedMovies);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/watchlist">
          <WatchList
            movies={movies}
            removeMovie={removeMovie}
            onEditMovie={onEditMovie}
          />
        </Route>
        <Route exact path="/">
          <HomePage addMovie={addMovie} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
