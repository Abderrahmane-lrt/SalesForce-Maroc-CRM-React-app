import { configureStore } from "@reduxjs/toolkit";
import OpportunitiesReducer from './OpportinitySlice';

const store = configureStore({
    reducer: {
        opportunities: OpportunitiesReducer
    }
});

export default store;