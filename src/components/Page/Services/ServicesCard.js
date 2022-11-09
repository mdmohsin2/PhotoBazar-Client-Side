import React from 'react';
// import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, img, price, title,description } = service
    return (
        <div className=" p-4 mx-auto card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {title}</h2>
                <p>{description.slice(0,150)}...</p>
                <div className="card-actions justify-end flex items-center text-orange-600">
                    <p className='text-2xl font-semibold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">
                             {/* <FaArrowRight></FaArrowRight> */}
                             details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;