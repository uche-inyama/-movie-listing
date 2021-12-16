import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../redux/movieSlice';
import { getShows } from '../redux/showsSlice';

const SearchFilter = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({target: { value }}) => {
    setTerm(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMovies(term));
    dispatch(getShows(term));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={term} onChange={handleChange} placeholder="Search Movies or Shows" />
      <input type="submit"/>
    </form>
  )
};

export default SearchFilter;