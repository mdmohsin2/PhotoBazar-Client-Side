import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='bg-base-200 p-20'>
            <div className='bg-gray-300 p-4 shadow-lg rounded-2xl w-96 mx-auto w-full max-w-xs'>
                <form>
                    <div className="form-control ">
                        <h2 className='text-center text-4xl font-bold pt-4'>Sign Up</h2>


                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name here" className="input input-bordered w-full max-w-xs required:" />


                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email here" className="input input-bordered w-full max-w-xs required:" />


                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password here" className="input input-bordered w-full max-w-xs required:" />


                        <br />
                        <input className='btn btn-primary' type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center py-5'>Already have an account Please <Link className='font-bold text-orange-500' to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;