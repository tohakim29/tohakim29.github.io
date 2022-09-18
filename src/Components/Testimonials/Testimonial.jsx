import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react';

import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile4.jpg'


import { Pagination } from 'swiper';
import "swiper/css/pagination"
import 'swiper/css'

const Testimonial = () => {

  const clients = [
    {
      img: profilePic1,
      review: 'I ordered a very nice internet shop, great job',
    },
    {
      img: profilePic2,
      review: 'I am driving a truck in USA, and I ordered a website, a truck tracker, I liked the web he created for me',
    },
  ]
    


  return (
    <div className="t-wrapper" id='Testimonial'>

        <div className="t-heading">
          <span>Constantly Improvement</span>
      
          <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
          <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
        </div>


        {/* slider */}
        <Swiper 
                modules={[Pagination]}
                slideperview={1}
                pagination={{clickable:true}}
              >

              {  clients.map( (client,index)=>{
                return(
                    <SwiperSlide key={index}>
                      <div className='testimonial'>
                        <img src={client.img}/>
                        <span>{client.review}</span>
                      </div>
                    
                    </SwiperSlide>
                )
              })
              }
             
        </Swiper>

    </div>
  )
}

export default Testimonial