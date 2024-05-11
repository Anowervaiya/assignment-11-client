import React from 'react'
import { Link } from 'react-router-dom';

function FeatureCard() {
  return (
    <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md  ">
      <img
        class="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <div class="p-6">
        <div>
          <span class="text-xs font-medium uppercase  text-blue-400 bg-blue-100 p-2 rounded-full">
            Difficulty
          </span>
          <div class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform   hover:text-gray-600 ">
            I Built A Successful Blog In One Year
          </div>
          <p class="mt-2 text-sm text-gray-600  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <h1 class="mx-2 font-semibold text-gray-700  ">Marks</h1>
              <span class=" text-gray-600  ">21 SEP 2015</span>
            </div>

            <div className="flex justify-end items-center ">
              <Link
                to={'/details'}
                class="mx-6 hover:text-lime-600   text-gray-600  p-3 rounded-full outline
            outline-lime-600 "
              >
                View Assignment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard