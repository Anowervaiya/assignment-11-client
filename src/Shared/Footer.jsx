
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight  md:mx-3 xl:text-2xl">
            Join our Group Study to get update.
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm  duration-300  rounded-lg gap-x-3  focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              <Link to="/Registration">Sign Up Now</Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-6 md:my-10 " />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold  ">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="transition-colors duration-300 :underline hover:text-blue-500"
              >
                Home
              </a>
              <a
                href="#"
                className="transition-colors duration-300  hover:underline hover:text-blue-500"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold  ">
              Industries
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Finance & Insurance
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold ">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Translation
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Proofreading & Editing
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Content Creation
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold ">
              Contact Us
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="transition-colors duration-300 hover:text-blue-500"
              >
                +880 768 473 4960
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                groupstudy@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"> */}

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href="#">
            <img
              className="w-auto h-7"
              src="https://i.ibb.co/2SmbVsV/download.png"
              alt=""
            />
          </a>

          <p className="mt-4 text-sm text-white sm:mt-0 ">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer