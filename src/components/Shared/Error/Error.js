import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img src="https://i.ibb.co/1bC2JP8/3d-render-error-404-page-found-your-mockup-design-252008-648.jpg" alt="" />
            <h2>Please try again before valid Link <Link to='/'>Home</Link> </h2>
        </div>
    );
};

export default Error;