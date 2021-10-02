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
    fetch( 'http://localhost:3000/watchList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    })
    addMovie(newMovie)
  }


  // prettier-ignore
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
        ) : ( <img
                onClick={handleClick}
                id={movie.id}
                src={'https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical-683x1024.jpg'}
                className='movie-btn'
                alt={`${ movie.title } Poster`}
                style={{cursor: 'pointer', width: 200, height: 299}}
              />
            )}
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
