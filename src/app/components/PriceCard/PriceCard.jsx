import React from 'react'
import "./PriceCard.css";
import { useState } from "react";
import PriceItem from '../PriceItem/PriceItem'
const PriceCard = () => {
    const [visible, setVisible] = useState(true);
    const [selected, setSelected] = useState(false);
  return (
      <div className="price_card main_width">
          <div className="price_card_cont">
              <div className="price_card_top">
                  <h3>Exchangerate Pricing Plans</h3>
                  <div className="billing_options">
                      <span className={selected == 1 ? "selected" : "not_selected"} onClick={() => setSelected(selected == 1)}>Monthly Billing</span>
                      <span className={selected==2? "selected":"not_selected"} onClick={()=>setSelected(selected == 2)}>Yearly Billing</span>
                  </div>
                  <p>
                      Choose <b>annual billing</b> and <b>save up to 20%.</b>
                  </p>
              </div>
              <div className="price_list_items">
                  <PriceItem/>
                  <PriceItem/>
                  <PriceItem/>
                  <PriceItem/>
                  {visible ?
                        <PriceItem />: ""
                  }
                    
                  
                  
              </div>
              <button className="btn_show hide_item"onClick={()=>{setVisible((prev)=>(!prev))}} >{visible?"close":"See more"}</button>
          </div>
    </div>
  )
}

export default PriceCard