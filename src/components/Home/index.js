import React from 'react';
import { Navigate } from 'react-router';

const GetMovies = () => {
  const token = localStorage.getItem('token')
  if(token) {
    return ( 
      <Navigate to="/movies"/>
    )
  }else {
    return <Navigate to="/login" />
  }
}

export default GetMovies;
