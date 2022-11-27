import { createSlice } from '@reduxjs/toolkit';

interface Search {
  search: string;
  region: string;
}

const initialState: Search = {
  search: '',
  region: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
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
