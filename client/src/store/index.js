import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import albumReducer from '~/feature/album/albumSlice'
import appReducer from '~/feature/app/appSlice'
import authReducer from '~/feature/auth/authSlice'
import colorThemeReducer from '~/feature/colorTheme/colorThemeSlice'
import musicReducer from '~/feature/music/musicSlice'
import playlistReducer from '~/feature/playlist/playlistSlice'
import singerReducer from '~/feature/singer/singerSlice'
const persistConfig = {
  storage,
  stateReconciler: autoMergeLevel2
}
const musicConfig = {
  ...persistConfig,
  key: 'music',
  whitelist: ['musicId']
}
const albumConfig = {
  ...persistConfig,
  key: 'album',
  whitelist: ['albumId']
}
const playlistConfig = {
  ...persistConfig,
  key: 'playlist',
  whitelist: ['playlistId']
}
const appConfig = {
  ...persistConfig,
  key: 'app',
  whitelist: ['color', 'darkMode', 'volume']
}
const colorThemeConfig = {
  ...persistConfig,
  key: 'colorTheme',
  whitelist: ['colorTheme']
}

export const store = configureStore({
  reducer: {
    app: persistReducer(appConfig, appReducer),
    music: persistReducer(musicConfig, musicReducer),
    album: persistReducer(albumConfig, albumReducer),
    playlist: persistReducer(playlistConfig, playlistReducer),
    colorTheme: persistReducer(colorThemeConfig, colorThemeReducer),
    singer: singerReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
export const persistor = persistStore(store)
