import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import {setCurrentMoviesId} from "../state/reducers/Movies-reducer";



const MovieCard = ({movie}) => {
    const history = useHistory()
    const dispatch = useDispatch()


    const toMovieCardInfo = (id) => {
        history.push(`/moviecard/` + id)
        dispatch(setCurrentMoviesId(id))
    }

    return (
        <div className='movie-card' key={movie.id}>
            <img src={movie.medium_cover_image || 'https://via.placeholder.com/500'}
                 alt={movie.title}/>
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='movie-year'>{movie.year}</p>
            <button className='movie-btn' onClick={() => toMovieCardInfo(movie.id)}>More info</button>
        </div>


    );
};

export default MovieCard;