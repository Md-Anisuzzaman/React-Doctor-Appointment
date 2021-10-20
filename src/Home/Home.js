import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div>

            {/* <h1 className="mt-5">This is home</h1> */}
            <Banner> </Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;