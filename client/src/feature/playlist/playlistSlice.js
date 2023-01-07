import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  playlistId: null,
  playlist: []
}
const context = 'playlist'
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
const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addPlaylistId: (state, action) => {
      state.playlistId = action.payload
    },
    addPlaylist: (state, action) => {
      state.playlist = action.payload
    }
  }
})

export const { addPlaylistId, addPlaylist } = playlistSlice.actions
const playlistReducer = playlistSlice.reducer

export default playlistReducer
