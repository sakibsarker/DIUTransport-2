import { createSlice } from "@reduxjs/toolkit"
import { fetchUsers } from "../ApiCalls/user"


const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false
    })
  }
})

export default usersSlice.reducer