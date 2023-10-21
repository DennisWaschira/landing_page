import React from 'react'
import styles from "./PriceCard.module.css";
import { useState } from "react";
import PriceItem from '../PriceItem/PriceItem.jsx'
const PriceCard = () => { 
    const [visible, setVisible] = useState(true);
    const [selected, setSelected] = useState(false);
 

return (
  <div className={`${styles.price_card} main_width`}>
  
    <div className={styles.price_card_cont}>
      <div className={styles.price_card_top}>
        <h3>Exchangerate Pricing Plans</h3>
        <div className={styles.billing_options}>
          <span className={selected === 1 ? styles.selected : styles.not_selected} onClick={() => setSelected(1)}>Monthly Billing</span>
          <span className={selected === 2 ? styles.selected : styles.not_selected} onClick={() => setSelected(2)}>Yearly Billing</span>
        </div>
        <p>
          Choose <b>annual billing</b> and <b>save up to 20%.</b>
        </p>
      </div>
      <div className={styles.price_list_items}>
        <PriceItem />
        <PriceItem />
        <PriceItem />
        <PriceItem />
        {visible ? <PriceItem /> : null}
      </div>
      <button className={`${styles.btn_show} ${visible ? styles.hide_item : ''}`} onClick={() => { setVisible(prev => !prev) }}>{visible ? "close" : "See more"}</button>
    </div>
  </div>
);

  
}

export default PriceCard