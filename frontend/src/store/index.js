
import { configureStore } from '@reduxjs/toolkit';
import productionReducer from './productionSlice';
import materialReducer from './materialSlice';

export const store = configureStore({
    reducer: {
        production: productionReducer,
        materials: materialReducer,
    },
});