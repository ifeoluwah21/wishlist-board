import React from 'react';
import Form from '../components/Form/Form';
import GroceriesList from '../components/Groceries/GroceriesList';
import Card from '../components/UI/Card';

import styles from "./Groceries.module.scss"

const Groceries = () => {

    return (
        <Card>
            <h1 className={styles.title}>Groceries Bud</h1>
            <Form />
            <GroceriesList />
        </Card>
    )
}

export default Groceries;