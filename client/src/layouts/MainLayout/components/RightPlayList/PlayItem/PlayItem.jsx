import { useDispatch, useSelector } from 'react-redux'
import MusicBar from '~/assets/images/Z23N.gif'
import { HeartIcon, PlayFillIcon } from '~/components/Icons'
import { MoreIcon } from '~/components/Icons/Icons'
import NameArtist from '~/components/NameArtist'
import { setOmitPage } from '~/feature/app/appSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import { setCurrentIndexPlaylistSong } from '~/feature/playlist/playlistSlice'
const PlayItem = ({ item, index }) => {
  const dispatch = useDispatch()
  const playlistSongs = useSelector((state) => state.playlist.playlistSongs)
  const musicId = useSelector((state) => state.music.musicId)

  const handleSong = () => {
    dispatch(addMusicId(item.encodeId))
    if (playlistSongs.length > 0) {
      dispatch(setCurrentIndexPlaylistSong(index))
      dispatch(setOmitPage('playlist'))
    }
  }
  return (
    <div
      onClick={handleSong}
      className={`group flex items-center rounded-md p-[6px] hover:bg-hover-light-mode dark:hover:bg-hover-dark-mode`}
    >
      <div className='mr-2 flex flex-grow items-center'>
        <div className='relative mr-2 h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-md'>
          <img src={item?.thumbnail} />
          <PlayFillIcon
            className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] text-white group-hover:inline-block'
            width='16px'
            height='16px'
          />
          {item.encodeId === musicId && (
            <img src={MusicBar} alt='music_bar' className='absolute top-1 left-1 right-1 bottom-1' />
          )}
        </div>
        <div className='flex w-[200px] flex-col justify-center'>
          <h5 className='mb-1 truncate text-xs font-bold text-light-mode dark:text-dark-mode'>{item?.title}</h5>
          <NameArtist artists={item?.artists} />
        </div>
      </div>
      <div className='mr-3 flex flex-grow gap-x-2'>
        <HeartIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
        <MoreIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
      </div>
    </div>
  )
}
export default PlayItem
