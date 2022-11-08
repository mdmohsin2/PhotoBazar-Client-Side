import React from 'react';
import './SliderItem.css'

const SliderItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carouser-image'>
                <img src={image} alt='' className="w-full rounded-lg" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h2 className='text-5xl font-bold text-white'>
                    Junior Studios Photography
                </h2>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 mt-72">
                <p className='text-white text-xl'>I take photographs with creativity, concept and passion</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-64 mt-96">
                <button className="btn btn-outline btn-warning">About me</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;