import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes,FaSun, FaMoon } from 'react-icons/fa';
import Logo from '../assects/logo-psm.jpeg';

// import Header from '../routes/Header';

import './Navbar.css';
import Header from '../routes/Header';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownAcademics, setDropdownAcademics] = useState(false);
  const [dropdownPlacements, setDropdownPlacements] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownCampus, setDropdownCampus] = useState(false);
  const [dropdownDepartments, setDropdownDepartments] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleDropdownAcademics = () => setDropdownAcademics(!dropdownAcademics);
  const handleDropdownPlacements = () => setDropdownPlacements(!dropdownPlacements);
  const handleDropdownAbout = () => setDropdownAbout(!dropdownAbout);
  const handleDropdownCampus = () => setDropdownCampus(!dropdownCampus);
  const handleDropdownDepartments = () => setDropdownDepartments(!dropdownDepartments);

  const handleNightMode = () => {
    setIsNightMode(!isNightMode);
   document.documentElement.classList.toggle('night-mode');
 
  };

  return (
   
    <div className='main fixed-top'>
        <Header/>
      <div>
      <nav className={`navbar navbar-expand-lg   ${isNightMode ? 'navbar-dark bg-dark' : ' b navbar-light'}`}>
      <div className="container list">
        <Link to="/" onClick={closeMobileMenu} className="logo-link">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="humburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#fff' }} />
          ) : (
            <FaBars size={20} style={{ color: '#fff' }} />
          )}
        </div>
         <div className="night-mode-toggle night" onClick={handleNightMode}>
          {isNightMode ? <FaSun size={20} style={{ color: '#fff' }}/> : <FaMoon size={20} style={{ color: '#fff' }}/>}
        </div> 
          
        
        <div className={`collapse navbar-collapse ${click ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto nav-menu">
            <li className="nav-item">
              <Link to="/" className="a" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className={`nav-item dropdown ${dropdownAbout ? 'show' : ''}`}
              onMouseEnter={handleDropdownAbout}
              onMouseLeave={handleDropdownAbout}
            >
              <Link className="a dropdown-toggle" onClick={closeMobileMenu}>
                About Us
              </Link>
              <ul className={`dropdown-menu ${dropdownAbout ? 'show' : ''}`} >
                <li>
                  <Link to="/college" className="dropdown-item" onClick={closeMobileMenu}>
                    About College
                  </Link>
                </li>
                <li>
                  <Link to="/vision" className="dropdown-item" onClick={closeMobileMenu}>
                    Vision and Mission
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown ${dropdownAcademics ? 'show' : ''}`}
              onMouseEnter={handleDropdownAcademics}
              onMouseLeave={handleDropdownAcademics}
            >
              <Link className=" a dropdown-toggle a" onClick={closeMobileMenu}>
                Academics
              </Link>
              <ul className={`dropdown-menu ${dropdownAcademics ? 'show' : ''}`}>
                <li
                  className={`nav-item dropdown dropright ${dropdownDepartments ? 'show' : ''}`}
                  onMouseEnter={handleDropdownDepartments}
                  onMouseLeave={handleDropdownDepartments}
                >
                  <Link
    
                    className="dropdown-item dropdown-toggle"
                    onClick={closeMobileMenu}
                  >
                    Departments
                  </Link>
                  <ul className={`dropdown-menu dropdown-menu-right ${dropdownDepartments ? 'show' : ''}`}>
                    <li className="dropdown-submenu">
                      <Link
                        to="/departments/eee"
                        className="dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        EEE
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <Link
                        to="/departments/cse"
                        className="dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        CSE
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <Link
                        to="/departments/mech"
                        className="dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        MECH
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/faculty"
                    className="dropdown-item"
                    onClick={closeMobileMenu}
                  >
                    Faculty
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link to="/admissions" className="a" onClick={closeMobileMenu}>
                Admissions
              </Link>
            </li>
            <li className={`nav-item dropdown ${dropdownCampus ? 'show' : ''}`}
              onMouseEnter={handleDropdownCampus}
              onMouseLeave={handleDropdownCampus}>
              
              <Link className="a dropdown-toggle" onClick={closeMobileMenu}>
                Campus Life
              </Link>
              <ul className={`dropdown-menu ${dropdownCampus ? 'show' : ''}`}>
                <li>
                  <Link to="/hostel" className="dropdown-item" onClick={closeMobileMenu}>
                    Hostel Facility
                  </Link>
                </li>
                <li>
                  <Link to="/transport" className="dropdown-item" onClick={closeMobileMenu}>
                    Transport Facility
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown ${dropdownPlacements ? 'show' : ''}`}
              onMouseEnter={handleDropdownPlacements}
              onMouseLeave={handleDropdownPlacements}
            >
              <Link className="a dropdown-toggle" onClick={closeMobileMenu}>
                Placements
              </Link>
              <ul className={`dropdown-menu ${dropdownPlacements ? 'show' : ''}`}>
                <li>
                  <Link to="/details" className="dropdown-item" onClick={closeMobileMenu}>
                    Placement Details
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="dropdown-item" onClick={closeMobileMenu}>
                    Placement Blog
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="dropdown-item" onClick={closeMobileMenu}>
                    Placement Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="dropdown-item" onClick={closeMobileMenu}>
                    Job Updates
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="a" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
      </div>
          </div>
      
      
    </nav>
          </div>
    </div>
        
          
  );
}
