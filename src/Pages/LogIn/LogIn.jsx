import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextAPI } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

function LogIn() {
  const { SingInUser, GoogleLogin } = useContext(ContextAPI);
  const AxiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = async () => {
    const result = await GoogleLogin();
    const user =await result?.user?.email;
    await AxiosSecure.post('/jwt', { user });
    navigate(location.state ? location.state : '/');
    toast.success('Google Login  successfully');
    
  };

  const handleForm = async e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const result = await SingInUser(email, password);
    const user = result.user.email;
    await AxiosSecure.post('/jwt', { user });

    toast.success('Login successfully');
    navigate(location.state ? location.state : '/');

    
  };

  return (
    <div >
      
     
      <div className=" w-1/2 mt-24 border border-cyan-300 max-w-sm p-6 m-auto mx-auto  rounded-lg shadow-md ">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto rounded-lg h-7 sm:h-16"
            src="https://i.ibb.co/2SmbVsV/download.png"
            alt=""
          />
        </div>

        <form className="mt-6" onSubmit={handleForm}>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label for="email" className="block text-sm ">
                Email
              </label>
            </div>

            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2  border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm ">
                Password
              </label>
            </div>

            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2  border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <input
            type="submit"
            value={' Log In'}
            className="w-full text-center cursor-pointer mt-6 px-6 py-2.5 text-sm font-medium tracking-wide border  capitalize transition-colors duration-300 transform  rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          />
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or LogIn with
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <Link className="flex items-center w-full justify-center mt-4  transition-colors duration-300 transform border rounded-lg text-gray-700  hover:bg-cyan-50">
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span
              onClick={handleGoogleLogin}
              className=" px-4 py-3 font-bold text-center"
            >
              Sign in with Google
            </span>
          </Link>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {' '}
          Don't have an account?{' '}
          <Link
            to={'/Registration'}
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
