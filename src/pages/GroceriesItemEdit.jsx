import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Form from '../components/Form/Form';
import GroceriesItems from '../components/Groceries/GroceriesItems';
import Card from '../components/UI/Card';

import styles from "./GroceriesItemEdit.module.scss"

const GroceriesItemEdit = () => {
    const { id } = useParams();
    const items = useSelector(state => state.groceries.items);
    const item = items.find(x => x.id === id);
    console.log(item);
    if (!item) {
        return (<Card>
            <h1>No items found</h1>
        </Card>)
    }
    return (
        <Card>
            <h1 className={styles.title}>Edit {item.item}</h1>
            <Form />
            <GroceriesItems name={item.item} id={item.id} />
        </Card>
    )
}

export default GroceriesItemEdit;