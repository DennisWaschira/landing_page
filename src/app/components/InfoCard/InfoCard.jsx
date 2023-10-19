import React from 'react'
import "./InfoCard.css";
const InfoCard = () => {
  return (
      <div className="info_card main_width">
          <div className="info_card_cont">
              
         
          <div className="inf0_item">
              <h3>Update Every Minute</h3>
              <p>
                  Obtain real-time,accurate and reliable currency exchange rate data for 
                  hundreds of worldwide currencies, updated as often as every 60 seconds.
              </p>
          </div>
          <div className="inf0_item">
              <h3>200+ Currencies</h3>
              <p>
                  Our API is intergrated with a number of highly reputable foreign exchange rate sources, offering the most recent accurate rates for 200+
                  pais.
              </p>
          </div>
          <div className="inf0_item">
              <h3>Simple,Quick & Reliable</h3>

              <p>
                  Make use of a scalable infrastructure that can handle anything from a few requests a day up to thousands of API requests per second.
              </p>
          </div>
          <div className="inf0_item">
              <h3>No Credit Card Required</h3>
              <p>
                  Intergrate the API in under 10 minutes without the need of a credit card.
                 You will get 1000 monthly requests for free premium plans start at $10. 
              </p>
          </div>
          </div>
           </div>
  )
}

export default InfoCard