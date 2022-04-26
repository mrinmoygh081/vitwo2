import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadcamProps from '../components/master/BreadcamProps'
import ContactForm from '../components/ContactForm';

const styles = {
    marginBottom: "0",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
}

const Contact = () => {
    return (
        <div>
            <Header />
            <BreadcamProps heading="CONTACT US" subheading="OUR CORE VALUES" navitem1="Home" navitem2="Contact Us" styles={styles} />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact