import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchFilter from '../../containers/SearchFilter';
import StyledHeader from './styledHeader';
import Modal from '../modal';

const Header = () => {
  const token = localStorage.getItem('token');
  const isAuthenticated = useSelector(state => state.sessionsData.isAuthenticated)
  return (
    <StyledHeader>
      <div className="header">
        <Link to="/movies" className="logo" style={{color: '#fff'}}>Movie App</Link>
        {(token || isAuthenticated) && <SearchFilter />}
        <div className="userimage">
          <Modal />
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header;
