

import React, { useState } from 'react'
import "./App.css"
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import SignupPage from './pages/SignupPage'
import WishedPage from './pages/WishedPage'
import UserContext from './context/Usercontext'
const App = () => {

  const [id,setid]=useState("");

  return (
   <UserContext.Provider value={{id:id,setid:setid}}>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/login' element={<Loginpage/>}></Route>
    <Route path='/signup' element={<SignupPage/>}></Route>
    <Route path='/liked' element={<WishedPage/>}></Route>
   </Routes>
   </BrowserRouter>
   </UserContext.Provider>
  )
}

export default App