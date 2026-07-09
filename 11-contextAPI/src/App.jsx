import React from 'react'
import Counter from './components/Counter'
import { useContext } from 'react'
import { ConterContext } from './context/Counter'

const App = () => {
  const counterState=useContext(ConterContext);
  return (
    <div className=''>
      <h1>Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

export default App