import axios from 'axios'
import React from 'react'
const AxiosSecure = axios.create({
  baseURL: 'https://group-stydy.vercel.app',
  withCredentials: true,
});

function useAxiosSecure() {
  return AxiosSecure;
}

export default useAxiosSecure