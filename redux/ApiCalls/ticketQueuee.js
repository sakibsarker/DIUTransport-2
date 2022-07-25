export const syncTicketQueuee = createAsyncThunk(
  "tickets/sync",
  async ({}, { rejectWithValue }) => {
    try {
      // Do something
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
