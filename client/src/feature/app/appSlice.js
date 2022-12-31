import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  acb: ''
}
const context = 'app'

export const getHome = createAsyncThunk(`${context}/getHome`, async (_, thunkApi) => {
  try {
    const response = await http.get('/home', {
      signal: thunkApi.signal
    })
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message)
    }
    return response.data.data
  } catch (error) {
    if (error.name === 'AxiosError') {
      return thunkApi.rejectWithValue(error.response.data)
    }
    throw error
  }
})

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {}
})

export const {} = appSlice.actions
const appReducer = appSlice.reducer

export default appReducer
