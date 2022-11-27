import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { filterByCode } from '../../config';

interface Neighbor {
  name: string;
  [key: string]: any;
}

export const setNeighbors = createAsyncThunk<string[], string[]>(
  'neighbors/setNeighbors',
  async (borders: string[]) => {
    const neighbors = await axios.get(filterByCode(...borders));
    const neighborsNames = neighbors.data.map((elem: Neighbor) => elem.name);

    return neighborsNames;
  }
);

interface Neighbors {
  neighbors: null | string[];
}

const initialState: Neighbors = {
  neighbors: null,
};

const neighborsSlice = createSlice({
  name: 'neighbors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setNeighbors.pending, (state, action) => {
      state.neighbors = null;
    });
    builder.addCase(setNeighbors.fulfilled, (state, action) => {
      state.neighbors = action.payload;
    });
  },
});

export default neighborsSlice.reducer;
