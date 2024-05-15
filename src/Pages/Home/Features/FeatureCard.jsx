import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'


function FeatureCard({ item }) {

  return (
    <div class="max-w-2xl overflow-hidden  dark:text-gray-400 border p-4 rounded-lg shadow-md  ">
      <img
        class="object-cover w-full rounded-lg h-64"
        src={item?.thumbnail}
        alt="Article"
      />

      <div class="py-6">
        <div>
          <span class="text-xs font-medium uppercase  text-blue-400 bg-blue-100  p-2 rounded-full">
            {item?.difficulty}
          </span>
          <div class="block mt-2 text-xl font-semibold  transition-colors duration-300 transform   dark:text-gray-400 ">
            {item?.name}
          </div>
          <p class="mt-2 text-sm dark:text-gray-400  ">
            {item?.description}
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <h1 class="mx-2 font-semibold dark:text-gray-400   ">
                {item?.Marks}
              </h1>
              <span class=" dark:text-gray-400   ">
                {moment(item?.startDate).format('DD/MM/YYYY')}
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