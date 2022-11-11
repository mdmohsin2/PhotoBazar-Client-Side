import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ reviews, handleDelete }) => {
    const { _id, message, imgs } = reviews
    return (
        <div className='mx-20'>
            <div className=" grid grid-cols-1 md:grid-cols-2 rounded-lg bg-base-200 mt-2 p-4 m">
                <div className='flex'>
                    <img className='rounded-full w-12 h-12 mr-2 items-center' src={imgs} alt="" />
                    <h2 className='text-2xl text-red-400'>User Review : {message}</h2>
                </div>
                <div>
                    <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-error mr-3'>Delete</button>
                    <Link to={`/update/${_id}`}>
                        <button className='btn btn-sm btn-primary'>edit</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewRow;