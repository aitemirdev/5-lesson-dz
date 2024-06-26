import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUxuiData = createAsyncThunk('uxui/fetchData', async () => {
    const response = await axios.get('/api/uxui');
    return response.data;
});

const uxuiSlice = createSlice({
    name: 'uxui',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUxuiData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUxuiData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchUxuiData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default uxuiSlice.reducer;