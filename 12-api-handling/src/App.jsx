import React,{useEffect,useState} from 'react'
import {getPosts} from './api/Calling'

const App = () => {
  const [data, setdata] = useState(null)
  useEffect(()=>{
    getPosts().then((posts)=> setdata(posts) )
  },[])

  return (
    <div>
      {data ? data.map((e) => <li key={e.id}>{e.body}</li>) : <p>No data</p>}
    </div>
  )
}

export default App