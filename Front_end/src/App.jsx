import {useState} from 'react'
import Add from './components/Add'
import Phonebook from './components/phonebook'
import Details from './components/Details'

import React,{Component} from "react";import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App(){

const [count,setCount]=useState(0)
return(
<>
<BrowserRouter>
<Routes>
<Route path='/' Component={Phonebook}/>
<Route path='/add' Component={Add}/>
<Route path='/details/:id' Component={Details}/>


</Routes>


</BrowserRouter>
</>
)

 
}
export default App;