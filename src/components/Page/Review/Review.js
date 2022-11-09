import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const { _id, img, price, title, description } = useLoaderData();
    return (
        <div>
            <div className='bg-gray-300 h-xs w-full'>
                <div className='text-center '>
                    <img className='h-64 w-96 mx-auto pt-8' src={img} alt="img" />
                    <h1 className='text-5xl text-orange-500 py-8'>Name: {title}</h1>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl ml-20 font-bold">Please review here</span>
                        </label>
                        <textarea className=" mx-20 textarea textarea-bordered h-32" placeholder="Bio"></textarea>
                        <input className='mb-20 mt-5 mx-20 btn btn-primary' type="submit" value="Review now" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;