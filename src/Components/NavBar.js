import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";

// prettier-ignore
function NavBar() {
  return (
    <AppBar style={{ background: red[900] }}>
      <Toolbar>
        <NavLink
          style={{ fontSize: "75px", textDecoration: "none", color: "white" }}
          exact to="/">
          Movie Lounge
        </NavLink>
        <div style={{ display: "flex", position: "relative", marginLeft: "auto" }}>
          <NavLink style={{ textDecoration: "none" }} exact to="/">
            <Button
              style={{
                color: "white",
                background: red["A200"],
                margin: 4,
                marginLeft: 400,
              }}>
              Home
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} exact to="/watchlist">
            <Button style={{ color: "white", background: red["A200"], margin: 4 }}>
              WatchList
            </Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
