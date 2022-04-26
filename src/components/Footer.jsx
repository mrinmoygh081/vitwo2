import React from "react";
import logo from '../assets/images/vitwo-logo.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
                <ul className="footer-box">
                  <li>
                    <img src={logo} alt="" />
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i> 14ES1, 14th Floor, East Tower Mani Casadona, Newtown Kolkata -700156
                  </li>
                  <li>
                    <i className="fa-solid fa-mobile-screen"></i> 
                    <span className="mx-1">Phone: +91 801 753 6666</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope-circle-check"></i> Email: support@vitwo.in
                  </li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div>
                  <h3 className="mb-4">BLOG & RESOURCES</h3>
                  <ul style={{ width: '80%'}}>
                    <li><a href="https://vitwo.in/budget-highlights_2021/">Budget Highlights_2021</a>Budget Highlights_2021</li>
                    <li><a href="https://vitwo.in/finance-ministers-speech-updates-reliefs-amid-covid-19-outbreak_subsequent-announcements/">Finance Minister’s Speech Updates: Reliefs Amid COVID-19 Outbreak_Subsequent Announcements</a></li>
                    <li><a href="https://vitwo.in/finance-ministers-speech-updates-reliefs-amid-covid-19-outbreak/">Finance Minister’s Speech Updates: Reliefs Amid COVID-19 Outbreak</a></li>
                    <li><a href="https://vitwo.in/mca-run-reserve-unique-name-company-name-approval-process/">MCA RUN (Reserve Unique Name) Company Name Approval Process.</a></li>
                  </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3 className="mb-4">SERVICES</h3>
              <ul className="">
                <li><a href="https://vitwo.in/financial-services/">Financial Services 24×7</a></li>
                <li><a href="https://vitwo.in/management-consulting/">Management Consulting</a></li>
                <li><a href="https://vitwo.in/assurance-services/">Assurance Services</a></li>
                <li><a href="https://vitwo.in/regulatory-advisory/">Regulatory &amp; Advisory</a></li>
                <li><a href="https://vitwo.in/international-vat-reclaim/">International VAT Reclaim</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <div className="container">
            <span>
            © 2022 - Technology And Business Template Handmade by 
            <a href="https://achievexsolutions.com/" target="_blank"><span className="link-color"> achievexsolutions.com</span></a>
            </span>
            <span>
              <a href="#" className="link-color">Contact Us</a>
              <span className="mx-1">|</span>
              <a href="#" className="link-color">Privacy policy</a>
            </span>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer;