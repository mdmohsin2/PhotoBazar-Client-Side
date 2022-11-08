import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <h2 className='text-5xl text-center py-4 text-white'>Please try again before valid Link <Link to='/' className='text-red-500 underline underline-offset-1'>Home</Link> </h2>
            {/* <img  src="https://i.ibb.co/1bC2JP8/3d-render-error-404-page-found-your-mockup-design-252008-648.jpg" alt="" /> */}
            
        </div>
    );
};

export default Error;