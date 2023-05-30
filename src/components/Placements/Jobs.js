import React from 'react'

import { FaRegHandPointRight} from "react-icons/fa";
import {BiRightArrowAlt} from 'react-icons/bi'


export default function Jobs() {
  return (
    <div className='content-container'>
        <div className='bg-img'>
      <header className='heading'>Job Updates</header>
    </div>
    <div className='sub-item' data-aos='fade-up' data-aos-delay='100'>
      <h1 className='text-center'>Job Updates
      </h1>
            <a className='a' href='/details'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>Placement Details</span>
            </a>
          </div>
          <hr />
          <div className='sub-item' data-aos='fade-up' data-aos-delay='200'>
          <a className='a' href='/blog'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>CRT</span>
            </a>
          </div>
          <hr />
          <div className='sub-item' data-aos='fade-up' data-aos-delay='300'>
          <a className='a' href='/gallery'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>Placement Gallery</span>
          </a>
          </div>
          <hr />
          <div className='sub-item' data-aos='fade-up' data-aos-delay='400'>
          <a className='a' href='/jobs'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>Job Updates</span>
          </a>
          </div>
          <hr />
      <header className='heading2'>Job Updates</header>
   <div className='spn'>
    <FaRegHandPointRight/> <span className='para'>  Ansys is hiring for the role of R&D Verification Engineer. Eligible batches (2019 pass-outs)</span><br/>
     </div>
    <div className='spn'>
    <FaRegHandPointRight/> <span className='para'> Microchip is hiring for the role of Intern. Eligible batches (2020 pass-outs)</span><br/>
    </div>
    <div className='spn'>
    <FaRegHandPointRight/> <span className='para'>  Bentley is hiring for the role of Associate Software Quality Analyst. Eligible batches (2020 pass-outs)</span><br/>
    </div>
    <div className='spn'>
    <FaRegHandPointRight/> <span className='para'>  Micro Focus is hiring for the role of Software Developer. Eligible batches (2019, 2018, 2017 pass-outs)</span><br/>
    </div>
    <div className='spn'>
    <FaRegHandPointRight/> <span className='para'>   Indigo is hiring for the role of Trainee-PLM. Eligible batches (2019 pass-outs)</span><br/>
    </div>
    <div className='spn'>
    <FaRegHandPointRight/> <span className='para'>  Ameex is hiring for the role of Associate Software Engineer. Eligible batches (2019, 2018 pass-outs)</span><br/>
    </div>
    <div className='spn'>
    <FaRegHandPointRight/> <span className='para'>  Xoriant is hiring for the role of Software Engineer. Eligible batches (2019 pass-outs)</span><br/>
    </div>
    <div className='spn'>
    <FaRegHandPointRight/> <span className='para'>   Flex is hiring for the role of Junior Engineer – Component Engineering. Eligible batches (2019 pass-outs)</span><br/>
    </div>
    <div className='spn'>
    <FaRegHandPointRight/> <span className='para'>  Nvidia is hiring for the role of DFT Engineer. Eligible batches (2019 pass-outs)</span><br/>
    </div>
    <div className='spn'>
    <FaRegHandPointRight/> <span className='para'>   Alamy is hiring for the role of Trainee – Development. Eligible batches (2019 pass-outs)</span><br/>
    </div>
    </div>
  )
}
