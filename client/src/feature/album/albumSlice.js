import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  albumId: null,
  albumSongs: [],
  curentIndexAlBumSong: 0
}
const context = 'album'

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    addAlbumId: (state, action) => {
      state.albumId = action.payload
    },
    addAlbumSongs: (state, action) => {
      state.albumSongs = action.payload
    },
    setCurrentIndexAlbumSong: (state, action) => {
      state.curentIndexAlBumSong = action.payload
    }
  }
})

export const { addAlbumId, addAlbumSongs, setCurrentIndexAlbumSong } = albumSlice.actions
const albumReducer = albumSlice.reducer

export default albumReducer
