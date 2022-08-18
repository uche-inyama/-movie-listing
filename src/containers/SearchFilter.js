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
    if(term === '') return alert('Search field is empty!');
    dispatch(getMovies(term));
    dispatch(getShows(term));
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="search-field"
        type="text" 
        value={term} 
        onChange={handleChange} 
        placeholder="Search"
      />
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  )
};

export default SearchFilter;