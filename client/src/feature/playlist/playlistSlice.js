import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  playlistId: null,
  playlistSongs: [],
  curentIndexPlaylistSong: 0
}
const context = 'playlist'
export const getPlaylist = createAsyncThunk(`${context}/getPlaylist`, async (id, thunkApi) => {
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
    addPlaylistSongs: (state, action) => {
      state.playlistSongs = action.payload
    },
    setCurrentIndexPlaylistSong: (state, action) => {
      state.curentIndexPlaylistSong = action.payload
    }
  }
})

export const { addPlaylistId, addPlaylistSongs, setCurrentIndexPlaylistSong } = playlistSlice.actions
const playlistReducer = playlistSlice.reducer

export default playlistReducer
