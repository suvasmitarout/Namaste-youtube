import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const [searchQuery, setSearchQuery]=useState("");
    const [suggestions, setSuggestions]=useState([]);
    const [showSuggestions, setShowSuggestions]=useState(false);

    const searchCache = useSelector((store)=>store.search);
    const dispatch=useDispatch();

    useEffect(()=>{
        
       const timer=setTimeout(()=>{
          if(searchCache[searchQuery]){
             setSuggestions(searchCache[searchQuery]);
            } else{
               getSearchSugestions()
            }
        },200);

       return ()=>{
        clearTimeout(timer);
       };
    }, [searchQuery]);

    const getSearchSugestions=async()=>{
        console.log("API CALL-" + searchQuery);
        const data =await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json =await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);

        // update cache
        dispatch(
            cacheResults({
              searchQuery:[1,2,3],
            })
        );
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className='flex justify-between items-centers w-full p-2 m-2 shadow-lg'>
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
            <div className="py-4">
                <div>
                   <input 
                     className =" px-5 w-xl border border-gray-400 p-2 rounded-l-full"
                      type ="text"
                      value={searchQuery}
                      onChange={(e)=>setSearchQuery(e.target.value)}
                      onFocus={()=> setShowSuggestions(true)}
                      onBlur={()=> setShowSuggestions(false)}
                   />
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
                       🔍
                    </button>
                </div>
                {showSuggestions && (
                     <div className='fixed bg-white py-2 px-2 w-[36rem] shadow-lg rounded-lg border border-gray-100'>
                    <ul>
                        {suggestions.map((s)=>(
                            <li key={s}className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                                🔍{s}
                            </li>
                        ))}
                       
                    </ul>
                </div>
                )}
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