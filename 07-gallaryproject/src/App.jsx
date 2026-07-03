import React,{useEffect, useState} from 'react'
import axios from "axios";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [index,setindex]=useState(1)

  async function getData(){
    const resp=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setuserData(resp.data);
  }

  useEffect(function(){
    getData()
  },[userData,index])

  let printUserData="No user available";
  if (userData.length>0){
    printUserData=userData.map(function(elem,idx){

      return <div>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }
  
  return (
    <div className='bg-black text-white h-screen overflow-auto p-4'>
      <div className='flex flex-wrap gap-4'>
         {printUserData}
      </div>

      <div className='flex justify-centre items-centre p-4 gap-6'>
        

        <button 
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95'
        onClick={()=>{
          if (index>1)   setindex(index-1) 
        }}
        >Prev</button>

        <h3>Page {index}</h3>

        <button onClick={function(){
           setindex(index+1)
        }}
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95'
        >Next</button>
      </div>
    </div>
  )
}

export default App