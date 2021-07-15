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
      <h1
        style={{
          marginTop: 100,
          marginLeft: 20,
          
        }}>
        <img style={{opacity: '1.2', backgroundSize: 'cover', borderRadius: '15px',}}
          src="https://3.bp.blogspot.com/-tRH4a36gEOc/VlJcXFoY9bI/AAAAAAAAADo/fRu2BNRW7W4/s1600/Film%2BReel.jpg"
          alt="film"/>

      </h1>
        <input
        style={{
          height: '40px',
          width: '25%',
          fontSize: '22pt',
          padding: '10px',
          outline: 'none',
          borderRadius: '7px',
          boxShadow: '4px 4px 10px rgba(0,0,0,0.20)',
          opacity: '0.7'
        }}
            type="text"
            placeholder="Search Movies"
            value={query}
            onChange={onChange}>
      </input>
      <h5 style={{
        marginLeft: '15px', fontSize: '24px',
        color: 'GhostWhite',
        textShadow: '2px 2px 5px darkred'
      }}
      >
        Click On A Movie Poster To Add It To Your List
      </h5>
      
      {results.length > 0 && (
        <ul style={{listStyleType: 'none'}}>
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
