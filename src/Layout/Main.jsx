import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'
import { ContextAPI } from '../AuthProvider/AuthProvider';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading/Loading';

function Main() {
  const { loader } = useContext(ContextAPI)
  if(loader) return <Loading></Loading>
    return (
      <>
        <Navbar></Navbar>
        <div className='min-h-[100vh] mt-[66px]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </>
    );
}

export default Main