import React from 'react';
import { Link } from 'react-router-dom';
import SearchFilter from '../../containers/SearchFilter';
import profile from '../../images/profile.png'
import StyledHeader from './styledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <div className="header">
        <Link to="/" className="logo" style={{color: '#fff'}}>Movie App</Link>
        <SearchFilter />
        <div className="userimage">
          <img src={profile} alt="user" />
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header;
