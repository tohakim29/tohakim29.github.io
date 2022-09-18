import React from 'react'
import './Portfolio.css'

import "swiper/css"
import {Swiper, SwiperSlide} from 'swiper/react'

import Lo from '../../img/project-photos/lo.png'
import MySite from '../../img/project-photos/portfolio.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'


const Portfolio = () => {
  return (
        <div className="portfolio" id='Portfolio'>

            {/**/}
            <span>Recent Projects</span>
            <span>Portfolio</span>



        <Swiper  
            spaceBetween={30} 
            sliderperview={3}
            grabCursor={true}
            className='portfolio-slider'
        >
              
            <SwiperSlide>
               <a href="https://wwww.lo.kg">
                  <img src={Lo}  />
               </a>
                <span>Technologies</span>
                <span>Php, Javascript, Jquery, MySql, PhpMyAdmin, Ajax</span>
            </SwiperSlide>
           
         
            <SwiperSlide>
                <a href="https://takim-portfolio.netlify.app/">
                  <img src={MySite}  />
                </a> 
                <span>Technologies</span>
                <span>React.js</span>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp}  />
                <span>Technologies</span>
                <span>React</span>
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC}  />
                <span>Technologies</span>
                <span>React</span>
            </SwiperSlide>
        </Swiper>

        </div>

  )
}

export default Portfolio