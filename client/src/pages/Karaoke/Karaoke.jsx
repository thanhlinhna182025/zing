import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import KaraokeList from '~/components/KaraokeList'
import KaraokeLyric from '~/components/KaraokeLyric'
import KaraokeSong from '~/components/KaraokeSong'
import PlayerKaraoke from '~/components/PlayerKaraoke'
import SecondHeader from '~/components/SecondHeader'
import { getDetailPlaylist } from '~/feature/album/albumSlice'
import { setKaraokeMain } from '~/feature/app/appSlice'
import { getInfoMusic, getLyricMusic } from '../../feature/music/musicSlice'
const Karaoke = () => {
  const KaraokeMain = useSelector((state) => state.app.karaokeMain)
  const karaokMode = useSelector((state) => state.app.karaokMode)
  const isPlaying = useSelector((state) => state.app.isPlaying)
  const albumId = useSelector((state) => state.album.albumId)
  const musicId = useSelector((state) => state.music.musicId)
  const dispatch = useDispatch()

  const [karaokeSongs, setKaraokeSongs] = useState([])
  const [headerData, setHeaderData] = useState({})
  const [songData, setSongData] = useState({})
  const [thumbnailM, setThumbnailM] = useState({})

  const handleKaraokeMain = (mode) => {
    dispatch(setKaraokeMain(mode))
  }
  useEffect(() => {
    dispatch(getDetailPlaylist(albumId))
      .unwrap()
      .then((result) => {
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
  }, [musicId])
  useEffect(() => {
    dispatch(getLyricMusic(musicId))
      .unwrap()
      .then((result) => {
        setSongData(result)
      })
      .catch((err) => console.log(err))
  }, [musicId])

  return (
    <div
      className={`'animate-slide-top' fixed top-0 left-0 right-0 bottom-0 z-[999999] animate-slide-top bg-secondary-200  transition-all`}
    >
      <SecondHeader headerData={headerData} KaraokeMain={KaraokeMain} handleKaraokeMain={handleKaraokeMain} />
      {KaraokeMain === 1 && <KaraokeList />}
      {KaraokeMain === 2 && <KaraokeSong />}
      {KaraokeMain === 3 && <KaraokeLyric songData={songData} thumbnailM={thumbnailM} />}
      <PlayerKaraoke isPlaying={isPlaying} />
    </div>
  )
}
export default Karaoke
