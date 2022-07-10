import { createSlice } from "@reduxjs/toolkit";
import { fetchBuses } from "../ApiCalls/bus";

const busSlice = createSlice({
  name: "bus",
  initialState: {
    buses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBuses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBuses.fulfilled, (state, action) => {
      state.buses = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBuses.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default busSlice.reducer;
