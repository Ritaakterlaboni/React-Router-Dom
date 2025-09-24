

import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './Component/Layout/RootLayout'
import Home from './Component/Page/Home'
import About from './Component/Page/About'
import Contact from './Component/Page/Contact'
import Signup from './Component/Page/Signup'
import Error from './Component/Page/Error'


function App() {
 

  return (
  <>
   <Routes>
    <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='*' element={<Error/>}/>
    </Route>
   </Routes>
  </>
  )
}

export default App
