import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import red from '@material-ui/core/colors/red';




function NavBar() {
   
  return (
    <AppBar style={{background : red[900]}}>
        <Toolbar>
            <Typography>Movie Lounge</Typography>
            <div style={{display: 'flex', postition: 'relative', marginLeft: 'auto'}}>
                <NavLink style={{textDecoration: 'none'}} exact to="/">
                    <Button style={{color: 'white', background: red['A200'], margin: 4, marginLeft: 400}}>Home</Button>
                </NavLink>
                <NavLink style={{textDecoration: 'none'}} exact to="/watchlist">
                    <Button style={{color: 'white', background: red['A200'], margin: 4}}>WatchList</Button>
                </NavLink>
            </div>
        </Toolbar>
    </AppBar>
  );
}

export default NavBar;
