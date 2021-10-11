import React from 'react';
import {Formik, Form, Field} from "formik";
import {useDispatch} from "react-redux";
import {setComment} from "../state/reducers/Movies-reducer";


const INITIAL_FORM_STATE = {
    comment: '',
}

const MovieCommentForm = () => {
    let dispatch = useDispatch()

    const onSubmit = (values, {resetForm}) => {
        dispatch(setComment(values.comment))
        resetForm()
    }

    return (
        <div className={'form-container'}>
            <Formik initialValues={{
                ...INITIAL_FORM_STATE
            }}
                    onSubmit={onSubmit}
            >
                <Form className='form'>
                    <Field id="comment"
                           as='textarea'
                           rows={5}
                           cols={50}
                           name="comment"
                           placeholder="Enter you comment"/>
                    <div className='form-btn'>
                        <button type='submit' className='btn'>Send comment</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default MovieCommentForm;