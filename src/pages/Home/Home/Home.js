import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';
import PerfectCar from '../PerfectCar/PerfectCar';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <HomeCars />
            <Reviews />
            <PerfectCar />
            <Footer />
        </div>
    );
};

export default Home;