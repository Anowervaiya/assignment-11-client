import React, { useEffect } from 'react';
import { GoCheck } from 'react-icons/go';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

function Pending() {
  const AxiosSecure = useAxiosSecure()

 const { data, error, isLoading, refetch } = useQuery({
   queryKey: ['pending'],
   queryFn: async () => {
     const result = await AxiosSecure.get('/pending');

     return result.data;
   },
 });
  

 
  if(isLoading || !data) return <Loading></Loading>
  return (
    <section class="container px-4 mx-auto">
      <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                  Examinee Name
                    </th>

                  

                   

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                     Assignment Name
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Assignment Marks
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Give Marks
                    </th>
                  </tr>
                </thead>
                {
                  data.map(item => {
                    return (
                      <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        <tr>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <div class="flex items-center gap-x-2">
                                <img
                                  class="object-cover w-10 h-10 rounded-full"
                                  src={item?.UserPhoto}
                                  alt=""
                                />
                                <div>
                                  <h2 class="font-medium text-gray-800 dark:text-white ">
                                    {item?.UserName}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td class="px-4 py-4 text-sm text-white dark:text-gray-300 whitespace-nowrap">
                            {item?.AssignmentName}
                          </td>

                          <td class="px-4 py-4 text-white text-sm whitespace-nowrap">
                            {item?.TotalMarks}
                          </td>
                          <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <Link
                              to={`/GiveMarks/${item?._id}`}
                              // onClick={() => sendMark(item?._id)}

                              className="btn btn-outline btn-success"
                            >
                              Give Marks
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    );})
              }
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pending;
