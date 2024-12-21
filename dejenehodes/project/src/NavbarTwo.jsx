import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhone , faEnvelope,faTimes, faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import { faFacebook, faTwitter, faInstagram, faYoutube,faLinkedin,faTiktok } from '@fortawesome/free-brands-svg-icons';

import { Outlet, Link } from "react-router-dom";

export default function NavbarTwo({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className=' flex justify-center items-center py-[5px] max-sm:flex-col sm:gap-[40px] max-sm:gap-[5px]  bg-yellow-300'>
        <div className=" flex justify-center items-center gap-[8px]">
          <FontAwesomeIcon icon={faPhone}/>
          <p>+251951941565</p>
        </div>

        <div className=" flex justify-center items-center gap-[8px]">
          <FontAwesomeIcon icon={faEnvelope}/>
          <p>dejenehodes@aduliscapital.com</p>
        </div>
        <div className=" grid  grid-cols-6 gap-[10px] justify-end ">
          <FontAwesomeIcon icon={faFacebook}  />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faLinkedin}  />
          <FontAwesomeIcon icon={faTiktok}  />
      
        </div>




        

      </div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#8E2BE8]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                <Link 
                  className="text-lx font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"


                to="/">
                      <p className="ml-2">DEJENE HODES</p>


                </Link>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen?<FontAwesomeIcon icon={faTimes} />:<FontAwesomeIcon icon={faBars} />}
              
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <Link 
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                to="/">
                      <p className="ml-2">Home</p>


                </Link>

              </li>   
              <li className="nav-item">
                <Link 
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                to="/tour">
                      <p className="ml-2">Dejene Ethiopian Tours</p>


                </Link>

              </li>  
              <li className="nav-item">
                <Link 
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                to="/art">
                      <p className="ml-2">Adulis Ethiopian Arts</p>


                </Link>

              </li> 
              
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                >
                  <Link className="ml-2" to="/coffee">Dejene Ethiopian Coffee</Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                >
                    <p className="ml-2">Blogs</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                >
                  <Link className="ml-2" to="/contact">Contact</Link>
                </a>
              </li>




            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}