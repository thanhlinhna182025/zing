import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addAlbumSongs, getDetailPlaylist } from '../../feature/album/albumSlice'
import { isPlayingToggle, setIsPlayAll, setIsShuffle } from '../../feature/app/appSlice'
import { AlbumListSong, AlbumThumnail, Artists } from './components'

const Album = () => {
  const [albumResource, setAlbumResource] = useState(null)

  const isPlaying = useSelector((state) => state.app.isPlaying)
  const isPlayAll = useSelector((state) => state.app.isPlayAll)
  const isShuffle = useSelector((state) => state.app.isShuffle)

  const { id } = useParams()
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(isPlayingToggle())
  }
  const handlePlayAll = () => {
    dispatch(setIsPlayAll())
  }
  const handleShuffle = () => {
    dispatch(setIsShuffle())
  }
  useEffect(() => {
    dispatch(getDetailPlaylist(id))
      .unwrap()
      .then((result) => {
        setAlbumResource(result)
        dispatch(addAlbumSongs(result?.song))
      })
      .catch((err) => console.log(err))
  }, [id])
  return (
    <div className='mb-player-height'>
      {albumResource && (
        <div className='flex flex-col pt-10'>
          <div className='flex gap-x-[30px]'>
            <AlbumThumnail
              artists={albumResource?.artists}
              thumbnailM={albumResource?.thumbnailM}
              releaseDate={albumResource?.releaseDate}
              title={albumResource?.title}
              like={albumResource?.like}
              handleToggle={handleToggle}
              handlePlayAll={handlePlayAll}
              handleShuffle={handleShuffle}
              isPlaying={isPlaying}
              isPlayAll={isPlayAll}
              isShuffle={isShuffle}
            />
            <AlbumListSong song={albumResource?.song} description={albumResource?.description} />
          </div>
          <Artists artists={albumResource?.artists} />
        </div>
      )}
    </div>
  )
}
export default Album
