import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addAlbumSongs, setCurrentIndexSong } from '~/feature/album/albumSlice'
import {
  isPlayingToggle,
  isRepeatToggle,
  isShuffleToggle,
  setIsPlaying,
  setIsRepeat,
  setIsShuffle,
  setVolume
} from '~/feature/app/appSlice'
import { addMusicId, getInfoMusic } from '~/feature/music/musicSlice'
import useColor from '~/hooks/useColor'
import useSingleSong from '~/hooks/useSingleSong'
import { PlayerCenter, PlayerLeft, PlayerRight } from './components'
const Player = ({ url }) => {
  //Global state
  const albumSongs = useSelector((state) => state.album.albumSongs)
  const curentIndexSong = useSelector((state) => state.album.curentIndexSong)
  const musicId = useSelector((state) => state.music.musicId)
  const isPlaying = useSelector((state) => state.app.isPlaying)
  const isPlayAll = useSelector((state) => state.app.isPlayAll)
  const isShuffle = useSelector((state) => state.app.isShuffle)
  const isRepeat = useSelector((state) => state.app.isRepeat)
  const volume = useSelector((state) => state.app.volume)

  //Local state
  const [musicInfo, setMusicInfo] = useState({})
  const [duration, setDuration] = useState(0)
  const [nextActive, setNextActive] = useState(false)
  const [prevActive, setPrevActive] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [songsLength, setSongsLength] = useState(0)

  const [bgColor, bg100Color, bg200Color, bg300Color] = useColor()

  const params = useParams()
  const audioRef = useRef()
  const processbarRef = useRef()
  const volumeBarRef = useRef()

  const dispatch = useDispatch()
  const isSingle = useSingleSong()

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
      if (curentIndexSong < songsLength - 1) {
        dispatch(addMusicId(albumSongs?.items[curentIndexSong + 1].encodeId))
        dispatch(setCurrentIndexSong(curentIndexSong + 1))
      }
    }
  }
  /** Check music is single or album. if false => play prev song */
  const handlePrevSong = () => {
    if (!isSingle) {
      if (curentIndexSong > 0) {
        dispatch(addMusicId(albumSongs?.items[curentIndexSong - 1].encodeId))
        dispatch(setCurrentIndexSong(curentIndexSong - 1))
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
    setSongsLength(albumSongs?.items?.length)
  }, [albumSongs, musicId])
  useEffect(() => {
    if (!params.id || !params.title) {
      dispatch(addAlbumSongs([]))
    }
  }, [params])

  useEffect(() => {
    dispatch(getInfoMusic(musicId))
      .unwrap()
      .then((result) => {
        setMusicInfo(result)
        setDuration(result.duration)
      })
      .catch((error) => console.log(error))
  }, [musicId])

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
      if (curentIndexSong === 0) {
        setPrevActive(false)
        setNextActive(true)
      } else if (curentIndexSong === songsLength - 1) {
        setPrevActive(true)
        setNextActive(false)
      } else if (curentIndexSong > 0 && curentIndexSong < songsLength - 1) {
        setPrevActive(true)
        setNextActive(true)
      }
    } else {
      setPrevActive(false)
      setNextActive(false)
    }
  }, [nextActive, prevActive, curentIndexSong, isSingle, musicId])

  useEffect(() => {
    const handleEnded = () => {
      const hadleIsPlayAll = () => {
        if (!isSingle) {
          if (curentIndexSong < songsLength - 1) {
            dispatch(addMusicId(albumSongs?.items[curentIndexSong + 1].encodeId))
            dispatch(setCurrentIndexSong(curentIndexSong + 1))
          }
        }
      }
      const handleIsShuffle = () => {
        let randomIndex = Math.round(Math.random() * songsLength - 1)
        dispatch(addMusicId(albumSongs?.items[randomIndex]?.encodeId))
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
  }, [isRepeat, isPlayAll, isShuffle, curentIndexSong])

  return (
    <div
      className={`border-t-solid fixed bottom-0 z-10 flex h-player-height w-full items-center justify-between border-t border-t-[#414141] px-5 ${bg200Color}`}
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
