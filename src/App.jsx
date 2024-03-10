import React from 'react'
import './App.css'
import Allpage from './Allpage'
import { Routes, Route} from 'react-router-dom'
import Myproject from './Component/MyAllProject/Myproject'

function App() {

  return (
    <div className='App'>
      <Routes>
          <Route path='/' element={<Allpage />} />
          <Route path='/myproject' element={<Myproject />} />
      </Routes>
	  </div>
  )

}
export default App
