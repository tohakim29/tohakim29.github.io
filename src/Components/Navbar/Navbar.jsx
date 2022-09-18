import React, {useState} from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'

import Link from 'react-scroll/modules/components/Link'

const Navbar = () => {
  const [showFaicon, setshowFaicon] = useState(false)


  const toggleNavbar = ()=>{
    setshowFaicon(!showFaicon)   
  }

  return (
    <div className=  {`  ${showFaicon ?'n-wrapper n-toggle':'n-wrapper'}  `}>
        <div className="n-left">
            <div className="n-name">TaKiM</div>
            <Toggle/>
        </div>
        <div className='fabar' onClick={toggleNavbar}><FaBars/></div>
        <div className={`  ${showFaicon ?'n-right none':'n-right'}  `}>
            <div className={ `${showFaicon ? "n-list show-container":"n-list" }  `} 
               
            >
                <ul >
                   
                   <Link spy={true} to = "Navbar" smooth={true} activeClass= "activeClass">
                          <li>Home</li>
                   </Link>
                   <Link spy={true} to =  "Services" smooth={true}>
                        <li>Services</li>
                   </Link>
                   <Link spy={true} to = "Experience" smooth={true} >
                             <li>Experience</li>
                   </Link>
                   <Link spy={true} to =  "Portfolio" smooth={true} >
                           <li>Portfolio</li>
                   </Link>
                   <Link spy={true} to = "Testimonial" smooth={true}>
                          <li>Testimonials</li>
                   </Link>    
                </ul>
            </div>

            <button className="button n-button">
            <Link spy={true} to = "Contact" smooth={true}>    Contact Me  </Link> 
            </button>
        </div>
    </div>
  )
}

export default Navbar