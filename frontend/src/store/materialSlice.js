import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMaterials = createAsyncThunk(
    'materials/fetchMaterials',
    async () => {
        const response = await axios.get('http://localhost:8080/api/materials');
        return response.data;
    }
);

const materialSlice = createSlice({
    name: 'materials',
    initialState: {
        list: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMaterials.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMaterials.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchMaterials.rejected, (state) => {
                state.loading = false;
                state.error = "Erro ao carregar materiais.";
            });
    }
});

export default materialSlice.reducer;