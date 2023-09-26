import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Agentes } from "../interface";


interface AgentSliceState {
    msg: string;
    error: string | undefined;
    status: string;
    data: Agentes[] | null; // Aquí usamos la interfaz Agentes
}

const initialState: AgentSliceState = {
    msg: '',
    error: '',
    status: '',
    data: [], // Inicialmente, el dato es nulo
};
export const getAgent = createAsyncThunk('agent/getAgent', async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/agents`, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: false,
    });

    return response.data;
});
export const getAgentId = createAsyncThunk('agent/getAgentId', async (id: string | undefined) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/agents/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: false,
    });

    return response.data;
});
export const agentSlice = createSlice({
    name: 'agent',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //get agentes
        builder
            .addCase(getAgent.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getAgent.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload.data
            })
            .addCase(getAgent.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });

        //get agentesId
        builder
            .addCase(getAgentId.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getAgentId.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload
            })
            .addCase(getAgentId.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    }
})
// Action creators are generated for each case reducer function
export default agentSlice.reducer