import React from 'react'

import { BiAccessibility } from "react-icons/bi";


export default function NotFound() {
  return (
    <div className='content-container'>
<h2>
    Page Not Found
</h2>

<BiAccessibility size={45} style={{color:"red"}}/>
<div>
    <a href='/'>
    <button  className='btn btn-primary'>
        Back
    </button>
      </a>
     
</div>
    </div>
  )
}
