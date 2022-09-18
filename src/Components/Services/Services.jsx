import React from 'react'
import './Services.css'

import Card from '../Card/Card';

import HeartEmoji from "../../img/glassesimoji.png"; 
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";  
import Resume from './Programmer.pdf'

import { motion } from "framer-motion";

const Services = () => {  

  const transition = { duration: 2, type: "spring" };  //for animation


  return (
    <div className='services' id='Services'>
        {/*left side*/}
        <div className="awesome">
                <span>My   Awesome</span>              
                <span>services</span>
                <span>Nice projecst with nice features only for you</span>
      
       <a href={Resume} download> <button className='button s-button'>Download CV</button></a>
       <div className='blur s-blur1' style={{background:'#abf1ff94'}}></div>
        </div>
        
        {/*right side*/}
        <div className="cards">
              
              <motion.div
               initial={{ left: "40%" }}
               whileInView={{ left: "44%" }}
               transition={transition}
              >
               <Card 
               emoji ={HeartEmoji}
               heading= {'Designer'}
               detail = { 'Css, Bootstrap, Adobe illustrator'}
               />
              </motion.div>

              <motion.div 
               initial={{ top: '14rem', left: '-8%' }}
               whileInView={{ left: "-16%" }}
               transition={transition}
              >
               <Card 
               emoji ={Glasses}
               heading= {'Developer'}
               detail = { 'Html, Css, Javascript, React'}
               />
              </motion.div>

              <motion.div 
               initial={{top: '34rem', left: '34%' }}
               whileInView={{ left: "44%" }}
               transition={transition}
              >
               <Card 
               emoji ={Humble}
               heading= {'UI/UX'}
               detail = { ''}
               />
              </motion.div>
              <div className='blur s-blur2' style={{background:'#abf1ff94'}}></div> 
        </div>`


    </div>
  )
}

export default Services