import React from 'react';
import './MyInfo.css'

const MyInfo = () => {
    return (
        <div className=''>
            <div className="mb-20 mt-14 bg-gray-300 grid grid-cols-1 px-10 md:grid-cols-2 py-32 ">
                <figure><img className='img-size' src="https://placeimg.com/400/400/arch" alt="Album" />
                </figure>
                <div className=" ">
                    <h2 className="card-title text-4xl mt-10 text-center">Hello! I'm Md Mohsin Ahmed</h2>
                    <p className='my-8'>
                        I am a professional photographer by degree, I take pictures of different places, such as sea, beach, river, cropland, and forest, you can see my pictures on my facebook page and youtube channel</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Contact me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyInfo;