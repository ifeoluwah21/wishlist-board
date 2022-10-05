import { configureStore } from "@reduxjs/toolkit";
import groceriesSlice from "./groceries-slice";

const store = configureStore({
    reducer: { groceries: groceriesSlice.reducer }
})

export default store;