import React from 'react'

function Movie(props) {
    
    return (
        <div>
        <h3>{props.name}</h3>
        <h3>{props.id}</h3>
        <p>{props.price}</p>
            
        </div>
    )
}

export default Movie