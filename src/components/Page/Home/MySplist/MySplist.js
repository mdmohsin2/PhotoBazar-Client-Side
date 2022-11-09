import React from 'react';
import { GiLoveMystery, GiJewelCrown, GiStairsCake, GiBeachBag } from "react-icons/gi";
import './MyStyle.css'


const MySplist = () => {
    return (

        <div className='py-16'>
            <h1 className='text-5xl m-5 text-orange-400'>MY SPECIALTIES</h1>
            <div className=" card grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-md">
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                        <GiLoveMystery className='icon'></GiLoveMystery>
                    </figure>
                    <div className="card-body items-center text-center">

                        <h2 className="card-title">Wedding Photography!</h2>
                        <p>The beauty of candid wedding photography lies in people's natural reactions. It makes people click their best emotions and express the feelings of that moment through a picture.</p>
                    </div>
                </div>
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                        <GiJewelCrown className='icon' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Jewelry Photography</h2>
                        <p>Light is necessary to take photos of your jewelry. A room with windows next to a wall is a good option. The bigger the window, the more light you'll get. If you don't have natural lighting, you could buy artificial light sources, like a softbox</p>
                    </div>
                </div>
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                        <GiStairsCake className='icon' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Birthday Photography!</h2>
                        <p>What is a picture concept?
                            Conceptual photography is a type of photography that illustrates an idea. There have been illustrative photographs made since the medium's invention, for example in the earliest staged photographs, such as Hippolyte Bayard's Self Portrait as a Drowned Man (1840).</p>
                    </div>
                </div>
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                        <GiBeachBag className='icon'></GiBeachBag>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fashion Photography!</h2>
                        <p>A fashion photographer takes photographs of the latest clothes, accessories, hairstyles and make-up. Fashion photographers are responsible for how clothing is presented in advertising campaigns, catalogues and fashion magazines.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySplist;