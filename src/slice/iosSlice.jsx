import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIosData = createAsyncThunk('ios/fetchData', async () => {
    const response = await axios.get('/api/ios');
    return response.data;
});

const iosSlice = createSlice({
    name: 'ios',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIosData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchIosData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchIosData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default iosSlice.reducer;