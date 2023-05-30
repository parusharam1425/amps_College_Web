import React from 'react'

import './Faculty.css'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Faculty() {
  return (
    <div className='content-container'>
         <div>
      <h1 className='heading'> Faculty</h1>
      <div className='text-justify'>
        <table className='table'> 
    
        <tbody data-aos='fade-up' data-aos-delay='100'>
          <tr className='tr-style' data-aos='fade-up' data-aos-delay='100'> 
            <td data-aos='fade-up' data-aos-delay='100'>SNO</td>
            <td data-aos='fade-up' data-aos-delay='100'> Name</td>
            <td data-aos='fade-up' data-aos-delay='100'> Designation </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='100'> 
            <td >1</td>
            <td> Mrs. SWATHI MARRI</td>
            <td> Principal(Administration)(Academic) </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='150'> 
            <td></td>
            <td></td>
            <td className='tr-style'> DEPARTMENT of ECE</td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>2</td>
            <td> Mr. MANIDEEP</td>
            <td> Senior Faculty </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>3</td>
            <td> Mr. ANUDEEP</td>
            <td> Senior Faculty </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>4</td>
            <td> Mr. PARUSHURAM YADAV</td>
            <td> Senior Faculty </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>5</td>
            <td> Mrs. KESARI SRIDEVI</td>
            <td> Senior Faculty </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>6</td>
            <td> Mr. SHARATH KUMAR</td>
            <td> Senior Faculty </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>7</td>
            <td> Mr. SHIVAKRISHNA PRASAD</td>
            <td> Senior Faculty </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td></td>
            <td></td>
            <td className='tr-style'> DEPARTMENT OF CSE </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>8</td>
            <td> Mrs.LAXMI KASIREDDY</td>
            <td> Asst Professor(PG) </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>9</td>
            <td> Mr. PURVIK SHETTY</td>
            <td>  Asst Professor(PG) </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>10</td>
            <td>Dr.RANJITHA CHAUL</td>
            <td> 	Asst Professor(PG) </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>11</td>
            <td> Dr.Ch.ANUSHA</td>
            <td>  Asst Professor(PG) </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>12</td>
            <td>	Ms.M.SANGEETHA</td>
            <td>  Asst Professor(PG) </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td></td>
            <td></td>
            <td className='tr-style'> DEPARTMENT OF EEE </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>13</td>
            <td>	Mr.GANESH</td>
            <td>  Faculty Member </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>14</td>
            <td>	Mr.VARAPRASAD</td>
            <td> Faculty Member </td>
          </tr>
          <tr data-aos='fade-up' data-aos-delay='200'> 
            <td>15</td>
            <td>	Mr.IRFAN ALI</td>
            <td> Faculty Member </td>
          </tr>
        </tbody>
        </table>
    </div>
    </div>

    </div>
  )
}
