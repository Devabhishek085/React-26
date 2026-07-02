import React from 'react'

const App = () => {
  const [data, setdata] = useState([])
  async function getData(){
    const resp=await fetch("https://picsum.photos/v2/list?page=2&limit=10") 
    setdata(resp.data)
    console.log(resp.data);
    
  }
  
  return (
    <div className='bg-black text-white h-screen'>
      <button 
      onClick={getData}
      className='bg-green-400 px-4 py-1 rounded m-2 active:scale-95'>
        Get data
      </button>
    </div>
  )
}

export default App