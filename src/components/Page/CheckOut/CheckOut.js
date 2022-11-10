import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const CheckOut = () => {
    const { _id, img, price, title, description } = useLoaderData();
    useTitle('CheckOut')
    return (
        <div>
            <h2 className='text-orange-500 text-4xl mt-10 text-center'>Details Area</h2>
            <div className="card mx-auto my-16 w-96 bg-base-200 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img className='cursor-pointer' src={img} alt="img" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">
                        <h3>Name: {title}</h3>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions items-center  justify-between flex ">
                        <h4 className='text-orange-500  my-3'>img-Price:{price}</h4>
                        <div>
                            <button className="btn btn-sm btn-outline btn-warning mr-2">
                                <Link to='/serviceAll'>All service</Link>
                            </button>
                            <button className="btn btn-sm btn-outline btn-warning">
                                <Link to={`/review/${_id}`}>Review</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;