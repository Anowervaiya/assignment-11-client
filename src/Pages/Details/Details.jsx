import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

function Details() {
  const AxiosSecure = useAxiosSecure()
  const { id } = useParams()

    const { data, error, isLoading, refetch } = useQuery({
      queryKey: ['Details'],
      queryFn: async () => {
        const result = await AxiosSecure.get(`/details?id=${id}`);

        return result.data;
      },
    });
  
  
  
  if(isLoading) return <p>loddingg details....</p>

  return (
    <div className='container mx-auto'>
      {data.map(item => {
        return (
          <div className="card  lg:h-[400px] lg:card-side bg-base-100 border p-6 shadow-xl">
            <figure>
              <img
                src={item?.thumbnail}
                alt="Album"
                className="w-full h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item?.name}</h2>
              <p>Posted By : {item?.UserName}</p>
              <p>Posted Email : {item?.UserEmail}</p>
              <p>Difficulty : {item?.difficulty}</p>
              <p>Total Marks : {item?.Marks}</p>
              <p>Posted Date : {moment(item?.startDate).format('DD/MM/YYYY')}</p>

              <div className="card-actions justify-start ">
                <Link
                  to={'/TakeAssignment'}
                  className="btn btn-outline btn-success"
                >
                  Take Assignment
                </Link>
              </div>
            </div>
          </div>
        );})}
    </div>
  );
}

export default Details