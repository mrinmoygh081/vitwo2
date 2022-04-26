import React from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadcamProps from '../components/master/BreadcamProps'
import BlogItem from '../components/BlogItem'
import BlogLatestItem from '../components/BlogLatestItem'

import blog1 from '../assets/images/blog1.jpg'
import b1 from '../assets/images/b1.jpg'

const styles = {
    marginBottom: "0",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
}
const Blog = () => {
    return (
        <div>
            <Header />
            <BreadcamProps heading="BLOG" subheading="OUR CORE VALUES" navitem1="Home" navitem2="BLOG" styles={styles} />

            <div className="section-base">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">

                            <BlogItem blogImg={blog1} />
                            <BlogItem blogImg={blog1} />
                            <BlogItem blogImg={blog1} />

                        </div>
                        <div className="col-lg-4 col-12 widget">
                            <form className="form-box">
                                <div className="input-text-btn">
                                    <input className="input-text" type="text" placeholder="Search ..." />
                                    <input type="submit" value="Search" className="btn" />
                                </div>
                            </form>
                            <hr className="space-sm" />
                            <h3>Categories</h3>
                            <hr className="space-xs" />
                            <div className="menu-inner menu-inner-vertical">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Finance and money
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Software
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Technology
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Business
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <hr className="space-sm" />
                            <h3>Latest Posts</h3>
                            <hr className="space-xs" />
                            <div className="menu-inner menu-inner-vertical menu-inner-image">
                                <ul>
                                    <BlogLatestItem blogLatestImg={b1} />
                                    <BlogLatestItem blogLatestImg={b1} />
                                    <BlogLatestItem blogLatestImg={b1} />
                                    <BlogLatestItem blogLatestImg={b1} />
                                </ul>
                            </div>
                            <hr className="space-sm" />
                            <h3>Tags</h3>
                            <hr className="space-xs" />
                            <div className="list-tags">
                                <a>Software</a><a>Finance</a><a>Tips</a><a>Breaking</a><a>Tech</a><a>Economy</a><a>Data</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog