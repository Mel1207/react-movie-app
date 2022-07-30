import React from "react";

const CardMovie = ({ movie }) => {
    return (
        <div className='card-movie'>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} className='card-img'/>
            <h3>{movie.Title}</h3>
            <div className='card-details'>
                <span>{movie.Year}</span>
                <p className='movie'>{movie.Type}</p>
            </div>
        </div>
    )
}

export default CardMovie