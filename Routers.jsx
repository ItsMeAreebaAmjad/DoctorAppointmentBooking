import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetail from '../pages/Doctors/DoctorDetail'
import Chat from '../pages/Chat'

import {Routes,Route} from 'react-router-dom'

 const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/doctors' element={<Doctors/>} />
    <Route path='/doctors/:id' element={<DoctorDetail/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Signup/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/chat' element={<Chat/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/services' element={<Services/>} />
  </Routes>
}

export default Routers;
