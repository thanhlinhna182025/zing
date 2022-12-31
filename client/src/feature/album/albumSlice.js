import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  albumId: null
}
const context = 'album'
export const getDetailPlaylist = createAsyncThunk(`${context}/getDetailPlaylist`, async (id, thunkApi) => {
  try {
    const response = await http(
      { url: '/detailplaylist', method: 'GET', params: { id: id } },
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
const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    addAlbumId: (state, action) => {
      state.albumId = action.payload
    }
  }
})

export const { addAlbumId } = albumSlice.actions
const albumReducer = albumSlice.reducer

export default albumReducer
