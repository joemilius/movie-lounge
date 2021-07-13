import React from 'react';
import {NavLink} from 'react-router-dom';
import Homepage from './HomePage';
import WatchList from './WatchList';

function NavBar() {
    return (
        <div>
            <NavLink exact to='homepage'>Home</NavLink>
            <NavLink exact to='/watchlist'>WatchList</NavLink>
        </div>
        

    )

}

export default NavBar