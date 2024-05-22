import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import { Roll, Slide } from 'react-awesome-reveal';


function FeatureCard({ item }) {

  return (
    <Roll direction="right" duration={1500}>
      {' '}
      <div className="  border border-cyan-300 bg-cyan-50 hover:shadow-lg  h-full   transition duration-300 rounded-lg p-4  hover:-translate-y-2   ">
        <img
          className="object-cover w-full rounded-lg h-64"
          src={item?.thumbnail}
          alt="Article"
        />

        <div className="py-6 ">
          <div>
            <span className="text-xs font-medium uppercase  text-blue-400 bg-blue-100 w-16  p-2 rounded-full">
              {item?.difficulty}
            </span>
            <div className="block mt-2 text-xl font-semibold duration-300 transform   ">
              {item?.name}
            </div>
            <p className="mt-2 text-gray-500  flex-grow-0 text-sm ">
              {item?.description}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <h1 className="mx-2 font-semibold  text-gray-500   ">
                  {item?.Marks}
                </h1>
                <span className="   text-gray-500  ">
                  {moment(item?.startDate).format('DD/MM/YYYY')}
                </span>
              </div>

              <div className="flex justify-end items-center ">
                <Link
                  to={`/Details/${item?._id}`}
                  className="mx-6 btn btn-outline btn-info hover:text-lime-600     p-3 rounded-full  "
                >
                  View Assignment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Roll>
  );
}

export default FeatureCard