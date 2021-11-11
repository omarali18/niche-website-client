import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AllCars from '../AllCars/AllCars';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';
import PerfectCar from '../PerfectCar/PerfectCar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <HomeCars />
            <h1>htis is home</h1>
            <h1>htis is home</h1>
            <h1>htis is home</h1>
            <h1>htis is home</h1>
            <PerfectCar />
            <Footer />
        </div>
    );
};

export default Home;