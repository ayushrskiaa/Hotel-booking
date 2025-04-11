/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.png";

export default function Home() {

  return (

    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
      className="bg-cover bg-center bg-no-repeat h-screen relative "
    >




      {/* Search Bar */}
      <div >  
        <div className="w-1/2 mx-auto py-3 ">
          <div className="text-sm  flex px-4 py-3 cursor-pointer rounded-md border-2 border-white-500 overflow-hidden p-4 mb-4 bg-white shadow-md w-3/4 mx-auto text-gray-500 ">
            Search hotels, places...
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-gray-600 ml-80"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
        </div>

      </div>


      {/* Search Bar End */}




      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent opacity-70 h-full "></div>
      <img
        src={logo}
        className="bg-transparent absolute h-half my-10 z-11"
        alt="logo"
      />

      <div className="mx-auto w-full max-w-7xl text-white ">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="border-2 shadow-xl dark:shadow-gray-800 rounded-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
              <h2 className="text-4xl sm:text-7xl text-white p-4 ">
                Explore the nature with
                <span className="hidden font-extrabold sm:block text-7xl ">
                  <h1>Nature's heaven</h1>
                </span>
              </h2>

              <div className="p-2">
                <Link
                  className="inline-flex items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 text-white"
                  to="/Explore"
                >
                  <svg
                    fill="white"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                  </svg>
                  &nbsp; Book Now
                </Link>
              </div>
            </div>
          </div>


        </aside>


      </div>
    </div>


  );
}
