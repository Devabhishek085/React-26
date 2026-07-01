import React from 'react'

const App = () => {
  // const user=localStorage.getItem("user")
  // console.log(user);
  // localStorage.clear()
  
  // const myobj={
  //   username:"Abhiii",
  //   age:21,
  //   city:"Lko"
  // }
  // localStorage.setItem("obj",JSON.stringify(myobj))
  const user=JSON.parse(localStorage.getItem("obj"))
  console.log(user);
  

  return (
    <div>App</div>
  )
}

export default App