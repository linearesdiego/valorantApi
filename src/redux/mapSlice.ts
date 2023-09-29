import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Mapas } from "../interface";


export interface MapSliceState {
    msg: string;
    error: string | undefined;
    status: string;
    data: Mapas[] | {}; // Aquí usamos la interfaz Agentes
}

const initialState: MapSliceState = {
    msg: '',
    error: '',
    status: '',
    data: [], // Inicialmente, el dato es nulo,
};
export const getMap = createAsyncThunk('mapas/getMap', async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/maps`, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: false,
    });

    return response.data;
});
/* export const getAgentId = createAsyncThunk('agent/getAgentId', async (id: string | undefined) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/agents/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: false,
    });

    return response.data.data;
}); */
export const mapSlice = createSlice({
    name: 'mapas',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //get agentes
        builder
            .addCase(getMap.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getMap.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload.data
            })
            .addCase(getMap.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });

      
    }
})
// Action creators are generated for each case reducer function
export default mapSlice.reducer