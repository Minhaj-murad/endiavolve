import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assests/index.jpg'
import { FaBell, FaUser } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';

const Header = () => {
    const navItems = <>
        <li className='text-black font-bold text-sm ml-0'><Link to="/">Home</Link></li>
        <li className='text-black font-bold text-sm ml-0'><Link to="/suggestion">Suggestion</Link></li>
        <li className='text-black font-bold text-sm ml-0'><Link to="/career">Career</Link></li>
        <li className='text-black font-bold text-sm ml-0'><Link to="/contact">Contact</Link></li>
        <li className='text-black font-bold text-sm ml-0'><Link to="/dashboard">Dashboard</Link></li>
        <li className='text-black font-bold text-sm ml-0'><Link to="/playlists">Playlists</Link></li>
        <li className='text-black font-bold text-sm ml-0'><Link to="/analytics">Analytics</Link></li>
        <li className='text-black font-bold text-sm ml-0'><Link to="/customization">Customization</Link></li>
    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 -mt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52  text-black">
                        {navItems}
                       

                            <li className='text-black font-semibold'>  <input type="text" placeholder="search here" className="input input-bordered w-full max-w-xs max-h-2 mt-0.5 bg-white text-black border-gray-800 rounded-2xl mr-8" /></li>
                            <Link to='/upload'> <button className='mr-6 mt-2 text-black font-semibold'> <FaUpload /></button></Link>
                            <input type="checkbox" className="toggle toggle-success mt-1 mr-6" />

                            <button className='mr-6 text-black font-semibold'> <FaUser /></button>
                            <div className='relative mt-1'>
                                <button className='mr-6 text-black font-semibold'> <FaBell /></button>
                                <h1 className='absolute text-xs right-1/3 bottom-3.5 text-orange-400 font-semibold'>11</h1>
                            </div>


                      
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-lg gap-4  ">
                    <img className='w-28 -mt-8 ' src={img} alt="" />
                    {/* <h1 className='company-name text-black font-extrabold text-lg'> ENDIAVOLVE</h1> */}
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 ">
                    {navItems}

                </ul>
            </div>
            <div className="navbar-end hidden lg:flex ml-4">
                <ul className="menu menu-horizontal p-0 ">

                    <li className='text-black font-semibold'>  <input type="text" placeholder="search here" className="input input-bordered w-full max-w-xs max-h-2 mt-0.5 bg-white text-black border-gray-800 rounded-2xl mr-8" /></li>
                    <Link to='/upload'> <button className='mr-6 mt-2 text-black font-semibold'> <FaUpload /></button></Link>
                    <input type="checkbox" className="toggle toggle-success mt-1 mr-6" />

                    <button className='mr-6 text-black font-semibold'> <FaUser /></button>
                    <div className='relative mt-1'>
                        <button className='mr-6 text-black font-semibold'> <FaBell /></button>
                        <h1 className='absolute text-xs right-1/3 bottom-3.5 text-orange-400 font-semibold'>11</h1>
                    </div>


                </ul>
            </div>

        </div>
    );
};

export default Header;