import React, { useState } from "react";
import MovieCard from "./MovieCard";

// prettier-ignore
function HomePage({addMovie}) {
  const [ query, setQuery ] = useState( '' );
  const [ results, setResults ] = useState( [] )
  
    

    function onChange ( e ) {
        e.preventDefault()
        setQuery( e.target.value )
    
    fetch( `https://api.themoviedb.org/3/search/movie?api_key=${ process.env.REACT_APP_TMDB_API_KEY }&langauge=en-US&page=1&include_adult=false&query=${e.target.value}` )
    .then( resp => resp.json() )
    .then( data => setResults( data.results ))
    }
    
  return (
    <div>
        <h1>HomePage</h1>
        <input
            type="text"
            placeholder="Search Movies"
            value={query}
            onChange={onChange}>
      </input>
      {results.length > 0 && (
        <ul>
          {results.map( movie => (
            <li key={movie.id}>
              <MovieCard movie={movie} addMovie={ addMovie}/>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}

export default HomePage;

// console.log(process.env.REACT_APP_TMDB_API_KEY);
