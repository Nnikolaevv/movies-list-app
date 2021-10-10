import {moviesApi} from "../../api/api";

const SET_MOVIES = 'movies/SET_MOVIES';

const initialState = {
    movies: [],
    moviesCount: null,
    pageNumber: 1,
    limit: null,

}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
               movies: action.moviesList
            };
        default:
            return state;
    }
}

const setMovies = (moviesList) => ({type: SET_MOVIES, moviesList});

export const requestMovies = () => async (dispatch) => {
    const moviesListResponse = await moviesApi.getMovies()

    console.log(moviesListResponse.data)

    dispatch(setMovies(moviesListResponse.data.movies))
    //
    // Promise.all([loadingAuthUserData])
    //     .then(() => {
    //             dispatch(setInitialApp())
    //         }
    //     );
}


export default moviesReducer;



