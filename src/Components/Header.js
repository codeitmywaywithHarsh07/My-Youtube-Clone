import {React, useContext, useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

// React Icons

import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io"
import { RiVideoAddLine } from "react-icons/ri"
import { FiBell } from "react-icons/fi"

// Logo Images

import ytLogo from '../images/yt-logo.png';
import ytlogoMobile from '../images/yt-logo-mobile.png';
import Th from '../images/Th.jpeg'




export default function Header() {
  const[searchQuery,setSearchQuery]=useState("");
  const{loading,mobileMenu,setMobileMenu}=useContext(AppContext);
  const navigate=useNavigate();
  const location=useLocation();

  // Whenever we search anything in a search box
  function searchHandler(event)
  {
    if((event?.key==="Enter" || event==="searchButton") && (searchQuery?.length>0))
    {
      navigate(`/searchResult/${searchQuery}`);
    }
  }

  // Handle input query change 

  function handleChange(event)
  {
    setSearchQuery(event.target.value);
  }

  // In Mobile Menu display

  function mobileMenuToggle()
  {
    setMobileMenu(!mobileMenu);
  }


  // Get the Page Type

  const pagetype=location?.pathname?.split('/')?.filter(Boolean)?.[0];
  // console.log(pagetype);

  return (
    <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black'> {/*Header */}

        {loading && <Spinner/>}    

        <div className="flex h-5 items-center">  {/*  Logo and HamBurger  */}

              {/* Menu Icon/Menu not in Video page */}
              {pagetype!=='video' && (
                  <div className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]' onClick={mobileMenuToggle}>

                      {mobileMenu?
                          (<CgClose className='text-white md:text-xl'/>)
                          :
                          (<SlMenu className='text-white md:text-xl'/>)
                      }

                  </div>
              )}

              <Link to='/' className='flex h-5 items-center'> {/* Logo */}
                    {/* Big Screen */}
                <img src={ytLogo} alt="ytlogo" className='h-full md:block hidden' /> 

                <img src={ytlogoMobile} alt="Youtube" className="h-full md:hidden" />
                    
              </Link>
        </div>


        {/* Search Bar */}
        <div className='group flex items-center'>

            <div className='flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0'>

                <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                  <IoIosSearch className='text-white text-xl'/>
                </div>

                <input placeholder="Search..." type="text" className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-32 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]' onChange={handleChange} onKeyUp={searchHandler} value={searchQuery} />

            </div>

            <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]' onClick={()=> searchHandler("searchButton")}>
              <IoIosSearch className='text-white text-xl'/>
            </button>

        </div>

        {/* Header Right Icons */}

        <div className="flex items-center">
            <div className="hidden md:flex">
              <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                <RiVideoAddLine className='text-white text-xl cursor-pointer'/>
              </div>

              <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                <FiBell className='text-white text-xl cursor-pointer'/>
              </div>

            </div>

            <div className="flex items-center justify-center h-8 w-8 overflow-hidden rounded-full md:ml-4 mt-1">
                <img src="https://source.unsplash.com/random/200x200?sig=1" width={100} height={100} alt="" className='h-auto max-w-sm' />
            </div>
        </div>


      
    </div>
  )
}
