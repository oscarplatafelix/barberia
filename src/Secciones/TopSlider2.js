/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Swiper from 'react-id-swiper';
import "react-id-swiper/src/styles/css/swiper.css";
import { Pagination, Navigation, Autoplay } from "swiper/dist/js/swiper.esm";
const params = {
    modules: [Pagination, Navigation, Autoplay], // Add nescessary modules here
    loop: true,
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
            console.log(className);
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
  };
class Header2 extends React.Component {
    render() { 
        return(
            <Swiper {...params}>
                <div style={{height: 10, backgroundColor: 'red'}}></div>
                <div style={{height: 10, backgroundColor: 'pink'}}></div>
                <div style={{height: 10, backgroundColor: 'blue'}}></div>
            </Swiper>
        );
    } 
};

export default Header2;