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



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube,faLinkedin,faTiktok } from '@fortawesome/free-brands-svg-icons';

import { motion } from 'framer-motion';
import './index.css'
import Navbar from './Navbar';
import Coffee from './Coffee';
import { Outlet, Link } from "react-router-dom";



function Home() {


  

  return (
    <>
      <div className='bg-white text-black' >
        <Navbar/>
        <div className='max-lg:hidden  overflow-y-scroll text-white py-[60px] fixed gap-[30px] flex items-center flex-col top-0 bottom-0 left-0 w-1/6 h-screen bg-[#8E2BE8] '>
          {/* <img src={signature} className='w-3/6' alt="image2" /> */}
          <p className=' text-2xl font-black'>DEJENE HODES</p>
          <div>
          <p className=' font-black text-base tracking-tighter '>GARY VAYNERCHUK</p>
          <div className='mt-4 '>
            <p className=' pb-1 font-black text-base text-black text-left tracking-tighter bg-yellow-500 w-fit px-1'>GARYVEE</p>
            <div className=' flex flex-col gap-[10px] p-[20px]'>
              <Link className="font-black text-sm tracking-tighter" to="tour">Dejene Ethiopian Tours</Link>
              <Link className="font-black text-sm tracking-tighter" to="art">Adulis Ethiopian Arts</Link>
              <Link className="font-black text-sm tracking-tighter" to="coffee">Dejene Ethiopian Coffee</Link>

              <p className=' font-black text-sm tracking-tighter'>BLOG</p>
              <Link className="font-black text-sm tracking-tighter" to="contact">CONTACT</Link>

            </div>
          </div>
          </div>
          <div className=' grid grid-cols-4 gap-[25px] justify-end '>
              <FontAwesomeIcon icon={faFacebook} className=' text-white text-xl' />
              <FontAwesomeIcon icon={faTwitter} className=' text-white text-xl' />
              <FontAwesomeIcon icon={faInstagram} className=' text-white text-xl' />
              <FontAwesomeIcon icon={faYoutube} className=' text-white text-xl' />
              <FontAwesomeIcon icon={faLinkedin} className=' text-white text-xl' />
              <FontAwesomeIcon icon={faTiktok} className=' text-white text-xl' />
          </div>


        </div>
        <div className=' flex flex-col h-[400px]'>
        <div className=' flex justify-center items-center py-[5px]  bg-yellow-300'>
          <a href="#" className=' underline'>Learn more about my new book, Day Trading Attention!</a>

        </div>
        <section className='hero  grid grid-cols-5 justify-center h-screen bg-center bg-cover  bg-no-repeat  bg-gray-300'style={{ 
      backgroundImage: ` url(${dj1})`
    }}>
        <div className=' col-span-1 '>

        </div>
        <div className=' flex flex-col gap-[20px] justify-center text-black pr-[100px] col-span-4'>
          <RiDoubleQuotesL className=' text-6xl text-yellow-300'/>
          <p className=' max-w-[550px]  text-3xl text-white font-bold'>I DAY TRADE ATTENTION AND BUILD BUSINESSES.</p>
        </div>
        </section>
        </div>


        <div className=' justify-center items-center h-full py-[40px] pt-[50px] md:pt-[100px] grid grid-cols-1 md:grid-cols-5'>
          <div className=' md:col-span-1'>

          </div>
          <div className='max-md:px-[30px] grid grid-cols-1 md:grid-cols-3 gap-[20px] text-black md:pr-[100px] md:col-span-4'>
            <div className=' max-md:py-[20px] md:col-span-2'>
            <p> I'm Dejene Hodes, your guide on this journey of transformation and empowerment, rooted in the heart of Ethiopia. Here, every challenge is a stepping stone, and every initiative is a chapter in our shared story of progress. Join me as we explore paths of resilience, innovation, and collective upliftment.</p>
            <br />
            <p>Traverse my life's landscape, from the humble beginnings in a village near Addis Ababa to the forefront of entrepreneurial innovation. Experience my narrative of loss, learning, and unwavering determination, as I navigate through life's adversities, transforming each into a cornerstone for future endeavors.</p>

            </div>
            <div className='  md:col-span-1'>
              <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-[25px] items-start justify-center md:justify-end '>
            <div className='flex justify-start md:justify-end items-center gap-[20px]'>
              <FontAwesomeIcon icon={faFacebook} className=' text-yellow-500  text-3xl' />
              <p className=' text-2xl font-bold'>5.5M+ FOLLOWERS</p>
            </div>
            <div className='flex justify-start md:justify-end  items-center gap-[20px]'>
              <FontAwesomeIcon icon={faTwitter} className='text-yellow-500 text-3xl' />
              <p className=' text-2xl font-bold'>5.5M+ FOLLOWERS</p>
            </div>
            <div className='flex justify-start md:justify-end  items-center gap-[20px]'>
              <FontAwesomeIcon icon={faInstagram} className='text-yellow-500 text-3xl' />
              <p className=' text-2xl font-bold'>5.5M+ FOLLOWERS</p>
            </div>

            <div className='flex justify-start md:justify-end  items-center gap-[20px]'>
              <FontAwesomeIcon icon={faYoutube} className='text-yellow-500 text-3xl' />
              <p className=' text-2xl font-bold'>5.5M+ FOLLOWERS</p>
            </div>
            <div className='flex justify-start md:justify-end  items-center gap-[20px]'>
              <FontAwesomeIcon icon={faLinkedin} className='text-yellow-500 text-3xl' />
              <p className=' text-2xl font-bold'>5.5M+ FOLLOWERS</p>
            </div>

            <div className='flex justify-start md:justify-end  items-center gap-[20px]'>
              <FontAwesomeIcon icon={faTiktok} className='text-yellow-500 text-3xl' />
              <p className=' text-2xl font-bold'>5.5M+ FOLLOWERS</p>
            </div>

           </div>


            </div>
           

          </div>
          
          
        </div>
        <div className='mt-[40px] flex justify-center items-center'>
          <p className=' px-2 text-3xl bg-yellow-500 text-black'>GIFT OF ETHIOPIA</p>
        </div>
 

          <Slider/>


        <div className='  min-h-screen grid grid-cols-1 md:grid-cols-5'>
          <div className=' col-span-1'>

          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[150px] text-black px-[20px] lg:pr-[100px] col-span-4'>
            <div className=' flex flex-col gap-[20px] col-span-1'>
              <p className=' bg-yellow-500 px-1 text-black text-2xl font-bold w-fit'>READ THIS</p>
              <img src={image1} alt="image1" className=' rounded-md shadow-2xl' />
              <div className=' w-full'>
                <p className=' text-xl font-bold text-gray-600'>ASKGARYVEE</p>
                <p className=' text-[23px] font-bold uppercase'>Thinking of starting a podcast? Read this first</p>
                <a href="#" className=' text-gray-600'>  View this post on Instagram   A post shared by Gary Vay-Ner-Chuk (@garyvee) Don't…</a>

              </div>
              <div className='flex mt-[20px] gap-[20px]'>
                <img src={image2} className='w-[90px] rounded-md shadow-2xl' alt="image2" />
                <div>
                  <p className=' text-xl font-bold text-gray-600'>ASKGARYVEE</p>
                  <p>How to make content in 2023</p>
                </div>
              </div>
              <div className='flex mt-[20px] gap-[20px]'>
                <img src={image1} className='w-[90px] rounded-md shadow-2xl' alt="image2" />
                <div>
                  <p className=' text-xl font-bold text-gray-600'>ASKGARYVEE</p>
                  <p>How to make content in 2023</p>
                </div>
              </div>
              <div className='flex mt-[20px] gap-[20px]'>
                <img src={image2} className='w-[90px] rounded-md shadow-2xl' alt="image2" />
                <div>
                  <p className=' text-xl font-bold text-gray-600'>ASKGARYVEE</p>
                  <p>How to make content in 2023</p>
                </div>
              </div>
              <div className='flex mt-[20px] gap-[20px]'>
                <img src={image1} className='w-[90px] rounded-md shadow-2xl' alt="image2" />
                <div>
                  <p className=' text-xl font-bold text-gray-600'>ASKGARYVEE</p>
                  <p>How to make content in 2023</p>
                </div>
              </div>

            </div>
            <div className='flex flex-col gap-[20px]  col-span-1'>
              {/* <Youtube videoId={'j_iUf6hVXnE'} className='' /> */}
              <p className=' bg-yellow-500 px-1 text-black text-2xl font-bold w-fit'>WATCH THIS</p>

              <div className=' w-full h-[240px] '>
              <iframe className='w-full h-full shadow-2xl'
                
                src={`https://www.youtube.com/embed/j_iUf6hVXnE?rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube video"
                />
              </div>
              <p className=' bg-yellow-500 px-1 text-black text-2xl max-md:mt-[20px] font-bold w-fit'>LISTEN TO THIS</p>
              <div class=" flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      alt="ui/ux review check"
                    />
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

                  </div>
                  <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                      <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Wooden House, Florida
                      </h5>
                      <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5.0
                      </p>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      Enter a freshly updated and thoughtfully furnished peaceful home
                      surrounded by ancient trees, stone walls, and open meadows.
                    </p>

                  </div>
                  <div class="p-6 pt-3">
                    <button
                      class="block w-full select-none rounded-lg bg-yellow-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Reserve
                    </button>
                  </div>
                </div>


                      








            </div>
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






      </div>

    </>
  )
}

export default Home
