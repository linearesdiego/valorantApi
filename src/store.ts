// store.ts
import { configureStore } from '@reduxjs/toolkit';
import agentSlice from './redux/agentSlice';
import mapSlice from './redux/mapSlice';

const store = configureStore({
    reducer: {
        agent: agentSlice,
        maps: mapSlice
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;