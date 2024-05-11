import React from 'react'
import FeatureCard from './FeatureCard';

function Features() {
  return (
    <div className='my-24'>
      <div className="w-3/4 mx-auto">
        <h1 className="text-center text-4xl font-semibold ">
         Features
        </h1>
        <p className="text-gray-600 mt-4 mb-16 text-center">
          Here have some Feature . you can attempt any assingment and can get a reasonable marks
        </p>
      </div>
    <FeatureCard></FeatureCard>
    </div>
  );
}

export default Features