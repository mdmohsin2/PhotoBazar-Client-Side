import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../Hooks/useTitle';

const SignUp = () => {
    const { createUser, providerLogin } = useContext(AuthContext)
    useTitle('SignUp')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('')

    // googleAuth and provider setup area
    const googleProvider = new GoogleAuthProvider()

    // handleGoogleSignIn setup area
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }




    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    return (
        <div className='bg-base-200 p-20'>
            <div className='bg-gray-300 p-4 shadow-lg rounded-2xl  mx-auto w-full max-w-xs'>
                <form onSubmit={handleSignUp}>
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
                    <p className='text-red-500'>{error}</p>
                </form>
                <p className='text-red-400 py-4'>Or sign in with</p>
                <button onClick={handleGoogleSignIn} className='btn bg-orange-500 w-full'>
                    <FaGoogle></FaGoogle>
                </button>
                <p className='text-center py-5'>Already have an account Please <Link className='font-bold text-orange-500' to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;