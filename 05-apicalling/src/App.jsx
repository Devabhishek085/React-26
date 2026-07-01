import React from 'react'
import axios from "axios"
import { useState } from 'react'

const App = () => {
  const [data, setdata] = useState([])
   async function getData(){
  //   const data=await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   const response=await data.json()
  //   console.log(response);
  // const response=await axios.get("https://jsonplaceholder.typicode.com/todos/1")
  // console.log(response);

  const res=await axios.get("https://picsum.photos/v2/list")
  console.log(res.data);
  setData(res.data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(){
          return <h3>Hello</h3>
        })}
      </div>
    </div>
  )
}
export default App