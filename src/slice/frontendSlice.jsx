import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFrontendData = createAsyncThunk('frontend/fetchData', async () => {
    const response = await axios.get('/api/frontend');
    return response.data;
});

const frontendSlice = createSlice({
    name: 'frontend',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFrontendData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFrontendData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchFrontendData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default frontendSlice.reducer;