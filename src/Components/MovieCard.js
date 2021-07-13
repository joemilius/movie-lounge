import React from "react";

// prettier-ignore
function MovieCard ( { movie, addMovie } ) {

  
  function handleClick ( e ) {
    const newMovie = {
      id: '',
      img: e.target.currentSrc,
    }
    addMovie(newMovie);
  }


  return (
    <div >
      <div>
        {movie.poster_path ? (
          <img onClick={handleClick}

            src={`https://image.tmdb.org/t/p/w200${ movie.poster_path }`}
            alt={`${ movie.title } Poster`}
            style={{cursor: 'pointer'}}
          />
        ) : (<span>No Img</span>)}
      </div>

      <div>
        <h3>Title: {movie.title}</h3>
        <h4>Release Date: {movie.release_date.substring(0,4)}</h4>
      </div>
    </div>
  )
}

export default MovieCard;
