import React from "react";
import coffeeimg from './assets/coffeeimg.jpg'
import DejeneCoffeeLOGO from './assets/DejeneCoffeeLOGO-01-removebg-preview.png'
import Dejene_Coffee_Mockup from './assets/Dejene_Coffee_Mockup.png'
import coffee1 from './assets/coffee1.jpg'
import art1 from './assets/art1.jpg'
import art2 from './assets/art2.jpg'
import beautiful from './assets/beautiful.jpg'
import { faFacebook, faTwitter, faInstagram, faYoutube,faLinkedin,faTiktok } from '@fortawesome/free-brands-svg-icons';

import { faBars, faPhone , faEnvelope,faTimes, faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/fontawesome-free-solid'
import { faLongArrowAltRight } from '@fortawesome/fontawesome-free-solid'

import { faArrowCircleRight } from '@fortawesome/fontawesome-free-solid'

import { faCartPlus } from '@fortawesome/fontawesome-free-solid'
import NavbarTwo from "./NavbarTwo";




export default function Coffee({ fixed }) {
    return (
      <>
      <NavbarTwo/>
      <div className="relative max-h-[700px] h-full max-w-[1800px] mx-auto w-full grid md:grid-cols-2">
        <div className="max-h-[700px] h-screen bg-center bg-no-repeat bg-cover bg-gray-400" style={{ 
      backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coffee1})`
    }}>
        <img src={DejeneCoffeeLOGO} alt="DejeneCoffeeLOGO" className=" mx-[90px] mt-[30px] w-[120px]" />
        <img src={Dejene_Coffee_Mockup} alt="Dejene_Coffee_Mockup" className=" w-[800px] max-md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

        </div>
        <div className=" bg-white max-md:my-[50px] md:pl-[200px] max-md:items-center flex flex-col gap-[10px] justify-center">



          
            
    
          
            <p>#DEJENEETHIOPIACOFFEE</p>
            <p className=" text-6xl font-black">Your daily dose <br />of <span className=" text-yellow-600">delight</span>.</p>
            <p className=" text-base">immerse yourself in the blissful world of coffee, <br />where the finest beans are transformed into <br />moments of pure pleasure.</p>
            <button
              class="middle mt-4 mr-[130px] none center rounded-lg bg-gradient-to-tr from-yellow-600 to-yellow-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Start Here
            </button>
            <Link className="font-black text-2xl mt-[30px] text-center text-yellow-500 " to="/"><p><FontAwesomeIcon icon={faLongArrowAltLeft} className=" pr-[10px]" />GO BACK</p></Link>


        </div>
        <div>

        </div>

      </div>
      <div className="   min-h-[700px] my-[150px]   max-w-[1800px] mx-auto w-full grid grid-cols-1 md:grid-rows-12">
        <div className=" max-sm:mt-[50px] bg-green-100 max-sm:py-[50px] max-sm:px-[20px]  grid sm:grid-cols-12 min-h-full  sm:pl-[130px]  gap-[10px] items-center md:row-span-4">
          <div className=" col-span-6 flex flex-col gap-[10px] mb-[50px] ">
            <p className=" text-6xl font-black ">ART WORK</p>
            <p>when an unknown printer took a galley of type and scrambled it to make and scrambled it to make a type specimen book.</p>
          </div>
          <div className=" col-span-6 flex justify-center items-center  ">
          <button
              class="middle mt-4  none center rounded-lg bg-gradient-to-tr from-yellow-600 to-yellow-600 py-3 px-16 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Start Here
              <FontAwesomeIcon className=" pl-6" icon={faLongArrowAltRight}/>
            </button>

          </div>


        </div>
        <div className="  row-span-8 grid max-md:justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-[50px] px-[20px] md:px-[100px] py-[20px] gap-[20px]">
          <div className=" bg-cover bg-center min-h-[400px] flex justify-center items-center  max-h-[450px] max-w-[350px] border-[3px] border-solid border-black relative bg-slate-600 overflow-hidden rounded-ss-[80px] rounded-ee-[80px] "
          style={{ 
            backgroundImage: `url(${coffee1})`
          }}
          >
            <div className=" text-white flex items-center pl-[10px] absolute top-2/3 w-full h-[60px] bg-black opacity-75">
              <p>Dejene Coffee Mockup</p>

            </div>

          </div>
          <div className=" bg-cover bg-center min-h-[400px] flex justify-center items-center  max-h-[450px] max-w-[350px] border-[3px] border-solid border-black relative bg-slate-600 overflow-hidden rounded-se-[80px] rounded-es-[80px]  "
          style={{ 
            backgroundImage: `url(${art1})`
          }}
          >
            <div className=" text-white flex items-center pl-[10px] absolute top-2/3 w-full h-[60px] bg-black opacity-75">
              <p>Dejene Coffee Mockup</p>

            </div>

          </div>
          <div className=" bg-cover bg-center min-h-[400px] flex justify-center items-center  max-h-[450px] max-sm:min-w-[300px] max-w-[350px] border-[3px] border-solid border-black relative bg-slate-600 overflow-hidden rounded-ss-[80px] rounded-ee-[80px] "
          style={{ 
            backgroundImage: `url(${coffee1})`
          }}
          >
            <div className=" text-white flex items-center pl-[10px] absolute top-2/3 w-full h-[60px] bg-black opacity-75">
              <p>Dejene Coffee Mockup</p>

            </div>

          </div>
          <div className=" bg-cover bg-center min-h-[400px] flex justify-center items-center  max-h-[450px] max-w-[350px] border-[3px] border-solid border-black relative bg-slate-600 overflow-hidden rounded-se-[80px] rounded-es-[80px]  "
          style={{ 
            backgroundImage: `url(${art2})`
          }}
          >
            <div className=" text-white flex items-center pl-[10px] absolute top-2/3 w-full h-[60px] bg-black opacity-75">
              <p>Dejene Coffee Mockup</p>

            </div>

          </div>




        </div>


      </div>
      <div className=" bg-no-repeat text-white px-[20px] lg:px-[100px]  relative min-h-screen   max-w-[1800px] mx-auto w-full grid grid-cols-1 grid-rows-12" style={{ 
                      backgroundImage: `url(${beautiful})`}}>
        <div className=" max-md:min-h-[500px] flex flex-col   row-span-9 my-[30px]">
          <div className=" flex flex-col gap-[2px] max-sm:items-center max-sm:justify-center h-1/2 md:w-1/2">
            <p className=" uppercase text-sm font-black "> spend your vacation with our activites</p>
            <p className=" text-2xl md:text-4xl font-black uppercase"> spend your vacation <br /> with our activites</p>
            
            <div className=" pt-[20px] flex justify-between pr-[80px]">
              <p className=" text-sm font-bold">MOST POPULAR</p>
              <FontAwesomeIcon  icon={faArrowCircleRight} />



            </div>
          </div>
          <div className=" max-sm:min-h-[900px] justify-center items-center max-md:py-[20px] h-1/2 flex text-black">
            <div className="   h-full col-span-3 lg:w-2/3 md:w-5/6 lg:pr-[80px] grid md:grid-cols-3  gap-[30px] ">
              <div className=" min-h-[200px] max-md:min-w-[250px] flex gap-[10px] flex-col bg-white shadow-md rounded-md p-[10px]">
                <div className=" h-3/4 bg-gray-300  bg-center bg-cover rounded-lg overflow-hidden"  style={{ 
                      backgroundImage: `url(${coffee1})`}}>


                </div>
                <div className=" h-1/4 ">
                  <p className=" text-sm font-black">with our activites</p>
                  <p className=" text-sm   "> spend vacation </p>


                </div>


              </div>
              <div className="min-h-[200px] max-md:min-w-[250px]  flex gap-[10px] flex-col bg-white shadow-md rounded-md p-[10px]">
                <div className=" h-3/4 bg-gray-300  bg-center bg-cover rounded-lg overflow-hidden"  style={{ 
                      backgroundImage: `url(${beautiful})`}}>


                </div>
                <div className=" h-1/4 ">
                  <p className=" text-sm font-black">with our activites</p>
                  <p className=" text-sm   "> spend vacation </p>


                </div>


              </div>
              <div className="min-h-[200px] max-md:min-w-[250px]  flex gap-[10px] flex-col bg-white shadow-md rounded-md p-[10px]">
                <div className=" h-3/4 bg-gray-300  bg-center bg-cover rounded-lg overflow-hidden"  style={{ 
                      backgroundImage: `url(${coffee1})`}}>


                </div>
                <div className=" h-1/4 ">
                  <p className=" text-sm font-black">with our activites</p>
                  <p className=" text-sm   "> spend vacation </p>


                </div>


              </div>

            </div>
            <div className=" bg-orange-500 col-span-3 lg:w-1/3 md:w-1/6"></div>
            


          </div>


        </div>

        <div className=" max-md:min-h-[300px] text-black bg-[rgba(255,255,255,0.4)] rounded-md  px-[25px]  flex items-center justify-center row-span-3 mb-[40px]">
          <div className=" max-lg:flex-col justify-center items-center flex w-full min-h-4/6 py-[20px] shadow-2xl  bg-white rounded-md ">
            <div className="max-lg:py-[20px] max-lg:items-center max-sm:flex-col px-[20px] flex justify-center lg:w-3/4">
              <div className=" flex justify-center items-center px-[20px] border-r-[1px] border-gray-400 ">
              
                <FontAwesomeIcon className=" text-3xl" icon={faCartPlus}/>
                <div className=" flex   justify-start flex-col pl-[20px]">
                  <p className=" text-left text-sm">spend vacation</p>
                  <p className=" font-bold">spend vacation</p>


                </div>

              </div>
              <div className=" flex justify-center items-center px-[20px] border-r-[1px] border-gray-400 ">
              
              <FontAwesomeIcon className=" text-3xl" icon={faCartPlus}/>
              <div className=" flex   justify-start flex-col pl-[20px]">
                <p className=" text-left text-sm">spend vacation</p>
                <p className=" font-bold">spend vacation</p>


              </div>

            </div>
            <div className=" flex justify-center items-center  px-[20px] border-r-[1px] border-gray-400 ">
              
              <FontAwesomeIcon className=" text-3xl" icon={faCartPlus}/>
              <div className=" flex   justify-start flex-col pl-[20px]">
                <p className=" text-left text-sm">spend vacation</p>
                <p className=" font-bold">spend vacation</p>


              </div>

            </div>
            

            </div>
            <div className=" flex  justify-center items-center md:w-1/4 ">
              <button
                class="middle   none center rounded-lg bg-gradient-to-tr from-yellow-600 to-yellow-600 py-3 lg:px-12 md:px-8 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Start Here
                <FontAwesomeIcon className=" pl-6" icon={faLongArrowAltRight}/>
              </button>

            </div>

          </div>

        </div>




      </div>

      <Outlet />
 
      </>
    );
  }