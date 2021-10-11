import React, {useEffect} from 'react';
import {requestMovies, setPageNumber} from "../state/reducers/Movies-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getFetching, getLimit, getMovies, getPageNumber, getTotalMoviesCount} from "../state/selectors/moviesSelectors";
import MovieCard from "./MovieCard";
import ReactPaginate from 'react-paginate';


const Movies = (props) => {
    const dispatch = useDispatch()

    const moviesList = useSelector(getMovies)

    const limit = useSelector(getLimit)
    const totalMoviesCount = useSelector(getTotalMoviesCount)
    const pageNumber = useSelector(getPageNumber)
    const isFetching = useSelector(getFetching)

    const pagesCount = Math.ceil(totalMoviesCount / limit)


    useEffect(() => {
        dispatch(requestMovies(limit, pageNumber))
    },[pageNumber] )


   const handlePageClick = (data) => {
       dispatch(setPageNumber(data.selected))
    };


    return (
        <div className='container'>
            <div className='pagination'>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pagesCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>

            {isFetching ? <div className='loading'>Loading....</div>
                        : <div className='movie-list-container'>
                    {moviesList.length > 0 &&
                    moviesList.map(movie => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>}


        </div>
    );
};

export default Movies;