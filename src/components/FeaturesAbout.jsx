import React from 'react';
import FeatureListItem from './FeatureListItem';



const FeaturesAbout = () => {
    return (
        <>
            <div className="container">
                <div className="row overflow_top">
                    <div className="col-lg-3 col-md-6 col-12 mb-5 mb-lg-0">
                        <FeatureListItem icon="fa-solid fa-computer" title="Smart softwares" para="Lorem ipsum, dolor sit amet consectetur adipisicing." />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-5 mb-lg-0">
                        <FeatureListItem icon="fa-solid fa-chart-simple" title="Trusted security" para="Lorem ipsum, dolor sit amet consectetur adipisicing." />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-5 mb-lg-0">
                        <FeatureListItem icon="fa-solid fa-award" title="Awards winners" para="Lorem ipsum, dolor sit amet consectetur adipisicing." />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-5 mb-lg-0">
                        <FeatureListItem icon="fa-solid fa-user" title="Great experience" para="Lorem ipsum, dolor sit amet consectetur adipisicing." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesAbout;