import React from 'react';
import sectionImg from '../assets/images/img-5.png';


const InternationalVat = () => {
  return (
    <>
      <div className="container-fluid my-5 p-5">
      <h2 className="my-5 text-center heading_style">International VAT Reclaim</h2>
        <div className="row SupportSection_max_width">



          <div className="col-lg-5 col-12 d-flex align-items-center justify-content-center">
            <img src={sectionImg}></img>
          </div>

          <div className="col-lg-7 col-12">
            <div className="promotion-card-deck">

              <div className="promotion-card light">
                <div className="promotion-blob"></div>
                <div className="promotion-content">
                  <div className="box_icon_style">
                    <i className="fa-solid fa-plane-departure fa-2x"></i>
                  </div>
                  <p>Do you and your staff travel to Europe, Australia, Japan or Asia for business?</p>
                </div>
              </div>  

              <div className="promotion-card light">
                <div className="promotion-blob"></div>
                <div className="promotion-content">
                <div className="box_icon_style">
                    <i className="fa-solid fa-scale-unbalanced fa-2x"></i>
                </div>
                <p>Did you know that, in addition to the costs spent on, hotels, meals, transport, entertainment and other business expenses, you are paying additional amounts in Value-Added Tax (VAT), which are recoverable?</p>
                  </div>
              </div>  

              <div className="promotion-card light">
                <div className="promotion-blob"></div>
                <div className="promotion-content">
                <div className="box_icon_style">
                  <i className="fa-solid fa-sack-dollar fa-2x"></i>
                </div>
                <p>Claiming VAT refunds requires a substantial investment of time and resources. VAT rules are complex and differ by market. Businesses can miss out on significant savings if they do not effectively manage their VAT. Let us help you reclaim the VAT and cut business costs.</p>
                  </div>
              </div>  

              <div className="promotion-card light">
                <div className="promotion-blob"></div>
                <div className="promotion-content">
                <div className="box_icon_style">
                  <i className="fa-solid fa-hand-holding-hand fa-2x"></i>
                </div>
                <p>In partnership with Taxback International, a global leader in local and foreign automated VAT recovery, ViTWO Business Solutions LLP can help you with all your VAT obligations while maximizing your VAT refund opportunities with the VAT Recovery Solution.</p>
                  </div>
              </div> 

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default InternationalVat;