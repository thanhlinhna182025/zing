import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPlaylist } from '~/feature/album/albumSlice'
import { addMusicId, getInfoMusic, playingToggle } from '~/feature/music/musicSlice'
import useSingleSong from '~/hooks/useSingleSong'
import { PlayerCenter, PlayerLeft, PlayerRight } from './components'
const Player = ({ url }) => {
  const [musicInfo, setMusicInfo] = useState({})
  const [albumInfo, setAlbumInfo] = useState({})
  const [isPrepeat, setIsPrepeat] = useState(false)
  const [duration, setDuration] = useState(0)
  const [songLength, SetSongLength] = useState(0)
  const [nextActive, setNextActive] = useState(true)
  const [prevActive, setPrevActive] = useState(true)
  const [process, setProcess] = useState(0)
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const audioRef = useRef()
  const dispatch = useDispatch()
  const flag = useSingleSong()
  const albumId = useSelector((state) => state.album.albumId)
  const isPlaying = useSelector((state) => state.music.isPlaying)
  const musicId = useSelector((state) => state.music.musicId)
  const currentIndex = albumInfo?.song?.items.findIndex((el) => el.encodeId === musicInfo.encodeId)
  const time = (duration * 1000) / 100 / 10
  const playAudio = async () => {
    await audioRef.current.play()
  }
  const pauseAudio = () => {
    audioRef.current.pause()
  }
  const togglePlaying = () => {
    dispatch(playingToggle(!isPlaying))
  }
  const handleNextSong = () => {
    if (!flag) {
      if (currentIndex < songLength - 1) {
        dispatch(addMusicId(albumInfo?.song?.items[currentIndex + 1].encodeId))
      }
    }
  }
  const handlePrevSong = () => {
    if (!flag) {
      if (currentIndex > 0) {
        dispatch(addMusicId(albumInfo?.song?.items[currentIndex - 1].encodeId))
      }
    }
  }
  const handleShuffle = () => {
    let randomIndex = Math.round(Math.random() * songLength - 1)
    if (randomIndex > 0) {
      dispatch(addMusicId(albumInfo?.song?.items[randomIndex].encodeId))
    } else {
      dispatch(addMusicId(albumInfo?.song?.items[0].encodeId))
    }
  }
  const handleIsPrepeat = () => {
    setIsPrepeat(!isPrepeat)
  }

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
      if (process < 100) {
        timerId = setInterval(() => {
          setProcess((pre) => pre + 0.1)
        }, time)
      }
    }
    return () => {
      clearInterval(timerId)
    }
  }, [isPlaying, musicInfo, process])
  useEffect(() => {
    setProcess(0)
  }, [musicInfo])
  useEffect(() => {
    if (isPlaying) {
      playAudio()
    } else {
      pauseAudio()
    }
  }, [url, isPlaying])
  useEffect(() => {
    if (!flag) {
      if (currentIndex === 0) {
        setPrevActive(false)
        setNextActive(true)
      } else if (currentIndex === songLength - 1) {
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
  }, [musicInfo])
  useEffect(() => {
    dispatch(getDetailPlaylist(albumId))
      .unwrap()
      .then((result) => {
        setAlbumInfo(result)
        SetSongLength(result?.song?.items.length)
      })
      .catch((err) => console.log(err))
  }, [albumId])
  useEffect(() => {
    const handleEnded = () => {
      if (isPrepeat) {
        console.log('isPrepeat', isPrepeat)
        playAudio()
        setProcess(0)
        setMinute(0)
        setSecond(0)
      } else {
        handleNextSong()
      }
    }
    audioRef.current.addEventListener('ended', handleEnded)
    return () => {
      audioRef.current.removeEventListener('ended', () => {
        console.log('remove ended')
      })
    }
  }, [isPrepeat])
  useEffect(() => {
    setSecond(0)
    setMinute(0)
    setProcess(0)
  }, [url])

  useEffect(() => {
    const flag = duration === minute * 60 + second ? true : false
    let timerId
    if (!flag && isPlaying) {
      timerId = setInterval(() => {
        if (second < 60) {
          setSecond((pre) => pre + 1)
        } else if (second === 60 && minute < 60) {
          setMinute((pre) => pre + 1)
          setSecond(0)
        }
      }, 1000)
    }

    return () => {
      clearInterval(timerId)
    }
  }, [isPlaying, duration, minute, second])
  return (
    <div className='border-t-solid fixed bottom-0 z-10 flex h-[90px] w-full items-center justify-between border-t border-t-[#414141] bg-main-500 px-5'>
      <audio src={url} ref={audioRef}></audio>
      <PlayerLeft musicInfo={musicInfo} />
      <PlayerCenter
        isPlaying={isPlaying}
        togglePlaying={togglePlaying}
        musicInfo={musicInfo}
        handleNextSong={handleNextSong}
        handlePrevSong={handlePrevSong}
        handleShuffle={handleShuffle}
        isPrepeat={isPrepeat}
        handleIsPrepeat={handleIsPrepeat}
        duration={duration}
        nextActive={nextActive}
        prevActive={prevActive}
        process={process}
        minute={minute}
        second={second}
      />
      <PlayerRight />
    </div>
  )
}
export default Player
