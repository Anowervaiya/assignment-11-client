import axios from 'axios'
import React from 'react'
const AxiosSecure = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true
});

function useAxiosSecure() {
  return AxiosSecure;
}

export default useAxiosSecure