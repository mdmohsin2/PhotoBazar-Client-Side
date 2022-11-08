import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuitems = <>
        <li><Link to='/' className='mr-5'>Home</Link></li>
        <li><Link to='/about' className='mr-5'>About Us</Link></li>
        <li><Link to='/portfolio' className='mr-5'>Portfolio</Link></li>
    </>
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href='/'>
                    <Link to='/'>
                        Junior Studios
                    </Link>
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {menuitems}
                </ul>
            </div>
        </div>
    );
};

export default Header;