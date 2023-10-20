"use client";
import React from 'react'
import "./HeroNav.css";


const HeroNav = () => {
  return (
      <div className="hero_nav">
          <div className="hero_nav_cont">
              <span className="hero_nav_desc">
                Trusted by 100,000+ 
                  Developers worldwide.
              </span>
              <div className="images_list">
      
              <img className="item" src="./Item2.png" alt="png" />
              
              <img className="item" src="./Item5.png" alt="png" />
              <img className="item" src="./Itemone.png" alt="png" />
              <img className="item" src="./Item4.png" alt="png" />
              <img className="item" src="./Item3.png" alt="png" />
              </div>
          </div>
          
    </div>
  )
}

export default HeroNav