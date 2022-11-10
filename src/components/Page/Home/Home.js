import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import MyInfo from './MyInfo/MyInfo';
import MySplist from './MySplist/MySplist';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <MySplist></MySplist>
            <MyInfo></MyInfo>
            <Banner></Banner>
        </div>
    );
};

export default Home;