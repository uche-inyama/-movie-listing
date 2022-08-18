import React from 'react';
import MovieList from '../../containers/MovieList';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import Login from '../../containers/SignIn';

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
