import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import GroceriesItems from './GroceriesItems';
import styles from "./GroceriesList.module.scss";

const GroceriesList = (props) => {
    const items = useSelector(state => state.groceries.items);
    if (items.length === 0 || !items) {
        return;
    }
    return (
        <Fragment>
            {items.map(item => (
                <GroceriesItems key={item.id} name={item.item} id={item.id} />
            ))}
            <button className={styles.btn} type='button'>Clear All Items</button>
        </Fragment>
    )
}

export default GroceriesList;