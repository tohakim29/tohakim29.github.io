import React from 'react'
import  './Intro.css'
import Github from "../../img/github1.png";
import LinkedIn from "../../img/linkedin1.png";
import Instagram from "../../img/instagram1.png";

import Vector1 from "../../img/Vector1.png"; 
import Vector2 from "../../img/Vector22.png";
import boy from "../../img/boy.png";  
import thumbup from "../../img/thumbup.png"; 
import Crown from "../../img/crown.png"; 
import glassesimoji from "../../img/glassesimoji.png"; 

import FloatingDiv from '../FloatingDiv/FloatingDiv';

import { motion } from "framer-motion";


const Intro = () => {


  const transition = { duration: 2, type: "spring" };


  return (
    <div className="intro">
        
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I am</span>
                <span><span style={{color:"#F40000"}}>T</span>ahir Kimsanov</span>
                <span>FullStack Developer with high level of Experience in web development and web designing</span>
            </div>
           <a href="https://www.linkedin.com/in/tahir-kimsanov-153ba5131/"> <button className="button i-button">   Visit Me On LinkedIn  </button></a>
            <div className="i-icons">
             <a href="https://github.com/tohakim29"><img src={Github} alt="" /></a>   
             <a href="https://www.linkedin.com/in/tahir-kimsanov-153ba5131/"><img src={LinkedIn} alt="" /></a> 
             <a href="http"><img src={Instagram} alt="" /></a> 
            </div>
        </div>


        <div className="i-right">
           <img src={Vector1}  />
           <img src={Vector2}  />
           <img src={boy}  id='tahirboy'/>
           <motion.img  src={glassesimoji}    alt=""
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          />

           <motion.div 
            initial={{top: '-4%',left:'74%' }}
            whileInView={{ left: "68%" }}
            transition={transition} 
            className ='floating-div'
           >
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
           </motion.div>

           <motion.div 
           initial={{top: '78%',left:'0%' }}
           whileInView={{ left: "-6%" }}
           transition={transition} 
           className ='floating-div'
           >
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
           </motion.div>   

           {/* blur divs */}    
           <div className="blur" style={{background:"rgb (236 210 255)"}}>
           </div>
           <div className="blur" style={{background:"#82D5FF", top: '17rem', width: '21rem',
          height: '11rem',  left:'-9rem'}}>
           </div>
        </div>

    </div>
    
  )
}

export default Intro