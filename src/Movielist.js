import React,{useState,useContext} from 'react';

import { MovieContext } from './MovieContext';
import Movie from './Movie';
function Movielist() {
   const[movies,setMovies]=useContext(MovieContext);
    return (
        <div>
            
         {
            movies.map(movie =>(
                 <Movie  name={movie.name} price={movie.price} id={movie.id} key={movie.id}/>
            )) } 
        </div>
        
    )
}

export default Movielist
