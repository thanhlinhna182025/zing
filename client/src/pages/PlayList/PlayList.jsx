import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '~/components/Loading'
import { getAlbumPlaylist, isPlayingToggle, setIsPlayAll, setIsShuffle } from '~/feature/app/appSlice'
import { addPlaylistId } from '../../feature/playlist/playlistSlice'
import { Artists, PlayListSong, PlayListThumnail } from './components'
const Album = () => {
  const [albumResource, setAlbumResource] = useState(null)

  const isPlaying = useSelector((state) => state.app.isPlaying)
  const isPlayAll = useSelector((state) => state.app.isPlayAll)
  const isShuffle = useSelector((state) => state.app.isShuffle)
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    dispatch(getAlbumPlaylist(id))
      .unwrap()
      .then((result) => {
        setAlbumResource(result)
        setLoading(false)
        dispatch(addPlaylistId(id))
      })
      .catch((err) => console.log(err))
  }, [id])
  return (
    <div>
      {loading ? (
        <Loading fixed width='w-20' height='h-20' />
      ) : (
        <div className='mb-player-height'>
          {albumResource && (
            <div className='flex flex-col pt-10'>
              <div className='flex flex-col gap-x-[30px] lg:flex-row'>
                <PlayListThumnail
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
                <PlayListSong song={albumResource?.song} description={albumResource?.description} />
              </div>
              <Artists artists={albumResource?.artists} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default Album
