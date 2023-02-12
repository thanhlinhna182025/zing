import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAlbumPlaylist,
  isPlayingToggle,
  isRepeatToggle,
  isShuffleToggle,
  setContentError,
  setDataSongs,
  setError,
  setIsPlayAll,
  setIsPlaying,
  setIsRepeat,
  setIsShuffle,
  setVolume
} from '~/feature/app/appSlice'
import { addErrorMusicId, addMusicId, getInfoSong, getLinkMusic } from '~/feature/music/musicSlice'
import useColors from '~/hooks/useColors'
import useSingleSong from '~/hooks/useSingleSong'
import { PlayerCenter, PlayerLeft, PlayerRight } from './components'
const Player = () => {
  const { ColorBg400 } = useColors()
  const audioRef = useRef()
  const processbarRef = useRef()
  const volumeBarRef = useRef()
  const isSingle = useSingleSong()
  const dispatch = useDispatch()
  //Global state
  const dataSongs = useSelector((state) => state.app.dataSongs)
  const curentIndexAlBumSong = useSelector((state) => state.album.curentIndexAlBumSong)
  const curentIndexPlaylistSong = useSelector((state) => state.playlist.curentIndexPlaylistSong)
  const musicId = useSelector((state) => state.music.musicId)
  const albumId = useSelector((state) => state.album.albumId)
  const playlistId = useSelector((state) => state.playlist.playlistId)
  const isPlaying = useSelector((state) => state.app.isPlaying)
  const isPlayAll = useSelector((state) => state.app.isPlayAll)
  const isShuffle = useSelector((state) => state.app.isShuffle)
  const isRepeat = useSelector((state) => state.app.isRepeat)
  const volume = useSelector((state) => state.app.volume)
  const omitPage = useSelector((state) => state.app.omitPage)
  //Local state
  const [musicInfo, setMusicInfo] = useState({})
  const [duration, setDuration] = useState(0)
  const [nextActive, setNextActive] = useState(false)
  const [prevActive, setPrevActive] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [indexSongs, setIndexSongs] = useState(0)
  const [url, setUrl] = useState(null)
  /** Play music */
  const audioPlay = () => {
    var isReady =
      audioRef.current.currentTime > 0 &&
      !audioRef.current.paused &&
      !audioRef.current.ended &&
      audioRef.current.readyState > audioRef.current.HAVE_CURRENT_DATA
    if (!isReady) {
      audioRef.current.play()
    }
  }

  /** Pause music */
  const audioPause = () => {
    audioRef.current.pause()
  }

  /** Toggle playing */
  const togglePlaying = () => {
    dispatch(isPlayingToggle())
  }
  const setShuffle = () => {
    dispatch(setIsShuffle())
  }
  const togleIsShuffle = () => {
    dispatch(isShuffleToggle())
  }
  const setRepeat = () => {
    dispatch(setIsRepeat())
  }
  const toggleIsRepeat = () => {
    dispatch(isRepeatToggle())
  }
  /** Check music is single or album. if false => play next song */

  const handleNextSong = () => {
    if (!isSingle) {
      if (indexSongs < dataSongs.length - 1 && dataSongs[indexSongs + 1].streamingStatus === 1) {
        dispatch(addMusicId(dataSongs[indexSongs + 1].encodeId))
        setIndexSongs(indexSongs + 1)
      } else if (indexSongs < dataSongs.length - 1 && dataSongs[indexSongs + 1].streamingStatus === 2) {
        dispatch(addErrorMusicId(dataSongs[indexSongs + 1].encodeId))
      }
    }
  }

  /** Check music is single or album. if false => play prev song */

  const handlePrevSong = () => {
    if (!isSingle) {
      if (indexSongs > 0 && dataSongs[indexSongs - 1].streamingStatus === 1) {
        dispatch(addMusicId(dataSongs[indexSongs - 1].encodeId))
        setIndexSongs(indexSongs - 1)
      } else if (indexSongs > 0 && dataSongs[indexSongs - 1].streamingStatus === 2) {
        dispatch(addErrorMusicId(dataSongs[indexSongs - 1].encodeId))
      }
    }
  }

  const handleVolume = (e) => {
    dispatch(setVolume(e.target.value))
    audioRef.current.volume = Number(e.target.value) / 100
  }
  const handleMuteVolume = () => {
    audioRef.current.volume = 0
    dispatch(setVolume(0))
  }
  const handleActiveVolume = () => {
    audioRef.current.volume = 0.5
    dispatch(setVolume(50))
  }
  const handleCurrentTime = (e) => {
    audioRef.current.currentTime = Number(e.target.value)
    setCurrentTime(e.target.value)
  }

  useEffect(() => {
    if (musicId) {
      dispatch(getLinkMusic(musicId))
        .unwrap()
        .then((result) => {
          if (result.err) {
            dispatch(setError(true))
            dispatch(setContentError(result))
            return false
          }
          setUrl(result['128'])
          setCurrentTime(0)
          return true
        })
        .then((flag) => {
          if (flag) {
            dispatch(getInfoSong(musicId))
              .then((result) => {
                if (result) {
                  setMusicInfo(result.payload)
                  setDuration(result.payload.duration)
                }
              })
              .catch((error) => console.log(error))
          }
        })
        .catch((error) => console.log(error))
    }
    return () => {
      setUrl(null)
    }
  }, [musicId])

  useEffect(() => {
    if (omitPage === 'album') {
      dispatch(setIsPlayAll())
      setIndexSongs(0)
      dispatch(getAlbumPlaylist(albumId))
        .unwrap()
        .then((result) => {
          if (result) {
            dispatch(setDataSongs(result.song.items))
          }
        })
        .catch((err) => console.log(err))
    } else if (omitPage === 'playlist') {
      dispatch(setIsPlayAll())
      setIndexSongs(0)
      dispatch(getAlbumPlaylist(playlistId))
        .unwrap()
        .then((result) => {
          if (result) {
            dispatch(setDataSongs(result.song.items))
          }
        })
        .catch((err) => console.log(err))
    }
  }, [omitPage, albumId, playlistId])
  useEffect(() => {
    if (omitPage === 'album') {
      setIndexSongs(curentIndexAlBumSong)
    } else if (omitPage === 'playlist') {
      setIndexSongs(curentIndexPlaylistSong)
    }
  }, [curentIndexAlBumSong, curentIndexPlaylistSong])

  useEffect(() => {
    setCurrentTime(0)
  }, [url])

  useEffect(() => {
    let timerId
    if (isPlaying) {
      timerId = setInterval(() => {
        setCurrentTime(Number(audioRef.current.currentTime.toFixed()))
      }, 1000)
    }
    return () => clearInterval(timerId)
  }, [url, isPlaying])

  useEffect(() => {
    if (isPlaying) {
      audioPlay()
    } else {
      audioPause()
    }
  }, [url, isPlaying])
  useEffect(() => {
    if (!isSingle) {
      setPrevActive(true)
      setNextActive(true)
      if (indexSongs === 0) {
        setPrevActive(false)
        setNextActive(true)
      } else if (indexSongs === dataSongs.length - 1) {
        setPrevActive(true)
        setNextActive(false)
      } else {
        setPrevActive(true)
        setNextActive(true)
      }
    } else {
      setPrevActive(false)
      setNextActive(false)
    }
  }, [indexSongs, isSingle, musicId])

  useEffect(() => {
    const handleEnded = () => {
      const hadleIsPlayAll = () => {
        if (!isSingle) {
          if (indexSongs < dataSongs.length - 1) {
            dispatch(addMusicId(dataSongs[indexSongs + 1].encodeId))
            setIndexSongs(indexSongs + 1)
          }
        }
      }
      const handleIsShuffle = () => {
        let randomIndex = Math.round(Math.random() * dataSongs.length - 1)
        dispatch(addMusicId(dataSongs[randomIndex]?.encodeId))
      }
      const handleIsRepeat = () => {
        audioPlay()
      }
      if (isPlayAll) {
        hadleIsPlayAll()
      } else if (isShuffle) {
        handleIsShuffle()
      } else if (isRepeat) {
        handleIsRepeat()
      } else {
        dispatch(setIsPlaying(false))
      }
    }
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded)
    }
    return () => {
      if (audioRef.current) audioRef.current.removeEventListener('ended', handleEnded)
    }
  }, [isRepeat, isPlayAll, isShuffle, indexSongs])

  return (
    <div
      className={`${ColorBg400} border-t-solid fixed bottom-0 right-[4px] left-0 z-30 flex h-player-height-sm w-full items-center justify-center border-t border-t-[#414141]  px-5 sm:justify-between md:h-player-height `}
    >
      <audio src={url} ref={audioRef}></audio>
      <PlayerLeft musicInfo={musicInfo} />
      <PlayerCenter
        musicInfo={musicInfo}
        handleNextSong={handleNextSong}
        handlePrevSong={handlePrevSong}
        duration={duration}
        nextActive={nextActive}
        prevActive={prevActive}
        ref={processbarRef}
        currentTime={currentTime}
        handleCurrentTime={handleCurrentTime}
        isPlaying={isPlaying}
        isShuffle={isShuffle}
        isRepeat={isRepeat}
        setRepeat={setRepeat}
        toggleIsRepeat={toggleIsRepeat}
        togglePlaying={togglePlaying}
        setShuffle={setShuffle}
        togleIsShuffle={togleIsShuffle}
        isSingle={isSingle}
      />
      <PlayerRight
        ref={volumeBarRef}
        volume={volume}
        handleActiveVolume={handleActiveVolume}
        handleMuteVolume={handleMuteVolume}
        handleVolume={handleVolume}
      />
    </div>
  )
}
export default Player
