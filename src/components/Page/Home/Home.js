import React from 'react';
import Banner from './Banner/Banner';
import MyInfo from './MyInfo/MyInfo';
import MySplist from './MySplist/MySplist';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <MySplist></MySplist>
            <MyInfo></MyInfo>
            <Banner></Banner>
        </div>
    );
};

export default Home;