import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import authReducer from '~/feature/auth/authSlice'
import musicReducer from '~/feature/music/musicSlice'
import albumReducer from '../feature/album/albumSlice'
import appReducer from '../feature/app/appSlice'
import playlistReducer from '../feature/playlist/playlistSlice'
import singerReducer from '../feature/singer/singerSlice'
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

export const store = configureStore({
  reducer: {
    app: appReducer,
    music: persistReducer(musicConfig, musicReducer),
    album: persistReducer(albumConfig, albumReducer),
    playlist: persistReducer(playlistConfig, playlistReducer),
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
