import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  musicId: null,
  musicLink: null,
  isPlaying: false
}
const context = 'music'
export const getInfoMusic = createAsyncThunk(`${context}/getInfoMusic`, async (id, thunkApi) => {
  try {
    const response = await http(
      { url: '/infosong', method: 'GET', params: { id: id } },
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
export const getLinkMusic = createAsyncThunk(`${context}/getLinkMusic`, async (id, thunkApi) => {
  try {
    const response = await http(
      { url: '/song', method: 'GET', params: { id: id } },
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
const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    addMusicId: (state, action) => {
      state.musicId = action.payload
      state.isPlaying = true
    },

    playingToggle: (state, action) => {
      state.isPlaying = action.payload
    }
  }
})

export const { addMusicId, playingToggle } = musicSlice.actions
const musicReducer = musicSlice.reducer

export default musicReducer
