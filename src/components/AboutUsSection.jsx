import React, {useEffect} from 'react';
import aboutUs from '../assets/images/about-us-section.jpg';

const AboutUsSection = () => {

  return (
    <>
      <div className="container pb-lg-5 pb-0">
        <div className="row">
          <div className="col-lg-6 col-md-12 ">
            <a className="" href="https://www.youtube.com/watch?v=Lb4IcGF5iTQ" target="_blank">
            <img src={aboutUs} alt="" />
            </a>
          </div>
          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 d-flex align-items-center">
            <div>
              <div className="title">
                <h2>Who we Are</h2>
                <p>About us</p>
              </div>
              <p>ViTWO was conceptualized and established to have a competitive presence across the country, offering the entire gamut of services including Management Consultation, Advisory & Assurance, Corporate Governance, Indirect Tax & regulatory and Risk Advisory services..</p>
              {/* <div className="box-sign">
                <img alt="sign" src={sign} />
                <b>Albert Patterson</b>
                <span>Founder & CEO</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default AboutUsSection;