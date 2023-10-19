import React from 'react'
import "./PriceItem.css";
const PriceItem = () => {
  const planOptions = ["Lorem ","ipsum dolor ","sit amet ","consectetur adipisicing", "elit.", "Temporibus ","nihil eum."];
  return (
      <div className="price_item">
      <div className="price_item_cont">
        <div className="price_item_top">
        <h3>Plan</h3>
          <div className="item_des">
            <div>
            <span>$ 10</span>
            <span>/month</span>
            </div>
            <span style={{fontSize:"10px"}}>No Hidden Charges</span>
        </div>
        <div className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil eum.
        </div>
        
        </div>
        <div className="price_item_bottom">
          <button className='btn_subscribe'>SUBSCRIBE</button>
        </div>
      </div>
      <div className="plan_options">
        {
          planOptions.map((option, index) =>(
            <span key={index}>{option}</span>
           ) )
      }
      </div>
    </div>
  )
}

export default PriceItem