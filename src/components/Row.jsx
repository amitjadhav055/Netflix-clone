import React from 'react';
import './Row.css';

const Row = ({ title, movies }) => (
  <div className="row">
    <h2>{title}</h2>
    <div className="row-posters">
      {movies.map((movie, index) => (
        <img
          key={index}
          className="row-poster"
          src={movie.image}
          alt={movie.name}
        />
      ))}
    </div>
  </div>
);

export default Row;
