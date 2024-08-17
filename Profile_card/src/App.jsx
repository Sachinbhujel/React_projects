import React from 'react'
import './App.css'
import User from './User'
import About from './About'
import Interest from './Interest'

function App() {

  return (
    <>
    <div class="user_profile">
      <div className='main'>
        <User />
        <About />
        <Interest />
      </div>
    </div>
    </>
  )
}

export default App
