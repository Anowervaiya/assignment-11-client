import React, { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


function Features() {
  const AxiosSecure = useAxiosSecure();
  const [data,setData]= useState(null)

  useEffect(() => {
    AxiosSecure.get('/allassignment').then(res => {
      setData(res.data);
    });
  }, [])
  
  if(!data) return <div>feature e data nai</div>

  return (
    <div className="my-24">
      <div className="w-3/4 mx-auto">
        <h1 className="text-center text-4xl font-semibold ">Features</h1>
        <p className="text-gray-600 mt-4 mb-16 text-center">
          Here have some Feature . you can attempt any assingment and can get a
          reasonable marks
        </p>
      </div>
      <div className="grid grid-cols-1 container mx-auto gap-10 p-1   md:grid-cols-2 my-16 lg:grid-cols-3">
        {data.slice(0, 3).map(item => (
          <FeatureCard item={item}></FeatureCard>
        ))}
      </div>
    </div>
  );
}

export default Features