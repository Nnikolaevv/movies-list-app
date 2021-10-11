import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getComments, getMovieCardInfo} from "../state/selectors/moviesSelectors";
import MovieCommentForm from "./MovieCommentForm";
import {deleteComment} from "../state/reducers/Movies-reducer";

const MovieCardInfo = () => {
    const movie = useSelector(getMovieCardInfo)
    const dispatch = useDispatch()

    const comments = useSelector(getComments)

    const deleteHandler = (id) => {
        dispatch(deleteComment(id))
    }

    return (
        <div className='container'>

            {movie.map(movie => {
             return  (
                 <div className='movie-card-info' key={movie.id}>
                     <div className='movie-card-info-img'>
                         <img src={movie.large_cover_image} alt=""/>
                     </div>

                     <div className=' movie-card-info-description'>
                         <h2>  {movie.title} </h2>
                         <span>{movie.year}</span>
                         <p> {movie.description_full}</p>
                         <div>
                             <span>Rating : {movie.rating}</span>
                         </div>
                     </div>

                     <div className='movie-card-comments'>
                         <MovieCommentForm />
                         <h2>Comments</h2>
                         {comments.map(comment => {
                             return <div key={comment.id} className={'comments-block'}>
                                 <h3>USER_NAME : {comment.comment}</h3>
                                 <div>
                                     <button className='btn' onClick={() => deleteHandler(comment.id)}>Delete</button>
                                 </div>

                             </div>
                         })
                         }


                     </div>

                 </div>
                 )
            })}

            
        </div>
    );
};

export default MovieCardInfo;