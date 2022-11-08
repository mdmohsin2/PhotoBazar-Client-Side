import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h2 className='text-orange-500 text-center text-4xl mt-16'>You can see some of my photos here</h2>
            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-100 shadow-xl">
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/JFG2VWr/slider-bg21.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Beautiful women</h2>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/DtqJ8Tj/444.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Forest</h2>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/XxHdwvq/young-woman-smiling-man-with-packets-balloons-having-fun-street-23-2148013731.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">couple</h2>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/pnX14sS/beautiful-shot-red-moon-with-black-night-sky-181624-29392.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Moon</h2>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/gmTJLTD/beautiful-shot-ma-shan-country-park-hong-kong-181624-47956.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hill</h2>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Ryww9Kv/aerial-shot-beautiful-coastal-city-seashore-with-amazing-clouds-sunlight-left-181624-4084.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sea !</h2>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/cNQML9h/mesmerizing-view-silhouettes-trees-sunset-sky-181624-28704.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sky!</h2>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/FxTdzkS/camera-capture-sunflower-snap-shot-banner-53876-120065.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sunflowers!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;