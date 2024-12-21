import { useState } from 'react'
import Hero_Garyvee from './assets/Hero_GaryVee_Right.webp'
import coffee from './assets/coffee.webp'
import Youtube from 'react-youtube';
import signature from './assets/signature.webp'
import image1 from './assets/image1.jpg'
import dj1 from './assets/dj1.jpg'

import image2 from './assets/image2.jpg'
import Slider from './Slider'
import { RiDoubleQuotesL } from "react-icons/ri";


import { faBars, faPhone , faEnvelope,faTimes, faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube,faLinkedin,faTiktok } from '@fortawesome/free-brands-svg-icons';

import { motion } from 'framer-motion';
import './index.css'
import Navbar from './Navbar';
import Coffee from './Coffee';
import { Outlet, Link } from "react-router-dom";
import NavbarTwo from "./NavbarTwo";

import beautiful from './assets/beautiful.jpg'







export default function Contact({ fixed }) {
    return (
      <>
      <NavbarTwo/>
      <div className=" h-screen bg-no-repeat justify-center items-center text-black sm:px-[20px] lg:px-[100px]   min-h-screen   max-w-[1800px] mx-auto w-full flex" style={{ 
                      backgroundImage: `url(${beautiful})`}}>
        <div className=" min-h-[500px] grid lg:grid-cols-2 w-full py-[40px] bg-white overflow-x-hidden ">
          <div className="flex flex-col lg:items-start items-center justify-center lg:px-[100px] sm:px-[10px] py-[20px] bg-white">
            <p className=" text-5xl md:text-6xl font-bold"> Let's get <br /> intouch!</p>
            <p className=" text-gray-600"> Don't be afraid to <br /> say hello with us</p>
            <div className=" flex-col flex gap-[10px] py-[20px]">
              <div className=" flex items-center gap-[10px]">
                <FontAwesomeIcon icon={faPhone}/>
                <p>+251951941565</p>

              </div>
              <div className=" flex items-center gap-[10px]">
                <FontAwesomeIcon icon={faEnvelope}/>
                <p>@aduliscapital.com</p>

              </div>
              <div className=" grid pt-[20px] grid-cols-4 gap-y-[15px] justify-end ">
                <FontAwesomeIcon icon={faFacebook}  />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faLinkedin}  />
                <FontAwesomeIcon icon={faTiktok}  />
            
              </div>
              
            </div>


          </div>
          <form class="p-6 flex flex-col justify-center">
                        <div class="flex flex-col">
                            <label for="name" class="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div class="flex flex-col mt-2">
                            <label for="email" class="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div class="flex flex-col mt-2">
                            <label for="tel" class="hidden">Number</label>
                            <input type="tel" name="tel" id="tel" placeholder="phone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <button type="submit" class="md:w-32 bg-yellow-600 hover:bg-blue-dark text-white hover:text-black font-bold py-3 px-6 rounded-lg mt-3 hover:bg-white hover:border-2 border-yellow-600 transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>





        </div>

      </div>
        <div className='  min-h-full bg-gray-200  mt-[150px] grid grid-cols-5'>
          <div className=' col-span-1' >

          </div>
          <div className=' grid grid-cols-1 bg-gray-200 text-black  col-span-4'>

            <div className=" bg-gray-200 dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-xl dark:text-white">SIGN UP FOR MY NEWSLETTER</h1>

                            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                              <input type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"  placeholder="Email Address"/>
                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Dejene Ethiopian Tours</a>
                                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Adulis Ethiopian Arts</a>
                                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Dejene Ethiopian Coffee</a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
                    
                    <div className="flex items-center justify-between">
                        <a href="#">
                          <p className=' text-2xl font-black italic'>DEJENE HODES</p>
                        </a>
                        
                        <div className="grid grid-cols-4 gap-[20px] mx-2 text-yellow-500">
                          <FontAwesomeIcon icon={faFacebook} className=' text-xl' />
                          <FontAwesomeIcon icon={faTwitter} className=' text-xl' />
                          <FontAwesomeIcon icon={faInstagram} className=' text-xl' />
                          <FontAwesomeIcon icon={faYoutube} className='  text-xl' />
                          <FontAwesomeIcon icon={faLinkedin} className=' text-xl' />
                          <FontAwesomeIcon icon={faTiktok} className=' text-xl' />

                        </div>
                    </div>
                </div>
            </div>




          </div>
          
          
        </div>



      <Outlet />
 
      </>







      

    );
  }