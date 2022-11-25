import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ALL_COUNTRIES } from '../../config';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await axios.get(ALL_COUNTRIES);
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    filteredCountries: [],
  },
  reducers: {
    filterCountries(state, action) {
      state.filteredCountries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.filteredCountries = action.payload;
    });
  },
});

export const { filterCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
