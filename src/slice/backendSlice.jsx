import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBackendData = createAsyncThunk('backend/fetchData', async () => {
    const response = await axios.get('/api/backend');
    return response.data;
});

const backendSlice = createSlice({
    name: 'backend',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBackendData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBackendData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchBackendData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default backendSlice.reducer;