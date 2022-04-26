import React from 'react'
import { Link } from 'react-router-dom'

const BreadcamProps = ({ heading, subheading, navitem1, navitem2, navitem3, styles }) => {
  return (
    <div>
      <div className="about_us" style={styles}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container">
                <h1>{heading}</h1>
                <h2>{subheading}</h2>
                <ol className="breadcrumb_style">
                  <li><Link to="/">{navitem1}</Link> &nbsp; / &nbsp; </li>
                  <li><a href="/">{navitem2}</a></li>
                  <li><a href="/">{navitem3}</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadcamProps;

