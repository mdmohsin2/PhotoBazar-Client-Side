import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Page/Footer/Footer';
import Header from '../components/Page/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;