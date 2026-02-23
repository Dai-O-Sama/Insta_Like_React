import { useState } from 'react'
import './App.css'
import Instapost from './components/Instapost'
import Instalike from './components/Instalike'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='instapost'>
    <div className='post'>
      <div> <Instapost/> </div>
    </div>
    <div className='likebtn'>
      <div> <Instalike/> </div>
    </div>
    </div>
    </>
  )
}

export default App
