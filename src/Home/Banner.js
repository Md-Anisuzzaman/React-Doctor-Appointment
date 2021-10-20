import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-body">

            <div className="text">
                <h1>Make an <span className="text-warning"> appointment</span>  <br /> with our doctor</h1>
                <h5 className="text-info" >We provide service with care. <span className="text-style"> Your health is our concern.</span> </h5>
            </div>
            <div>
                <img className="img-size" src="https://i.pinimg.com/736x/df/4e/d8/df4ed8f010fdeb2cc80ea5f464f2caa5.jpg" alt="" />
            </div>


        </div>
    );
};

export default Banner;