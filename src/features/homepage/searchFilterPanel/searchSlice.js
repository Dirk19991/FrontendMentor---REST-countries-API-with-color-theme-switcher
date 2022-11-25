import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
    region: '',
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setRegion(state, action) {
      state.region = action.payload;
    },
  },
});

export const { setSearch, setRegion } = searchSlice.actions;

export default searchSlice.reducer;
