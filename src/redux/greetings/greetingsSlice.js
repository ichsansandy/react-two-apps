import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL_GREETINGS = 'http://127.0.0.1:3002/greetings/random';

export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandomGreeting', async () => {
  try {
    const response = await fetch(URL_GREETINGS, {
      headers: {
        method: 'GET',
        'Content-Type': 'application/json',
      },
    });
    const greeting = await response.json();
    return greeting;
  } catch (error) {
    return error.message;
  }
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    status: 'idle',
    value: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.status = 'completed';
        const data = action.payload.message;
        state.value = data;
        state.error = '';
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.message;
      });
  },
});

export default greetingsSlice.reducer;
