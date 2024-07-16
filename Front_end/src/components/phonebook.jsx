import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './phonebook.css'
import axios from 'axios';

function phonebook() {
  const [data, setData] = useState([])
  const getData = async () => {

    const res = await axios.get("http://localhost:3000/api/get");
    console.log(res.data);
    setData([...res.data])
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="main">
        <div className="outer">
          <form>
            <input type="text" placeholder="Search" id="Search" />
          </form>
          <div className="sub">
            <ul>
              {data.map((dt,index)=>(
               <Link to={`/details/${dt._id}`}> <li key={index}>
               {dt.fname}
             </li></Link>
              ))}
            </ul>

          </div>
          <Link to={'/add'}> <div className="add">
            <h5>+</h5>
          </div></Link>
        </div>



      </div>
    </>
  )
}

export default phonebook
