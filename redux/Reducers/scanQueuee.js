import { createSlice } from "@reduxjs/toolkit";
import { isValidScanData } from "../../Utils/checkScanData";
import { syncTicketQueuee } from "../ApiCalls/ticketQueuee";

const scanQueueeSlice = createSlice({
  name: "scanQueuee",
  initialState: {
    q: [],
    count: 0,
    message: null,
    loading: null,
  },
  reducers: {
    enqueuee: (state, action) => {
      const isValid = isValidScanData(action.payload);

      if (isValid !== false) {
        if (state.q.find((x) => x["id"] == isValid["id"])) {
          state.message = "Already in Queuee";
        } else {
          state.q = [...state.q, isValid];
          state.count = state.count + 1;
          state.message = "Added";
        }
      } else {
        state.message = "Invalid or Expired";
      }
    },
    removeItem: (state, action) => {
      if (state.q.find((x) => x["id"] == action.payload)) {
        state.q = state.q.filter((x) => x["id"] !== action.payload);
        state.count = state.count - 1;
      }
    },
    removeEverything: (state, action) => {
      state.q = [];
      state.count = 0;
      state.message = "";
    },

    clearMessage: (state, action) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // Sync Queuee
    builder.addCase(syncTicketQueuee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(syncTicketQueuee.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.user;
    });
    builder.addCase(syncTicketQueuee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { enqueuee, removeItem, removeEverything, clearMessage } =
  scanQueueeSlice.actions;

export default scanQueueeSlice.reducer;
