import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAndroidData = createAsyncThunk('android/fetchData', async () => {
    const response = await axios.get('/api/android');
    return response.data;
});

const androidSlice = createSlice({
    name: 'android',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAndroidData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAndroidData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchAndroidData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default androidSlice.reducer;