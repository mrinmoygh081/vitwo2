import React from 'react';
import ValueProposition_img from '../assets/images/img-6.png';

const ValueProposition = () =>{
  return(
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="title text-center mb-2">
              <p>How Client’s would Gain</p>
            </div>
            <h2 className="text-center heading_style">Value Proposition</h2>
          </div>
        </div>
        <div className="row SupportSection_max_width">

          <div className="col-lg-6 col-md-6 col-12 text-center">
            <img src={ValueProposition_img} alt="" />
          </div>
          
          <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center">
          <section id="service">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="single_service hvr-curl-top-right">
                  <div className="single_service-left">
                    <div className="icon">
                      <i className="fa fa-laptop"></i>
                    </div>
                  </div>
                  <div className="single_service-body">
                    <h4 className="single_service-heading">web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                                      elit. Aenean commodo ligula.</p>
                  </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="single_service hvr-curl-top-right">
                  <div className="single_service-left">
                    <div className="icon">
                      <i className="fas fa-quidditch"></i>
                    </div>
                  </div>
                  <div className="single_service-body">
                    <h4 className="single_service-heading">Logo Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                                     elit. Aenean commodo ligula.</p>
                  </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="single_service hvr-curl-top-right">
                  <div className="single_service-left">
                  <div className="icon">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  </div>
                  <div className="single_service-body">
                    <h4 className="single_service-heading">Ui & Ux Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                               elit. Aenean commodo ligula.</p>
                  </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="single_service hvr-curl-top-right">
                  <div className="single_service-left">
                  <div className="icon">
                    <i className="fas fa-smile"></i>
                  </div>
                  </div>
                  <div className="single_service-body">
                    <h4 className="single_service-heading">Branding</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                                   elit. Aenean commodo ligula.</p>
                  </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="single_service hvr-curl-top-right">
                  <div className="single_service-left">
                  <div className="icon">
                    <i className="fa fa-crop"></i>
                  </div>
                  </div>
                  <div className="single_service-body">
                    <h4 className="single_service-heading">Devlopment</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                            elit. Aenean commodo ligula.</p>
                  </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="single_service hvr-curl-top-right">
                  <div className="single_service-left">
                    <div className="icon">
                      <i className="fa fa-cogs"></i>
                    </div>
                  </div>
                <div className="single_service-body">
                    <h4 className="single_service-heading">Security System</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing                                       elit. Aenean commodo ligula.</p>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </section>
          </div>

        </div>
      </div>
    </>
  )
}

export default ValueProposition