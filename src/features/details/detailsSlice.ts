import { InfoProps } from './Info';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { searchByCountry } from '../../config';

export interface Country extends Omit<InfoProps, 'navigate'> {
  flags: {
    png: string;
  };
}

interface Details {
  country: null | Country;
}

const initialState: Details = {
  country: null,
};

export const setCountry = createAsyncThunk(
  'details/setCountry',
  async (name: string | undefined) => {
    const country = await axios.get(searchByCountry(name));

    return country.data[0];
  }
);

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
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
