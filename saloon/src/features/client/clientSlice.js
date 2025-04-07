import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  clients: [],
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    addClient: (state, action) => {
      state.clients.push({ ...action.payload, id: uuidv4() });
    },
    updateClient: (state, action) => {
      const index = state.clients.findIndex(client => client.id === action.payload.id);
      if (index !== -1) {
        state.clients[index] = action.payload;
      }
    },
    deleteClient: (state, action) => {
      state.clients = state.clients.filter(client => client.id !== action.payload);
    },
  },
});

export const { addClient, updateClient, deleteClient } = clientSlice.actions;
export default clientSlice.reducer;
