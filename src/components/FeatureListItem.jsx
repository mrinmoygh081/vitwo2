import React from 'react'

const FeatureListItem = ({ icon, title, para }) => {
    return (
        <div>
            <div className="feature_item">
                <i className={icon}></i>
                <div className="caption">
                    <h2>{title}</h2>
                    <p>{para}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureListItem