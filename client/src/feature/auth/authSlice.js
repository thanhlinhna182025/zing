import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: ''
}
const context = 'auth'
export const login = createAsyncThunk(`${context}/login`, async () => {})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state, action) => {
      state.name = action.payload
    }
  }
})

export const { loginStart } = authSlice.actions
const authReducer = authSlice.reducer

export default authReducer
