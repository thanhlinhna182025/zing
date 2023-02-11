import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  musicId: null,
  errorMusicId: null,
  musicLink: null,
  isPlaying: false,
  musicLoading: false,
  urlLoading: false
}
const context = 'music'
export const getInfoSong = createAsyncThunk(`${context}/getInfoSong`, async (id, thunkApi) => {
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
export const getInfoCurrentSong = createAsyncThunk(`${context}/getInfoCurrentSong`, async (id, thunkApi) => {
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
export const getLyricMusic = createAsyncThunk(`${context}/getLyricMusic`, async (id, thunkApi) => {
  try {
    const response = await http(
      { url: '/lyric', method: 'GET', params: { id: id } },
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
    addErrorMusicId: (state, action) => {
      state.errorMusicId = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) => action.type.endsWith('getInfoSong/pending') || action.type.endsWith('getInfoSong/reject'),
        (state) => {
          state.musicLoading = true
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('getInfoSong/fulfilled'),
        (state) => {
          state.musicLoading = false
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('getLinkMusic/pending') || action.type.endsWith('getLinkMusic/reject'),
        (state) => {
          state.urlLoading = true
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('getLinkMusic/fulfilled'),
        (state) => {
          state.urlLoading = false
        }
      )
  }
})

export const { addMusicId, addErrorMusicId } = musicSlice.actions
const musicReducer = musicSlice.reducer

export default musicReducer
