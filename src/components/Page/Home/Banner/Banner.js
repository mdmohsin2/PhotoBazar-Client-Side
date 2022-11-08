import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/gZzVy57/bg14.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Junior Studios Photography</h1>
                    <p className="mb-5">I take photographs with creativity, concept and passion</p>
                    <button className="btn btn-primary">See my portfolio</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;