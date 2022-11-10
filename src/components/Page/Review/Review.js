import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const Review = () => {
    const { _id, img, price, title, description } = useLoaderData();
    useTitle('Review')

    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        const reviews = {
            messages: message
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review Added Successful')
                    form.reset()
                }
                console.log(data)
            })
    }


    return (
        <div>
            <div className='bg-gray-300 h-xs w-full'>
                <div className='text-center '>
                    <img className='h-64 w-96 mx-auto pt-8' src={img} alt="img" />
                    <h1 className='text-5xl text-orange-500 py-8'>Name: {title}</h1>
                    <div>
                        {
                            user.map(reviews => <h2 key={reviews._id}>
                                {reviews.messages}
                            </h2>)
                        }
                    </div>
                </div>
                <form onSubmit={handleReview}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl ml-20 font-bold">Please review here</span>
                        </label>
                        <textarea className=" mx-20 textarea textarea-bordered h-32" name='message' placeholder="review here"></textarea>
                        <input className='mb-20 mt-5 mx-20 btn btn-primary' type="submit" value="Review now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;