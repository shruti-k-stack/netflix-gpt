
import React from 'react';
import { MovieCard } from './MovieCard';

export const MovieList = ({title, movies}) => {
  console.log(movies);

  return (
    <div>
      <div>
      <h1>{title}</h1>
      </div>

      <div>
      <MovieCard poster={movies?.poster_path} />
      </div>
        
    </div>
  )
}
