import React from 'react';
import StartUp_img from '../assets/images/img-2.png';

const StartUp = () => {
  return (
    <>
      <section className="startup_bg pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="my-5 text-center heading_style">Management Consultancy</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <div>
                <div className="d-flex align-items-center mb-3">
                  <div>
                    <i className="fa-solid fa-circle-check fa-2x"></i>
                  </div>
                  <div>
                    <p className="px-3 m-0">The contribution of M&SME and Start-up companies in India has been significant towards the economic progress of the nation and possesses immense potential to contribute further.</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div>
                    <i className="fa-solid fa-circle-check fa-2x"></i>
                  </div>
                  <div>
                    <p className="px-3 m-0">The contribution of M&SME and Start-up companies in India has been significant towards the economic progress of the nation and possesses immense potential to contribute further.</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div>
                    <i className="fa-solid fa-circle-check fa-2x"></i>
                  </div>
                  <div>
                    <p className="px-3 m-0">The contribution of M&SME and Start-up companies in India has been significant towards the economic progress of the nation and possesses immense potential to contribute further.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={StartUp_img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default StartUp;