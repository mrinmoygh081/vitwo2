import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesAbout from '../components/FeaturesAbout';
import AboutUsSection from '../components/AboutUsSection';
import ClienteleDiversification from '../components/ClienteleDiversification';
import ManagementConsultancy from '../components/ManagementConsultancy';
import StartUp from '../components/StartUp';
import SupportSection from '../components/SupportSection';
import ValueProposition from '../components/ValueProposition';
import TechnologiesPlatform from '../components/TechnologiesPlatform';
import TaxOptimization from '../components/TaxOptimization';
import InternationalVat from '../components/InternationalVat';
import Testimonial from '../components/Testimonial';
import Counter from '../components/Counter';
import OurManagemenTeam from '../components/about_us/OurManagemenTeam'
import OurClients from '../components/OurClients';
import Footer from '../components/Footer';




const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <FeaturesAbout />
            <AboutUsSection />
            <ClienteleDiversification />
            <ManagementConsultancy />
            <SupportSection />
            <StartUp />
            <ValueProposition />
            <TechnologiesPlatform />
            <TaxOptimization />
            <InternationalVat />
            <Testimonial />
            <Counter />
            <OurClients />
            <OurManagemenTeam />
            <Footer />
        </>
    )
}

export default Home;