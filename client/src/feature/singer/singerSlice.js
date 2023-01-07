import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  singerId: null
}
const context = 'singer'
export const getInfoSinger = createAsyncThunk(`${context}/getInfoSinger`, async (name, thunkApi) => {
  try {
    const response = await http(
      { url: '/artist', method: 'GET', params: { name: name } },
      {
        signal: thunkApi.signal
      }
    )
    return response.data.data
  } catch (error) {
    if (error.name === 'AxiosError') {
      return thunkApi.rejectWithValue(error.response.data)
    }
    throw error
  }
})

const singerSlice = createSlice({
  name: 'singer',
  initialState,
  reducers: {}
})

export const {} = singerSlice.actions
const singerReducer = singerSlice.reducer

export default singerReducer
