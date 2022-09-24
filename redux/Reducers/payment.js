import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    busId: null,
    routeId: null,
    userId: null,
    method: "One Card",
    scheduleId: "NaN",
    routeName: null,
    busName: null,
    ticketId: null,
    ticketName: null,
    price: null,
  },
  reducers: {
    cancel: (state, action) => {
      (state.busId = null),
        (state.routeId = null),
        (state.userId = null),
        (state.method = null),
        (state.scheduleId = null);
      state.routeName = null;
      state.busName = null;
      state.ticketId = null;
      state.ticketName = null;
      state.price = null;
    },
    paid: (state, action) => {
      (state.busId = null),
        (state.routeId = null),
        (state.userId = null),
        (state.method = null),
        (state.scheduleId = null);
    },

    setBus: (state, action) => {
      state.busId = action.payload.busId;
      state.busName = action.payload.busName;
    },
    setMethod: (state, action) => {
      state.busId = action.payload.PayMethod;
    },
    setRoute: (state, action) => {
      state.routeId = action.payload.routeId;
      state.routeName = action.payload.routeName;
    },
    setUserId: (state, action) => {
      state.userId = action.payload.userId;
    },
    setSchedule: (state, action) => {
      state.scheduleId = action.payload.scheduleId;
    },
    setTicketId: (state, action) => {
      state.ticketId = action.payload.ticketId;
      state.ticketName = action.payload.ticketName;
      state.price = action.payload.price;
    },
  },
});
export const {
  setBus,
  setMethod,
  setRoute,
  setUserId,
  setSchedule,
  setTicketId,
} = paymentSlice.actions;

export default paymentSlice.reducer;
