import React from 'react'

const Industries = ({ industries_icon, title}) => {
    return (
        <div>
            <div className="industries_items">
                <img src={industries_icon}></img>
                <div className="caption">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default Industries;