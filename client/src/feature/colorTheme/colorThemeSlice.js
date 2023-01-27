import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  colorTheme: null
}

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    setColorTheme: (state, action) => {
      state.colorTheme = action.payload
    }
  }
})

export const { setColorTheme } = colorThemeSlice.actions
const colorThemeReducer = colorThemeSlice.reducer

export default colorThemeReducer
