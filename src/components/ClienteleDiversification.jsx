import React from "react";
import Industries from './Industries';

import Automobile from '../assets/images/car-64x64.png';
import AutoComponents from '../assets/images/components-64x64.png';
import Apparels from '../assets/images/jacket-64x64.png';
import Alcohol from '../assets/images/wine-bottle-64x64.png';
import ArchitecturalLightning from '../assets/images/Architectural-Lightning-93x64.png';
import Engineering from '../assets/images/machinery-64x64.png';
import Spun from '../assets/images/yarn-ball-102x64.png';

import Courier from '../assets/images/ship-64x64.png';
import Food from '../assets/images/Fast-Food-icon-64x64.png';
import Health from '../assets/images/drug.png';
import Internet from '../assets/images/services.png';
import Insurance from '../assets/images/protection-shield-icon-2-64x64.png';
import Advisory from '../assets/images/advisory-icon-64x64.png';
import Medical from '../assets/images/Medical-Tourism-64x64.png';
import Online from '../assets/images/Online-Laundry-64x64.png';
import Software from '../assets/images/SoftDevIcon-64x64.png';
import Systems from '../assets/images/window-64x64.png';


const ClienteleDiversification = () => {
  return(
    <>
      <section className="section-color my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 title">
              <h2>Manufacturing Industries</h2>
            </div>
          </div>
          <div className="row">
              <div className="col-lg-3">
                <Industries industries_icon={Automobile} title="Automobile" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={AutoComponents} title="Auto Components" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={Apparels} title="Apparels" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={Alcohol} title="Alcohol" />
              </div>
          </div>
          <div className="row mt-5">
              <div className="col-lg-4">
                <Industries industries_icon={ArchitecturalLightning} title="Architectural Lightning" />
              </div>
              <div className="col-lg-4">
                <Industries industries_icon={Engineering} title="Engineering & Heavy Fabrication" />
              </div>
              <div className="col-lg-4">
                <Industries industries_icon={Spun} title="Spun & Blended Yarns" />
              </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-12 title">
              <h2>Service Industries</h2>
            </div>
          </div>
          <div className="row">
              <div className="col-lg-3">
                <Industries industries_icon={Courier} title="Courier / Cargo Aggregators" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={Food} title="Food & Beverages" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={Health} title="Health Service Aggregators" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={Internet} title="Internet Service Providers" />
              </div>
          </div>
          <div className="row my-5">
              <div className="col-lg-3">
                <Industries industries_icon={Insurance} title="Insurance TPA" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={Advisory} title="Insurance Advisory & Broking" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={Medical} title="Medical Tourism" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={Online} title="Online Laundry" />
              </div>
          </div>
          <div className="row my-5">
              <div className="col-lg-3">
                <Industries industries_icon={Software} title="Software Development" />
              </div>
              <div className="col-lg-3">
                <Industries industries_icon={Systems} title="Systems Integrator" />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClienteleDiversification;