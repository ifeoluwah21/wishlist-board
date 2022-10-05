import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { groceriesActions } from '../../store/groceries-slice';
import GroceriesItems from './GroceriesItems';
import styles from "./GroceriesList.module.scss";

const GroceriesList = (props) => {
    const items = useSelector(state => state.groceries.items);
    const dispatch = useDispatch()
    if (items.length === 0 || !items) {
        return;
    }
    const clearALlHandler = () => {
        dispatch(groceriesActions.clearItem());
    }
    return (
        <Fragment>
            {items.map(item => (
                <GroceriesItems key={item.id} name={item.item} id={item.id} />
            ))}
            <button className={styles.btn} onClick={clearALlHandler} type='button'>Clear All Items</button>
        </Fragment>
    )
}

export default GroceriesList;