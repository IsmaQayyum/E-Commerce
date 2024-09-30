import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Login from './Pages/Login'
import Menshits from './Pages/Menshits'
import Register from './Pages/Register'
import DetailPage from './Pages/DetailPage'

import ShoppingCard from './Pages/ShoppingCard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/men' element={<Mens/>}></Route>
      <Route path='/women' element={<Womens/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/menshirts' element={<Menshits/>}></Route>
      <Route path='/cards/:id' element={<DetailPage/>}></Route>
      <Route path='/cart' element={<ShoppingCard/>}></Route>
     </Routes>
     
    </>
  )
}

export default App
