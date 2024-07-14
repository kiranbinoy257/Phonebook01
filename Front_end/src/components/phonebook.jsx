import { useEffect, useState } from 'react'
import './phonebook.css'
import axios from 'axios';

function phonebook() {
 const [name,setName]=useState("");
 const [data,setData]=useState([]);
 const [count,setCount]=useState(0)
const handleChange=(e)=>{setName(e.target.value)}
  const addTask=async()=>{ 
    // const res=await fetch("http://127.0.0.1:3000/api/add",
    //   {
    //     headers:{"Content-Type":"application/json"},
    //     method:"post",
    //     body:JSON.stringify({name:name})
    //   }
    // )
    const res=await axios.post("http://localhost:3000/api/add",{ headers:{"Content-Type":"application/json"},name:name});
    console.log(res);
    if(res.status==201){
      alert(res.data.msg);
      setName("")
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
                   <form>
                    <input type="text" placeholder="Search" id="Search"/>
                   </form>
                   <div className="sub">
                   <ul>
          {data.map((dt,index)=>(<ul key={index}>{dt.name}</ul>))}
        </ul>

                   </div>
                   <div className="add">
                   <h4>+</h4>
                   </div>
                </div>
                
      
      </div>
    </>
  )
}

export default phonebook
