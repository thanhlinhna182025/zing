import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  banner: []
}
const context = 'app'

export const getBanner = createAsyncThunk(`${context}/getBanner`, async (_, thunkApi) => {
  try {
    const response = await http.get('/home', {
      signal: thunkApi.signal
    })
    console.log(response)
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message)
    }
    const filtered = response.data.data.items.find((item) => item.sectionType === 'banner')
    return filtered.items
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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBanner.fulfilled, (state, action) => {
      state.banner = action.payload
    })
  }
})

export const {} = appSlice.actions
const appReducer = appSlice.reducer

export default appReducer
