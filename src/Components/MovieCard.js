import React from "react";

// prettier-ignore
function MovieCard ( { movie, addMovie } ) {

  
  function handleClick ( e) {
    const newMovie = {
      id: e.target.id,
      img: e.target.currentSrc,
      likeButton: false,
      dislikeButton: false
    }
    fetch( 'https://movie-lounge.herokuapp.com/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    })
    addMovie(newMovie)
  }


  return (
    <div >
      <div>
        {movie.poster_path ? (
          <img className='movie-btn' onClick={handleClick}
            id={movie.id}
            src={`https://image.tmdb.org/t/p/w200${ movie.poster_path }`}
            alt={`${ movie.title } Poster`}
            style={{cursor: 'pointer'}}
          />
        ) : (<div className='filler-poster'></div>)}
      </div>

      <div>
        <h3>Title: {movie.title}</h3>
        <h4>Release Date:

          {movie.release_date ? movie.release_date.substring( 0, 4 ): '-'}
        </h4>
      </div>
    </div>
  )
}

export default MovieCard;
