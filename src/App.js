import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'
import Newsboard from './Components/Newsboard'
const App = () => {
    const[category,setCategory]=useState('general')
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default App
