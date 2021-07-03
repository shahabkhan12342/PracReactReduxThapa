import React, { createContext } from 'react'
import Movielist from './Movielist';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index';

function App() {

  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()
  return (

    <>
    <div className='container'>

      <h1>Increment / Decrement Container</h1>
      <h1>Using React and Redux</h1>

      <div className='quantity'>
        <a className='quantity__minus' title='Decrement'
        onClick={()=>dispatch(decNumber())}><span>-</span></a>
        <input name='quantity' className='quantity__input' type='text' value={myState}/>
        <a className='quantity__plus' title='Decrement'
        onClick={()=>dispatch(incNumber())}><span>+</span></a>

      </div>

    </div>

    </>
  ) 
}

export default App;




