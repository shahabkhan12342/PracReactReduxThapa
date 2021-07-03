import React,{useState,useContext} from 'react';

import { MovieContext } from './MovieContext';

function Nav() {
    const[movies,setMovies]=useContext(MovieContext);
    return (
        <div>
            <h3>Dev Ed</h3>
            <p> List of Movies :{movies.length}</p>
        </div>
    )
}

export default Nav
