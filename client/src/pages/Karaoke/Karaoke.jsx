import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useColor from '~/hooks/useColor'
import PlayerKaraoke from './PlayerKaraoke'

import { getDetailPlaylist } from '~/feature/album/albumSlice'
import { karaokeIsPlayingToggle, setKaraokeIsPlaying, setKaraokeMain, setKaraokMode } from '~/feature/app/appSlice'
import { getInfoMusic, getLyricMusic } from '~/feature/music/musicSlice'
import KaraokeList from '~/pages/Karaoke/KaraokeList'
import KaraokeLyric from '~/pages/Karaoke/KaraokeLyric'
import KaraokeSong from '~/pages/Karaoke/KaraokeSong'
import KaraokeHeader from './KaraokeHeader'
const Karaoke = ({ url }) => {
  const [bgColor, bg100Color, bg200Color, bg300Color] = useColor()
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
    dispatch(getDetailPlaylist(albumId))
      .unwrap()
      .then((result) => {
        setPlaylists(result?.song?.items)
        setHeaderData({ title: result?.title, textType: result?.textType })
      })
      .catch((err) => console.log(err))
  }, [albumId])
  useEffect(() => {
    dispatch(getInfoMusic(musicId))
      .unwrap()
      .then((result) => {
        setThumbnailM(result.thumbnailM)
      })
      .catch((err) => console.log(err))
  }, [musicId, karaokeIsPlaying])
  useEffect(() => {
    setAudioDuration(karaokeAudioRef?.current.duration)
  }, [karaokMode, karaokeIsPlaying])
  useEffect(() => {
    dispatch(getLyricMusic(musicId))
      .unwrap()
      .then((result) => {
        setSongData(result)
      })
      .catch((err) => console.log(err))
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
      className={`'animate-slide-top' ${bg200Color} fixed top-0 left-0 right-0 bottom-0 z-[999999] animate-slide-top  transition-all`}
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
