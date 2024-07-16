import { useEffect, useState } from 'react'
import './Details.css'
import axios from 'axios';
import {useParams} from 'react-router-dom'

function Details() {
 const{id}=useParams();
 const [data,setData]=useState([]);
 const [count,setCount]=useState(0)

  const getData=async()=>{
    console.log(id);
    const res=await axios.get("http://localhost:3000/api/get");
    setData([...res.data])
  }
  useEffect(()=>{
    getData()
  },[count])
  async function handleDelete(id){
    console.log(id);
    const res=await axios.delete(`http://localhost:3000/api/delete/${id}`)
    console.log();
    alert(res.data.msg)
  }

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
                   <button id='delete' onClick={()=>{handleDelete(`${dt.id}`)}}>Delete</button>

                 </ul>

        

                   <button id='edit'>Edit</button>
                   
                   </div>
                   
                </div>
                
      
      </div>
    </>
  )
}

export default Details