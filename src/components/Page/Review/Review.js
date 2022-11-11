import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Review = () => {
    const { _id, img, price, title } = useLoaderData();
    const { user } = useContext(AuthContext);
    useTitle('Review')

    // const [orders, setOrders] = useState([])


    // const notify = () => toast("Review success!");


    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://assignmet-11-server.vercel.app/singleReview?review=${_id}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [_id]);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = _id;
        const message = form.message.value;
        const email = user?.email;
        const imgs = img;

        const reviews = {
            message,
            email,
            review,
            imgs
        }

        fetch('https://assignmet-11-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Success', { autoClose: 1000 })
                    const newReview = [...users, data]
                    setUsers(newReview)
                    form.reset()

                }


            })
    }




    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://assignmet-11-server.vercel.app/singleReview/${id}`, {
                method: 'DELETE',
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('genius-token')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Delete Success', { autoClose: 1000 })
                        const remaining = users.filter(odr => odr._id !== id);
                        setUsers(remaining)
                    }
                })

        }
    }



    return (
        <div>
            <ToastContainer />
            <div className='bg-gray-300 h-xs w-full'>
                <div className='text-center '>
                    <img className='h-64 w-96 mx-auto pt-8' src={img} alt="img" />
                    <div className='flex items-center mx-auto py-6 pb-14 justify-center'>
                        <h1 className='text-2xl text-orange-500 mr-10'>Name: {title}</h1>

                        <h1 className='text-2xl text-orange-500'>Photo-Price: {price}</h1>
                    </div>
                    <div>
                        <h2 className='text-5xl text-violet-700 font-bold mb-10'>Product Review</h2>
                        {
                            users.map(reviews => <ReviewRow key={reviews._id}
                                reviews={reviews}
                                handleDelete={handleDelete}
                            ></ReviewRow>)
                        }
                    </div>
                </div>
                <form onSubmit={handleReview}>
                    <div className="form-control mt-20">

                        <label className="label mx-auto">
                            <span className="label-text text-center text-3xl font-bold">Write Your Opinion Below</span>
                        </label>

                        <input type="email" defaultValue={user?.email} name="email" className='h-12 w-64 p-5 my-6 rounded-md mx-auto' placeholder='Email' readOnly />


                        <div className='mx-16'>
                            <textarea className=" textarea textarea-bordered h-32" name='message' placeholder="review here" required></textarea>
                            <input className='mb-20 w-full mt-5 btn btn-primary' type="submit" value="Review now" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;