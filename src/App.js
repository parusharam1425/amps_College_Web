import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import './index.css';

import Home from './routes/Home';
import Eee from './components/Departments/Eee'
import Cse from './components/Departments/Cse'
import Mech from './components/Departments/Mech'
import Placements from './routes/Placements';
import Admissions from './routes/Admissions';
import Contact from './routes/Contact';
import Details from './components/Placements/Details';
import Blog from './components/Placements/Blog';
import Navbar from './components/Navbar';
import Hoome from './DataBase/Hoome';
import Footer from './routes/Footer';
import College from './components/AboutUs/College';
import Vision from './components/AboutUs/Vision';
import Gallery from './components/Placements/Gallery';
import Jobs from './components/Placements/Jobs';
import Faculty from './components/Faculty/Faculty';
import Hostel from './components/Campus/Hostel';
import Transport from './components/Campus/Transport';
import NotFound from './routes/NotFound';

import Form from './DataBase/submitAdmissions'


function App() {
  return (

    <>
    <Navbar/> 
    <Routes>


      <Route exact path='/' element={<Home/>} />
      <Route path='/departments/eee' element={<Eee/>} />
      <Route path='/admissions' element={<Admissions/>} />
      <Route path='/faculty' element={<Faculty/>} />
      <Route path='/departments/cse' element={<Cse/>} />
      <Route path='/departments/mech' element={<Mech/>} />
      <Route path='/placements' element={<Placements/>} />
      <Route path='/details' element={<Details/>} />
      <Route path='/college' element={<College/>} />
      <Route path='/vision' element={<Vision/>} />
      <Route path='/hostel' element={<Hostel/>} />
      <Route path='/transport' element={<Transport/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/jobs' element={<Jobs/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/not-found' element={<NotFound/>} />
        
      <Route path='/test' element={<Hoome/>} />
      <Route path='/testing' element={<Form/>} />
  
      
    </Routes>
     <Footer/>
     
    </>
  );
}

export default App;
