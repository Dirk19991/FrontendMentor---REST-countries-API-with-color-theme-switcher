import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { filterByCode } from '../../config';

export const setNeighborss = createAsyncThunk(
  'neighbors/setNeighborss',
  async (borders) => {
    const neighbors = await axios.get(filterByCode(borders));
    const neighborsNames = neighbors.data.map((elem) => elem.name);

    return neighborsNames;
  }
);

const neighborsSlice = createSlice({
  name: 'neighbors',
  initialState: {
    neighbors: null,
  },
  extraReducers: (builder) => {
    builder.addCase(setNeighborss.pending, (state, action) => {
      state.neighbors = null;
    });
    builder.addCase(setNeighborss.fulfilled, (state, action) => {
      state.neighbors = action.payload;
    });
  },
});

export default neighborsSlice.reducer;
