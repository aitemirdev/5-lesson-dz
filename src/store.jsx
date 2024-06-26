import { configureStore } from '@reduxjs/toolkit';
import frontendReducer from './slice/frontendSlice';
import backendReducer from './slice/backendSlice';
import iosReducer from './slice/iosSlice';
import androidReducer from './slice/androidSlice';
import uxuiReducer from './slice/uxuiSlice';

const store = configureStore({
    reducer: {
        frontend: frontendReducer,
        backend: backendReducer,
        ios: iosReducer,
        android: androidReducer,
        uxui: uxuiReducer,
    },
});

export default store;