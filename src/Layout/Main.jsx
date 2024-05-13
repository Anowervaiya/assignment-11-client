import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'
import { ContextAPI } from '../AuthProvider/AuthProvider';

function Main() {
  const { loader } = useContext(ContextAPI)
  if(loader) return <div>loading form main .......</div>
    return (
      <>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </>
    );
}

export default Main