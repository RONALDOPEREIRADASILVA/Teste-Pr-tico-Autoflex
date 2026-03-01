import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductionAnalysis = createAsyncThunk(
    'production/fetchAnalysis',
    async () => {
        const response = await axios.get('http://localhost:8080/api/products/analysis');
        return response.data;
    }
);

export const addProduct = createAsyncThunk(
    'production/addProduct',
    async (newProduct) => {
        // Envia o novo produto para o endpoint do Quarkus
        const response = await axios.post('http://localhost:8080/api/products', newProduct);
        return response.data;
    }
);

const productionSlice = createSlice({
    name: 'production',
    initialState: {
        analysisData: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Casos do Fetch
            .addCase(fetchProductionAnalysis.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductionAnalysis.fulfilled, (state, action) => {
                state.loading = false;
                state.analysisData = action.payload;
            })
            .addCase(fetchProductionAnalysis.rejected, (state, action) => {
                state.loading = false;
                state.error = "Failed to load factory analysis.";
            })
            
            .addCase(addProduct.fulfilled, (state, action) => {
                
                state.analysisData.push(action.payload);
            });
    }
});

export default productionSlice.reducer;