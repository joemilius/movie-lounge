import "../App.css";
import React, { useState } from "react";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import WatchList from "./WatchList";
import { Route, Switch } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie) {
    setMovies([...movies, movie]);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/watchlist">
          <WatchList movies={movies} />
        </Route>
        <Route exact path="/">
          <HomePage addMovie={addMovie} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
