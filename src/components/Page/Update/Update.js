import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const storedUsers = useLoaderData()
    useTitle('Update')
    const notify = () => toast("Review success!");

    const [user, setUser] = useState(storedUsers)
    const handleUpdateUser = (event) => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/singleReview/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Update Success', { autoClose: 1000 })
                    console.log(data);
                }
            })

    }

    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }


    return (
        <div className='bg-base-300 pb-60'>
            <h2 className='text-5xl py-10 text-orange-400 text-center'>Update Review</h2>
            <form onSubmit={handleUpdateUser}>
                <div className="form-control mt-14">
                    <div className='mx-16'>
                        <ToastContainer />
                        <textarea onChange={handleInputChange} defaultValue={storedUsers.message} className=" textarea textarea-bordered h-32" name='message' placeholder=" update review" required></textarea>
                        <input className='mb-20 w-full mt-5 btn btn-primary' type="submit" value="Update now" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;