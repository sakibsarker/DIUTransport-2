import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await fetch('https://reqres.in/api/users?delay=1');
  return (await response.json()).data;
});