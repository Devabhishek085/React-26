import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [a, seta] = useState(0)
  const [b, setb] = useState(0)

  function achanging(){
    console.log("value of a changed");
  }
  function abchanging(){
    console.log("value of b changed");
  }
  useEffect(function(){
    console.log("useffect is running..");
  },[a,b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{seta(a+1)}}>Change A</button>
      <button onClick={()=>{setb(b-1)}}>Change B</button>
    </div>
  )
}

export default App