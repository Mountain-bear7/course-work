import React from 'react'
// import './App.css'
import './index.css'
import Home from "./pages/Home";
import Shop from "./pages/Shop"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
  )
}

export default App
