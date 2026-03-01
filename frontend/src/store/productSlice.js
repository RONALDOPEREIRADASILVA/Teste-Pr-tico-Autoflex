import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductionAnalysis = createAsyncThunk(
    'production/fetchAnalysis',
    async () => {
        const response = await axios.get('http://localhost:8080/api/products/analysis');
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
            .addCase(fetchProductionAnalysis.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductionAnalysis.fulfilled, (state, action) => {
                state.loading = false;
        
                state.analysisData = action.payload;
            })
            .addCase(fetchProductionAnalysis.rejected, (state, action) => {
                state.loading = false;
                state.error = "Erro ao carregar análise de produção.";
            });
    }
});

export default productionSlice.reducer;