import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

import styles from "./GroceriesItem.module.scss"
import { useDispatch } from 'react-redux';
import { groceriesActions } from '../../store/groceries-slice';
import { useNavigate, useParams } from 'react-router-dom';
const GroceriesItems = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const onEditHandler = () => {
        navigate(`${props.id}`, { replace: true })
    }
    const onRemoveHandler = () => {
        dispatch(groceriesActions.removeItem({ id: props.id }))
    }
    return (
        <article className={styles.item}>
            <p>{props.name}</p>
            <div>
                <FontAwesomeIcon onClick={onEditHandler} style={{ color: "#00C9A7", pointerEvents: !id ? "" : "none" }} className={styles.icon} icon={faPenToSquare} />
                <FontAwesomeIcon onClick={onRemoveHandler} style={{ color: "#D63423", pointerEvents: !id ? "" : "none" }} icon={faTrashCan} className={styles.icon} />
            </div>
        </article>
    )

}

export default GroceriesItems