import React from 'react'
import "./Footer.css"
import FooterTop from './FooterTop/FooterTop'
import FooterBottom from './FooterBottom/FooterBottom'
const Footer = () => {
  return (
      <div className="footer">
          <div className="footer_cont">
              <FooterTop />
              <FooterBottom/>
          </div>
    </div>
  )
}

export default Footer