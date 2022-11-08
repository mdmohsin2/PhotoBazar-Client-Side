import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-base-200 p-20'>
            <div className=' mx-auto w-full max-w-xs bg-gray-300 p-4 shadow-lg rounded-2xl w-96'>
                <form>
                    <div className="form-control">
                        <h2 className='text-center text-4xl font-bold pt-4'>Login</h2>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email here" className="input input-bordered w-full max-w-xs required:" />

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password here" className="input input-bordered w-full max-w-xs required:" />
                        <br />
                        <input className='btn btn-primary' type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center py-5'>New to Junior studio <Link className='font-bold text-orange-500' to='/register'>Sign Up</Link> </p>
            </div>
        </div>
    );
};

export default Login;