import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ServicesCard = ({ service }) => {
    const { _id, img, price, title, description } = service
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            Loading...
        </button>
    }
    return (
        <div className=" p-4 mx-auto card card-compact w-80 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='cursor-pointer' src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">Name : {title}</h2>
                <p>{description.length > 100 ? description.slice(0, 150) + '...' : ''}</p>
                <div className="card-actions justify-end flex items-center text-orange-600">
                    <p className='text-2xl font-semibold'>img-Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">
                           
                            details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;