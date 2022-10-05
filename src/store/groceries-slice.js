import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: ""
}

const groceriesSlice = createSlice({
    name: "Groceries List",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push({
                item: action.payload,
                id: Math.floor(Math.random() * 100).toString()
            });
            state.status = "Successfully added an Item."
        },
        clearItem: (state, action) => {
            state.items = [];
            state.status = "Clear all Items";
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.status = "Successfully removed an Item"
        },
        editItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            existingItem.item = action.payload.value;
            state.status = "Successfully edit an Item"
        }
    }
})


export const groceriesActions = groceriesSlice.actions;
export default groceriesSlice;