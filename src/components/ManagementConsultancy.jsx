import React from 'react';
import Financial from '../assets/images/img-4.jpg';
import Governance from '../assets/images/img-1.png';

const ManagementConsultancy = () => {
  return (
    <>
      <div className="container pb-lg-5 pb-0">
        <h2 className="my-5 text-center heading_style">Management Consultancy</h2>
        
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 d-flex align-items-center">
            <div>
              <div className="title">
                <h2>Financial Management Services</h2>
              </div>
              <p>Aimed at helping to enhance finance function’s performance and increase its value to the business, we at VITWO provide a range of financial management services namely Finance Operations & Strategies, Decision Support System & Outsourced Finance Function</p>
              <div>
                <a href="/contact" className="btn_style">VIEW MORE</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={Financial} alt="" />
          </div>
        </div>


        <div className="row my-5">
          <div className="col-lg-6 col-md-12">
            <img src={Governance} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 d-flex align-items-center">
            <div>
              <div className="title">
                <h2>360o Governance</h2>
              </div>
              <p>We aim to service the mid-segment companies to provide significant value which are largely promoter / owner – managed businesses, by collaborating with them for growth and sustenance. We help to understand the owner’s perspective of criticality vis-à-vis the current status by conducting the Gap Analysis for key business areas</p>
              <div>
                <a href="/contact" className="btn_style">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default ManagementConsultancy;