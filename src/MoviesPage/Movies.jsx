import React, {useEffect} from 'react';
import {requestMovies} from "../state/reducers/Movies-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../state/selectors/moviesSelectors";

const Movies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestMovies())
    }, [])

    const moviesList = useSelector(getMovies)


    console.log(moviesList)

    return (
        <div>
            {moviesList && moviesList.map(movies => (
                <h1>{movies.title}</h1>
                )
            )
            }
        </div>
    );
};

export default Movies;