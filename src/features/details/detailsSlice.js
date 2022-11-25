import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { searchByCountry } from '../../config';

export const setCountry = createAsyncThunk(
  'details/setCountry',
  async (name) => {
    const country = await axios.get(searchByCountry(name));

    return country.data[0];
  }
);

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    country: null,
  },
  extraReducers: (builder) => {
    builder.addCase(setCountry.pending, (state, action) => {
      state.country = null;
    });
    builder.addCase(setCountry.fulfilled, (state, action) => {
      state.country = action.payload;
    });
  },
});

export default detailsSlice.reducer;
