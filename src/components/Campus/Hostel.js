import React from 'react'

import {IoMdArrowDropright} from "react-icons/io";
import './Hostel.css'


export default function Hostel() {
  return (
    <div className='content-container'>
         <div className='col-12 hstl' data-aos='fade-up' data-aos-delay='100'>
        <h1 className='head' data-aos='fade-up' data-aos-delay='100'> RESIDENTIAL FACILITY FOR STUDENTS</h1>
      <IoMdArrowDropright  size="30" className='back-clr'/><span className='para'>A Safe and Secure Residential Facility with homely environment is available for students.</span><br/>
      <IoMdArrowDropright size="30" className='back-clr'/><span className='para'> Spacious and Airy rooms are available. </span><br/>
      <IoMdArrowDropright size="30" className='back-clr'/><span className='para'>Basic necessities like Bed with matteress and pillows ,Table, Almirah, Hot water, Attached washrooms are available.
</span><br/>
      <IoMdArrowDropright size="30" className='back-clr'/><span className='para'> Medical Facilities available.</span><br/>
      <IoMdArrowDropright size="30" className='back-clr'/><span className='para'> Clean and spacious Mess availabe with dining area where fresh meals provided for Breakfast, Lunch and Dinner. </span><br/>
      <IoMdArrowDropright size="30" className='back-clr'/><span className='para'> Power Back-up facility. </span><br/>

     
      
   
    </div>
    </div>
  )
}
