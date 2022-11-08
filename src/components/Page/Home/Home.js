import React from 'react';
import Banner from './Banner/Banner';
import MyInfo from './MyInfo/MyInfo';
import MySplist from './MySplist/MySplist';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <MySplist></MySplist>
           <MyInfo></MyInfo>
        </div>
    );
};

export default Home;