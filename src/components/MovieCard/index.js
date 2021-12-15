import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledCard from './movieCardStyle';

const MovieCard = ({ data }) => {
  return (
    <StyledCard>
      <Link to={`/movies/${data.imdbID}`}>
        <div className='card-item'>
          <div className='card-top'>
            <img src={data.Poster} alt='movie-card' />
          </div>
          <div className='card-bottom'>
            <div className='card-info'>
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </StyledCard>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieCard;
