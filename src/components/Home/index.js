import React from 'react';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';
import SignIn from '../../containers/SignIn';


const GetMovies = () => {
  const isAuthenticated = useSelector(state => state.sessionsData.isAuthenticated)
  const token = localStorage.getItem('token')
  if(token || isAuthenticated) {
    return ( 
      <Navigate to="/movies"/>
    )
  }else {
    return <SignIn />
  }
}

export default GetMovies;
