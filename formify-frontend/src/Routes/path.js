import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../Components/home';
import Feedback2 from '../Components/feedback2';
import AlanButton from '../Components/alanButton';
import Feedback1 from '../Components/feedback1';
import Navbar from '../Components/navbar';
import Thankyou from '../Components/thankYou';
import Login from '../Components/login';
import Signup from '../Components/signup';

export default function Paths() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/feedback1' element={<Feedback1/>}/>
        <Route path='/feedback2' element={<Feedback2/>}/>
        <Route path = '/thankyou' element={<Thankyou/>} />
        <Route path = '/login' element={<Login/>} />
        <Route path = '/signup' element={<Signup/>} />
      </Routes>
      <AlanButton />
    </Router>
  )
};
