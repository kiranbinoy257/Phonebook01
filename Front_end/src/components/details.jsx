import { useEffect, useState } from 'react'
import './Details.css'
import axios from 'axios';

function Details() {
 
 const [data,setData]=useState([]);
 const [count,setCount]=useState(0)

  const getData=async()=>{
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
                  <p id='p1'>Contact Details</p>
                  
                  
                   <div className="sub">
                   <ul>
                    <p id='p2'>Name     :</p>          <p id='p3'>{data.map((dt,index)=>(<ul key={index}>{dt.name}</ul>))} </p>
                   <p id='p4'>Last Name :</p> <p id='p5'>{data.map((dt,index)=>(<ul key={index}>{dt.Lname}</ul>))}</p>
                   <p id='p6'>Email :</p> <p id='p7'>{data.map((dt,index)=>(<ul key={index}>{dt.email}</ul>))}</p>        
                   <p id='P8'>DOB:</p> <p id='p9'>{data.map((dt,index)=>(<ul key={index}>{dt.DOB}</ul>))}</p>
                   <p id='p10'>Number:</p> <p id='p11'>{data.map((dt,index)=>(<ul key={index}>{dt.number}</ul>))}</p>
                   <p id='p12'>Alternativenumber:</p><p id='p13'> {data.map((dt,index)=>(<ul key={index}>{dt.Alternativenumber}</ul>))}</p>

                 </ul>

        

                   <button id='edit'>Edit</button>
                   <button id='delete'>Delete</button>
                   </div>
                   
                </div>
                
      
      </div>
    </>
  )
}

export default Details