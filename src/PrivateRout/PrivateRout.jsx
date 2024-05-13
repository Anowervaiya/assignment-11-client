import React, { useContext } from 'react'
import { ContextAPI } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

function PrivateRout({children}) {
//  const navigate = useNavigate()
  const { user,loader } = useContext(ContextAPI)
  const location = useLocation()
  if(!user) return <Navigate state={location.pathname} to={'/logIn'}></Navigate>
  // if (loader) {
  //  return (
  //    <div
  //      className="
  //       flex  justify-center items-center min-h-[calc(100vh-66px)]
  //       "
  //    >
  //      <span className="loading w-[50px] loading-spinner text-success"></span>;
  //    </div>
  //  );
  // }

  return children
}

export default PrivateRout