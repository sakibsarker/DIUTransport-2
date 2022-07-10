import { createSlice } from "@reduxjs/toolkit";
import { fetchBusCurrentLocation, fetchBuses } from "../ApiCalls/bus";

const busSlice = createSlice({
  name: "bus",
  initialState: {
    buses: [],
    loading: false,
    error: null,
    currentBusLocation: {},
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
    builder.addCase(fetchBuses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchBusCurrentLocation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBusCurrentLocation.fulfilled, (state, action) => {
      state.loading = false;
      state.currentBusLocation = action.payload;
    });
    builder.addCase(fetchBusCurrentLocation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default busSlice.reducer;
