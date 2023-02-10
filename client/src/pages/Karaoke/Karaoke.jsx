import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAlbumPlaylist,
  karaokeIsPlayingToggle,
  setKaraokeIsPlaying,
  setKaraokeMain,
  setKaraokMode
} from '~/feature/app/appSlice'
import { getInfoMusic, getLyricMusic } from '~/feature/music/musicSlice'
import useColors from '~/hooks/useColors'
import KaraokeList from '~/pages/Karaoke/KaraokeList'
import KaraokeLyric from '~/pages/Karaoke/KaraokeLyric'
import KaraokeSong from '~/pages/Karaoke/KaraokeSong'
import KaraokeHeader from './KaraokeHeader'
import PlayerKaraoke from './PlayerKaraoke'
const Karaoke = ({ url }) => {
  const { ColorBg200 } = useColors()
  //global State
  const KaraokeMain = useSelector((state) => state.app.karaokeMain)
  const karaokMode = useSelector((state) => state.app.karaokMode)
  const karaokeIsPlaying = useSelector((state) => state.app.karaokeIsPlaying)
  const albumId = useSelector((state) => state.album.albumId)
  const musicId = useSelector((state) => state.music.musicId)
  const dispatch = useDispatch()

  const karaokeAudioRef = useRef()
  //Local State
  const [playlists, setPlaylists] = useState([])
  const [headerData, setHeaderData] = useState({})
  const [songData, setSongData] = useState({})
  const [thumbnailM, setThumbnailM] = useState({})
  const [audioTime, setAudioTime] = useState(0)
  const [audioDuration, setAudioDuration] = useState(0)

  const handleKaraokeMain = (mode) => {
    dispatch(setKaraokeMain(mode))
  }
  useEffect(() => {
    if (albumId) {
      dispatch(getAlbumPlaylist(albumId))
        .unwrap()
        .then((result) => {
          setPlaylists(result?.song?.items)
          setHeaderData({ title: result?.title, textType: result?.textType })
        })
        .catch((err) => console.log(err))
    }
  }, [albumId])
  useEffect(() => {
    if (musicId) {
      dispatch(getInfoMusic(musicId))
        .unwrap()
        .then((result) => {
          setThumbnailM(result?.thumbnailM)
        })
        .catch((err) => console.log(err))
    }
  }, [musicId, karaokeIsPlaying])
  useEffect(() => {
    setAudioDuration(karaokeAudioRef?.current.duration)
  }, [karaokMode, karaokeIsPlaying])
  useEffect(() => {
    if (musicId) {
      dispatch(getLyricMusic(musicId))
        .unwrap()
        .then((result) => {
          setSongData(result)
        })
        .catch((err) => console.log(err))
    }
  }, [musicId])

  useEffect(() => {
    if (karaokeIsPlaying) {
      karaokeAudioRef.current.play()
    } else {
      karaokeAudioRef.current.pause()
    }
  }, [karaokeIsPlaying])

  useEffect(() => {
    if (karaokeAudioRef.current) {
      karaokeAudioRef.current.addEventListener('timeupdate', () => {
        setAudioTime(karaokeAudioRef.current.currentTime)
      })
      karaokeAudioRef.current.addEventListener('ended', () => {
        dispatch(setKaraokeIsPlaying(false))
      })
    }
    return () => {
      if (karaokeAudioRef.current) {
        karaokeAudioRef.current.removeEventListener('timeupdate', () => {
          console.log(karaokeAudioRef.current.currentTime)
        })
      }
    }
  }, [karaokeIsPlaying])

  useEffect(() => {
    if (karaokeAudioRef.current) {
      karaokeAudioRef.current.addEventListener('ended', () => {
        dispatch(setKaraokeIsPlaying(false))
      })
    }
    return () => {
      if (karaokeAudioRef.current) {
        karaokeAudioRef.current.removeEventListener('ended', () => {
          console.log(karaokeAudioRef.current.currentTime)
        })
      }
    }
  }, [karaokeIsPlaying])

  const handleAudioTime = (time) => {
    karaokeAudioRef.current.currentTime = time
  }
  const handleKaraokeIsPlaying = () => {
    dispatch(karaokeIsPlayingToggle())
  }
  const handleCloseKaraoke = () => {
    dispatch(setKaraokeIsPlaying(false))
    dispatch(setKaraokMode(false))
  }

  return (
    <div
      className={`${
        karaokMode ? 'animate-slide-top' : 'animate-slide-bottom'
      } ${ColorBg200} fixed right-0 left-0 bottom-0 top-0 z-[999999] translate-y-[100%] `}
    >
      <KaraokeHeader
        headerData={headerData}
        KaraokeMain={KaraokeMain}
        handleKaraokeMain={handleKaraokeMain}
        handleCloseKaraoke={handleCloseKaraoke}
        karaokeIsPlaying={karaokeIsPlaying}
      />
      {KaraokeMain === 1 && <KaraokeList playlists={playlists} />}
      {KaraokeMain === 2 && (
        <KaraokeSong
          songData={songData}
          thumbnailM={thumbnailM}
          audioTime={audioTime}
          karaokeIsPlaying={karaokeIsPlaying}
        />
      )}
      {KaraokeMain === 3 && <KaraokeLyric songData={songData} audioTime={audioTime} />}
      <PlayerKaraoke
        karaokeIsPlaying={karaokeIsPlaying}
        ref={karaokeAudioRef}
        url={url}
        audioTime={audioTime}
        handleAudioTime={handleAudioTime}
        audioDuration={audioDuration}
        handleKaraokeIsPlaying={handleKaraokeIsPlaying}
      />
    </div>
  )
}
export default Karaoke
