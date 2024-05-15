import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'
import { ContextAPI } from '../AuthProvider/AuthProvider';
import Footer from '../Shared/Footer';

function Main() {
  const { loader } = useContext(ContextAPI)
  if(loader) return (
    <div
      className="
        flex  justify-center items-center min-h-[calc(100vh-66px)]
        "
    >
      <span className="loading w-[50px] loading-spinner text-success"></span>;
    </div>
  );
    return (
      <>
        <Navbar></Navbar>
        <div className='min-h-[100vh]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </>
    );
}

export default Main