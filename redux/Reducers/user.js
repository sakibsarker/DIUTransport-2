import { createSlice } from "@reduxjs/toolkit";
import {
  loginEmployee,
  employeeProfile,
  studentProfile,
} from "../ApiCalls/user";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: null,
    group: null,
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      state.group = null;
    },
    Login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.group = action.payload.group;
    },
    clearErrors: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userType = "employee";
    });
    builder.addCase(loginEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Load Profile
    builder.addCase(employeeProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(employeeProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(employeeProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Load Profile Student
    builder.addCase(studentProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(studentProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(studentProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { logout, Login, clearErrors } = usersSlice.actions;

export default usersSlice.reducer;
