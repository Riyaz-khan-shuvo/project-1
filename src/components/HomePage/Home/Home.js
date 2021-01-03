import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Event from '../Events/Event';
import OurMission from '../OurMission/OurMission';
import SliderArea from '../SliderArea/SliderArea';

const Home = () => {
    return (
        <div>
            <SliderArea/>
            <AboutUs/>
            <Event/>
            <OurMission/>
        </div>
    );
};

export default Home;