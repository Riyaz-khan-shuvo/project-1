import React from 'react';
import President from '../President/President';
import Slider from '../Slider/Slider';
import './SliderArea.css'

const SliderArea = () => {
    return (
        <div className="slider-bg text-light sm-bg-none">
            <div className="row d-flex justify-content-center align-items-center">
                <Slider />
                <President />
            </div>
        </div>
    );
};

export default SliderArea;