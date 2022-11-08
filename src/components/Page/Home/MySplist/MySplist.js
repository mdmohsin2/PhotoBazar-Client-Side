import React from 'react';
import { GiLoveMystery, GiJewelCrown, GiStairsCake, GiBeachBag } from "react-icons/gi";
import './MyStyle.css'


const MySplist = () => {
    return (

        <div className='py-28 '>
            <h1 className='text-5xl m-5 text-orange-400'>MY SPECIALTIES</h1>
            <div className=" card grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-md">
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                        <GiLoveMystery className='icon'></GiLoveMystery>
                    </figure>
                    <div className="card-body items-center text-center">

                        <h2 className="card-title">Wedding Photography!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                        <GiJewelCrown className='icon' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Jewelry Photography</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                        <GiStairsCake className='icon' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Birthday Photography!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                        <GiBeachBag className='icon'></GiBeachBag>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fashion Photography!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySplist;