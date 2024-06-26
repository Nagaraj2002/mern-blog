import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Projects from  './pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/sigin-in' element={<SignIn/>}/>
         <Route path='/sign-up' element={<SignUp/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}
