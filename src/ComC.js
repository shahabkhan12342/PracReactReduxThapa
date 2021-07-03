import React from 'react';
import { FirstName, LastName } from './App';


function ComC() {
    return (
        <>
        <FirstName.Consumer>
            {
                (fname)=>{
                    return(
                        <LastName.Consumer>
                            {
                                (lname)=>{
                                    return(
                                        <h1>Name is {fname} {lname}</h1>
                                    )
                                }
                            }
                        </LastName.Consumer>
                    )
                }
            }



        </FirstName.Consumer>


        </>
        
    )
}

export default ComC
