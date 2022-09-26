import React from 'react'; 
import "./scrollup.css"; 

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup"); 
        /* Når scroll er højere eller ligmed 560 viewport height,
        bliver show-scroll class'en tilføjet til a tagget med scroll-top class */
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll"); 
        else scrollUp.classList.remove("show-scroll"); 
    })
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp