import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'


function FeatureCard({ item }) {

  return (
    <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md  ">
      <img
        class="object-cover w-full h-64"
        src={item?.thumbnail}
        alt="Article"
      />

      <div class="p-6">
        <div>
          <span class="text-xs font-medium uppercase  text-blue-400 bg-blue-100 p-2 rounded-full">
            {item?.difficulty}
          </span>
          <div class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform   hover:text-gray-600 ">
            {item?.name}
          </div>
          <p class="mt-2 text-sm text-gray-600  ">{item?.description}</p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <h1 class="mx-2 font-semibold text-gray-700  ">{item?.Marsk}</h1>
              <span class=" text-gray-600  ">
               { moment(item?.startDate).format('DD/MM/YYYY')}
               
              </span>
            </div>

            <div className="flex justify-end items-center ">
              <Link
                to={`/Details/${item?._id}`}
                class="mx-6 btn btn-outline btn-info hover:text-lime-600   text-gray-600  p-3 rounded-full  "
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