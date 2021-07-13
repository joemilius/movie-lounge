import "../App.css";
import React from 'react';
import HomePage from './HomePage';
import NavBar from './NavBar';
import WatchList from './WatchList';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/watchlist">
          <WatchList />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
