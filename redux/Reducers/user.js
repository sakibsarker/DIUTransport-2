import { createSlice } from "@reduxjs/toolkit";
import {
  loginEmployee,
  employeeProfile,
  studentProfile,
} from "../ApiCalls/user";
import { getAuth, signOut } from "firebase/auth";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: null,
    userType: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.loading = false;
      state.token = null;
      state.user = null;
      state.userType = null;
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("You loggeed out");
        })
        .catch((error) => {
          state.error = error;
        });
    },
    googleLogin: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.userType = "student";
      state.error = action.payload.error;
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
export const { logout, googleLogin, clearErrors } = usersSlice.actions;

export default usersSlice.reducer;
