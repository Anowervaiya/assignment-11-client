import React, { useContext } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';

// import auth from '../authentication/authentication';

import { FaCircleUser } from 'react-icons/fa6';
import { signOut } from 'firebase/auth';
import { ContextAPI } from '../AuthProvider/AuthProvider';



const Navbar = props => {

  const { user, loader, signInOut } = useContext(ContextAPI);

 
  
  

    const list = (
      <>
        {' '}
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/AllAssignment'}>Assignment</NavLink>
        </li>
        {user && (
          <li>
            <NavLink to={'/CreateAssignment'}>Create Assignment</NavLink>{' '}
          </li>
        )}
        {user && (
          <li>
            <NavLink to={'/Pending_Assignment'}>Pending Assignment </NavLink>{' '}
          </li>
        )}
        <li>{<NavLink to={'/about'}>About Us</NavLink>}</li>
        <li>{<NavLink to={'/contact'}>Contact Us</NavLink>}</li>
      </>
    );
  return (
    <div className="navbar px-4">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-4 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 z-50 rounded-box w-52"
          >
            {list}
          </ul>
        </div>
        <Link to={'/'} className="text-3xl mx-4 font-semibold">
          Group Study{' '}
        </Link>
      </div>

      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>My Attempt Assignment</Link>
                </li>
                <li>
                  <div onClick={signInOut}>Logout</div>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <FaCircleUser size={'2rem'} />
            <NavLink className={'text-xs md:text-xl px-2'} to={'/Registration'}>
              Sign Up
            </NavLink>
            <NavLink className={'text-xs md:text-xl '} to={'/logIn'}>
              Sign in
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

