import {Outlet } from 'react-router-dom'
import Menu from './Components/Menu'

import './App.css'




function App() {
  
  return (
    <>
      <div className='app'>
          <Menu/>
          <Outlet/>
      </div>
    </>
  )
}

export default App
