import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

import './Add.css'
import axios from 'axios';


function Add() {
  const navigator=useNavigate()
const [contact,setContact]=useState({
fname:"",
lname:"",
dob:"",
email:"",
number:"",
altnumber:""
})
const handleChange=(e)=>{
  setContact((pre)=>({...pre,[e.target.name]:e.target.value}))
}
  const addTask=async(e)=>{
    e.preventDefault();
 const res=await axios.post("http://localhost:3000/api/add",contact);
 console.log(res);
 if(res.status==201){

  navigator('/')
 
 }
}



    return (
    <>
      <div className="main">
                <div className="outer">
                  <p> Add Contact</p>
                   <div className="sub">
                    <form>
                    
  
  <div className="name"><label htmlFor="name">Name:<br></br> </label>
  <input name='fname' type="text" id='name' onChange={handleChange} value={contact.fname}   /> <br></br></div>
  <label htmlFor="name">Lname:<br></br></label>
  <input name='lname' type="text" id='Fname' onChange={handleChange}  /><br></br>
  <label htmlFor="email">Email :<br></br></label>
  <input name='email' type="text" id='email' onChange={handleChange}  /><br></br>
  <label htmlFor="email">DOB  :<br></br> </label>
  <input name='dob' type="text" id='DOB' onChange={handleChange}  /><br></br>
  <label htmlFor="email">Number:<br></br></label>
  <input name='number' type="text" id='number' onChange={handleChange} /><br></br>
  <label htmlFor="email">Alternative Number:<br></br> </label>
  <input name='altnumber' type="text" id='Alternativenumber' onChange={handleChange}  /><br></br>
  <button id='add' onClick={addTask}>Save</button>


                    </form>
                 
                   </div>
                   
                </div>
                
      
      </div>
    </>
  )
}

export default Add
