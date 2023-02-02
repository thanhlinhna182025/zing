import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { isPlayingToggle, setIsPlayAll, setIsShuffle } from '~/feature/app/appSlice'
import { addPlaylistSongs, getPlaylist } from '~/feature/playlist/playlistSlice'
import { Artists, PlayListSong, PlayListThumnail } from './components'

const PlayList = () => {
  const [playlistResource, setPlaylistResource] = useState(null)

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
    dispatch(getPlaylist(id))
      .unwrap()
      .then((result) => {
        setPlaylistResource(result)
        dispatch(addPlaylistSongs(result?.song?.items))
      })
      .catch((err) => console.log(err))
  }, [id])
  return (
    <div className='mb-player-height'>
      {playlistResource && (
        <div className='flex flex-col pt-10'>
          <div className='flex gap-x-[30px]'>
            <PlayListThumnail
              artists={playlistResource?.artists}
              thumbnailM={playlistResource?.thumbnailM}
              releaseDate={playlistResource?.releaseDate}
              title={playlistResource?.title}
              like={playlistResource?.like}
              handleToggle={handleToggle}
              handlePlayAll={handlePlayAll}
              handleShuffle={handleShuffle}
              isPlaying={isPlaying}
              isPlayAll={isPlayAll}
              isShuffle={isShuffle}
            />
            <PlayListSong song={playlistResource?.song} description={playlistResource?.description} />
          </div>
          <Artists artists={playlistResource?.artists} />
        </div>
      )}
    </div>
  )
}
export default PlayList
