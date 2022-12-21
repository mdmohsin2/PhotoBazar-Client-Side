import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Hrader.css'
import { FaCamera } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    

    // handle logOut
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const menuitems = <>
        <li><Link to='/' className='mr-5 font-bold'>Home</Link></li>
        <li><Link to='/serviceAll' className='mr-5 font-bold'>Services</Link></li>
        <li><Link to='/serviceAdd' className='mr-5 font-bold'>Add to Card</Link></li>
        <li><Link to='/about' className='mr-5 font-bold'>About Us</Link></li>
        <li><Link to='/portfolio' className='mr-5 font-bold'>Portfolio</Link></li>
        <li><Link to='/blog' className='mr-5 font-bold'>Blog</Link></li>
        <li><Link to='/allReview' className='mr-5 font-bold'>All Reviews</Link></li>
    </>
    return (
        <div className="navbar pt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitems}
                    </ul>
                </div>
                <a href='/ ' className="btn btn-ghost normal-case text-xl hidden sm:block "><span className='flex items-center mt-1'><FaCamera className='mr-2'></FaCamera> <span>Photo Bazar</span></span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuitems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <button onClick={handleLogOut} className='btn-sm bg-info'>Log out</button>
                        </>
                        :
                        <>
                            <Link to='/login' className='mr-5'>Login</Link>
                            <Link to='/register' className='mr-5'>Sign Up</Link>
                        </>

                }

            </div>
        </div>
    );
};

export default Header;