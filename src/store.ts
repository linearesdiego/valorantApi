// store.ts
import { configureStore } from '@reduxjs/toolkit';
import agentSlice from './redux/agentSlice';

const store = configureStore({
    reducer: {
        agent: agentSlice
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;