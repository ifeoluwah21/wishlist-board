import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { groceriesActions } from '../../store/groceries-slice';
import styles from "./Form.module.scss";

const Form = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const inputRef = useRef('');
    const submitHandler = (e) => {
        e.preventDefault();
        if (!id) {
            dispatch(groceriesActions.addItem(inputRef.current.value));
        } else {
            dispatch(groceriesActions.editItem({ id, value: inputRef.current.value }));
            navigate("/groceries", { replace: true })
        }
        inputRef.current.value = "";
    }
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles[`form-control`]}>
                <input ref={inputRef} type="text" placeholder='e.g Grapes' name="groceries" />
            </div>
            <div className={styles[`form-action`]}>
                <button type="submit">{id ? "Edit" : "Submit"}</button>
            </div>
        </form>
    )
}

export default Form;