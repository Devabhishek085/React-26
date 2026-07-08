import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>This is React</h1>
    </UserContextProvider>
  )
}

export default App
