import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '~/utils/http'
const initialState = {
  error: null,
  isPlaying: false,
  isPlayAll: false,
  isRepeat: false,
  isShuffle: false,
  karaokMode: false,
  karaokeMain: 3,
  karaokeIsPlaying: false,
  typeRelease: 'all',
  color: 'A',
  darkMode: false,
  volume: 50,
  rightMode: false,
  omitPage: '',
  loading: false,
  sidebarMode: false,
  displayMode: false
}
const context = 'app'

export const getHome = createAsyncThunk(`${context}/getHome`, async (_, thunkApi) => {
  try {
    const response = await http.get('/home', {
      signal: thunkApi.signal
    })
    return response.data.data
  } catch (error) {
    if (error.name === 'AxiosError') {
      return thunkApi.rejectWithValue(error.response.data)
    }
    throw error
  }
})
export const getAlbumPlaylist = createAsyncThunk(`${context}/getAlbumPlaylist`, async (id, thunkApi) => {
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
export const getSearch = createAsyncThunk(`${context}/getSearch`, async (keyword, thunkApi) => {
  try {
    const response = await http(
      { url: '/search', method: 'GET', params: { keyword: keyword } },
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

export const getChartHome = createAsyncThunk(`${context}/getChartHome`, async (_, thunkApi) => {
  try {
    const response = await http.get('/charthome', {
      signal: thunkApi.signal
    })
    return response.data.data
  } catch (error) {
    if (error.name === 'AxiosError') {
      return thunkApi.rejectWithValue(error.response.data)
    }
    throw error
  }
})
export const getTop100 = createAsyncThunk(`${context}/getTop100`, async (_, thunkApi) => {
  try {
    const response = await http.get('/top100', {
      signal: thunkApi.signal
    })
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
    },
    karaokeIsPlayingToggle: (state) => {
      state.karaokeIsPlaying = !state.karaokeIsPlaying
    },
    setKaraokeIsPlaying: (state, action) => {
      state.karaokeIsPlaying = action.payload
    },
    setTypeRelease: (state, action) => {
      state.typeRelease = action.payload
    },
    setColor: (state, action) => {
      state.color = action.payload
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload
    },
    setVolume: (state, action) => {
      state.volume = action.payload
    },
    toggleRightMode: (state) => {
      state.rightMode = !state.rightMode
    },
    setRightMode: (state, action) => {
      state.rightMode = action.rightMode
    },
    setOmitPage: (state, action) => {
      state.omitPage = action.payload
    },
    toggleSideBarMode: (state) => {
      state.sidebarMode = !state.sidebarMode
    },
    setDisplayMode: (state, action) => {
      state.displayMode = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) => action.type.endsWith('getHome/pending') || action.type.endsWith('getHome/reject'),
        (state) => {
          state.loading = true
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('getHome/fulfilled'),
        (state) => {
          state.loading = false
        }
      )
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
  setKaraokeMain,
  karaokeIsPlayingToggle,
  setKaraokeIsPlaying,
  setTypeRelease,
  setColor,
  setDarkMode,
  setVolume,
  toggleRightMode,
  setRightMode,
  setOmitPage,
  toggleSideBarMode,
  setDisplayMode
} = appSlice.actions
const appReducer = appSlice.reducer

export default appReducer
