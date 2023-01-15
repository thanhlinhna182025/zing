import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  error: null,
  isPlaying: false,
  isPlayAll: false,
  isRepeat: false,
  isShuffle: false,
  karaokMode: false,
  karaokeMain: 3
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
  reducers: {
    addError: (state, action) => {
      state.error = action.payload
    },
    isPlayingToggle: (state) => {
      state.isPlaying = !state.isPlaying
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },

    isPlayAllToggle: (state) => {
      state.isPlayAll = !state.isPlayAll
    },
    setIsPlayAll: (state) => {
      state.isPlayAll = true
      state.isRepeat = false
      state.isShuffle = false
    },
    isRepeatToggle: (state) => {
      state.isRepeat = !state.isRepeat
    },
    setIsRepeat: (state, action) => {
      state.isRepeat = true
      state.isShuffle = false
      state.isPlayAll = false
    },
    isShuffleToggle: (state) => {
      state.isShuffle = !state.isShuffle
    },
    setIsShuffle: (state, action) => {
      state.isShuffle = true
      state.isPlayAll = false
      state.isRepeat = false
    },
    setKaraokMode: (state, action) => {
      state.karaokMode = action.payload
    },
    setKaraokeMain: (state, action) => {
      state.karaokeMain = action.payload
    }
  }
})

export const {
  addError,
  setIsPlaying,
  isPlayingToggle,
  setIsPlayAll,
  isPlayAllToggle,
  setIsRepeat,
  isRepeatToggle,
  setIsShuffle,
  isShuffleToggle,
  setKaraokMode,
  setKaraokeMain
} = appSlice.actions
const appReducer = appSlice.reducer

export default appReducer
