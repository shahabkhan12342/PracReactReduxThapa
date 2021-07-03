import React,{useState,createContext} from 'react'

export const MovieContext=createContext();

export const MovieProvider=props=>{
    const [movies,setMovies]=useState([
        {
            name:'Harry Porter',
            price:'$10',
            id:23123
        },
        {
            name:'Game of Thrones',
            price:'$10',
            id:25556
        },
        {
            name:'Inception',
            price:'$10',
            id:23123
        }
        ]);
        return(
            <MovieContext.Provider value={[movies,setMovies]}>
                {props.children}
            </MovieContext.Provider>

        )
}
