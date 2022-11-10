import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../../Hooks/useTitle';

const Banner = () => {
    useTitle('Banner')
    return (
        <div className="hero mb-24 rounded-3xl min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/DtqJ8Tj/444.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">How I Work</h1>
                    <p className="mb-5">Click the button below to know more about my work</p>
                    <button className="btn btn-primary">
                        <Link to='/portfolio'>See my portfolio</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;