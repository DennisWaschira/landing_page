import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
      <div className="hero main_width">
          <div className="hero_cont">
              
          
          <div className="hero_left">
              <span className="title_sm">
                  Currency Rates

              </span>
              <div className="title_lg">
                  Real Time, Intraday & <br />
                  Historical Market Data API
              </div>
              <div className="description">
                  Free,easy-to-use REST API interface delivering <br/> currency exchange rate data
              </div>
              <div className="card">
                  <div className="card_left">
                      <div className="card_title">
                          1000 Monthly Request 
                      </div>
                      <div className="card_details">
                          Free Forex data for hundreds of <br />
                          currencies around the world
                      </div>
                  </div>
                  <div className="card_right">
                      <span>FREE</span>
                      <span>GET API KEY</span>
                  </div>
              </div>
          </div>
          <div className="hero_right">
              <img src="./image 1.png" alt="" />
          </div>
          </div>
        </div>
  )
}

export default Hero