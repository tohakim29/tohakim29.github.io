import React from 'react'
import './Works.css'

import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

import { motion } from "framer-motion";
import Link from 'react-scroll/modules/components/Link'

const Works = () => {
  


  return (
    <div className="works">
        <div className="awesome">
                <span>Works for all these</span>              
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro expedita doloribus odio unde ad laborum, nesciunt nobis fugit eveniet voluptatibus hic asperiores minus recusandae! Numquam, eaque! Facilis, doloribus maiores!</span>
      
         <button className="button s-button">
         <Link spy={true} to = "Contact" smooth={true}>Hire Me</Link> 
         </button>
        <div className='blur s-blur1' style={{background:'#abf1ff94'}}></div>
        </div>



   {/*right side*/}
    <div className="w-right">      
      <motion.div 
       initial = {{rotate :45}}
       whileInView={{ rotate: 0}}   
       viewport = {{margin : '-40px'}}
       transition ={{duration: 2.5, type: "spring" }}
       className="w-mainCircle"
      >
              <div className="w-secCircle">
                <img src={Upwork}  />
              </div>
              <div className="w-secCircle">
                <img src={Fiverr}  />
              </div>
              <div className="w-secCircle">
                <img src={Amazon}  />
              </div>
              <div className="w-secCircle">
                <img src={Shopify}  />
             </div>
            <div className="w-secCircle">
                  <img src={Facebook}  />
            </div>
      </motion.div>

      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
    


    </div>


    </div>
  )
}

export default Works