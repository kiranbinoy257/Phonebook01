import { useEffect, useState } from 'react'


import './Add.css'
import axios from 'axios';


function Add() {
 const [name,setName]=useState("");
 const [Lname,setLname]=useState("");
 const [email,setemail]=useState("");
 const [DOB,setDOB]=useState("");
 const [number,setnumber]=useState("");
 const [Alternativenumber,setAlternativenumber]=useState("");
 const [data,setData]=useState([]);
 const [count,setCount]=useState(0)
const handleChange=(e)=>{setName, setLname,setDOB,setemail,setnumber,setAlternativenumber(e.target.value)}
  const addTask=async()=>{ 
    // const res=await fetch("http://127.0.0.1:3000/api/add",
    //   {
    //     headers:{"Content-Type":"application/json"},
    //     method:"post",
    //     body:JSON.stringify({name:name})
    //   }
    // )
    const res=await axios.post("http://localhost:3000/api/add",{ headers:{"Content-Type":"application/json"},name:name,Lname:Lname,DOB:DOB,email:email,number:number,Alternativenumber:Alternativenumber});
    console.log(res);
    if(res.status==201){
      alert(res.data.msg);
      setName("")
      setLname("")
      setDOB("")
      setemail("")
      setnumber("")
      setAlternativenumber("")

      setCount(count+1)
    }
  }

  const getData=async()=>{
    // get todo
    const res=await axios.get("http://localhost:3000/api/get");
    setData([...res.data])
  }
  useEffect(()=>{
    getData()
  },[count])

    return (
    <>
      <div className="main">
                <div className="outer">
                  <p> Add Contact</p>
                   <div className="sub">
                    <form>
                    
  
  <div className="name"><label htmlFor="name">Name:<br></br> </label>
  <input type="text" id='name' onChange={handleChange}  value={name} /> <br></br></div>
  <label htmlFor="name">Lname:<br></br></label>
  <input type="text" id='Fname' onChange={handleChange} value={Lname} /><br></br>
  <label htmlFor="email">Email :<br></br></label>
  <input type="text" id='email' onChange={handleChange}  value={email} /><br></br>
  <label htmlFor="email">DOB  :<br></br> </label>
  <input type="text" id='DOB' onChange={handleChange}  value={DOB} /><br></br>
  <label htmlFor="email">Number:<br></br></label>
  <input type="text" id='number' onChange={handleChange}  value={number} /><br></br>
  <label htmlFor="email">Alternative Number:<br></br> </label>
  <input type="text" id='Alternativenumber' onChange={handleChange}  value={Alternativenumber} /><br></br>
  <button id='add' onClick={addTask}>Save</button>


                    </form>
                 
                   </div>
                   
                </div>
                
      
      </div>
    </>
  )
}

export default Add
