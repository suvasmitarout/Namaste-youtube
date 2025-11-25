import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch=useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className='flex justify-between items-centers w-full p-5 m-2 shadow-lg'>
            <div className="flex justify-between items-center">
                <img 
                 onClick={() => toggleMenuHandler()}
                 className='h-8 cursor-pointer'
                 alt="menu" 
                 src= "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
                />
                <a href="/">
                  <img 
                    className='h-20'
                    alt="youtube-logo"
                    src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
                  />
                </a>
            </div>
            <div className="py-4"
            >
                <input className ="w-xl border border-gray-400 p-2 rounded-l-full"
                 type ="text"
                />
                <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
                    🔍
                </button>
            </div>
            <div className="py-4">
                <img 
                 className="h-8" 
                 alt="user" 
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
                />
            </div>
        </div>
    )
};

export default Head;