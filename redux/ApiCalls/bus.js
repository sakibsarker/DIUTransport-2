import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBuses = createAsyncThunk("bus/fetchBuses", async () => {
  const response = await fetch(
    "https://boiling-escarpment-76670.herokuapp.com/api/v1/bus"
  );
  return await response.json();
});

export const fetchBusCurrentLocation = createAsyncThunk(
  "bus/fetchBusCurrentLocation",
  async (busId) => {
    const response = await fetch(
      `https://boiling-escarpment-76670.herokuapp.com/api/v1/bus/currentLocation/${busId}`
    );
    return await response.json();
  }
);
