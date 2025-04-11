// import React from 'react'
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-bl from-emerald-800 to-emerald-500 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 shadow-xl dark:shadow-gray-800 rounded-lg">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-1 py-10">
                        

                        <form className=" flex mx-121 flex-col justify-center ">
                            <div className="flex flex-col  justify-center ">
                                <div className="text-white justify-center mx-20 font-bold ">LOGIN</div>
                                <label htmlFor="name" className="hidden shadow-xl dark:shadow-gray-800 ">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className=" w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none shadow-xl dark:shadow-gray-800"
                                />
                            </div>

                            <div className="flex flex-col mt-2 ">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none shadow-xl dark:shadow-gray-800"
                                />
                            </div>

                            <div className="flex flex-col  mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Phone Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none shadow-xl dark:shadow-gray-800"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 mx-10 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>

                            <Link
                                to="/Signup"
                                // to="/Signup"
                                // className={({isActive}) =>
                                //             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                //         }
                                // className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border-2 border-gray-300"
                                className="text-white"
                            >
                                Dont have and account? SignUp
                            </Link>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}