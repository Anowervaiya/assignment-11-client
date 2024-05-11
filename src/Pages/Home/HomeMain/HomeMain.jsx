import React from 'react'
import Banner from '../Banner/Banner'
import Features from '../Features/Features'
import FAQ from '../FAQ/FAQ'

function HomeMain() {
  return (
    <div>
      <Banner></Banner>

      <div className='container mx-auto'>
        <Features></Features>
        <FAQ></FAQ>
      </div>
    </div>
  );
}

export default HomeMain