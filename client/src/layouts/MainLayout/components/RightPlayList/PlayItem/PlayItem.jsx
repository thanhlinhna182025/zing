import { useDispatch } from 'react-redux'
import { HeartIcon, PlayFillIcon } from '~/components/Icons'
import { MoreIcon } from '~/components/Icons/Icons'
import NameArtist from '~/components/NameArtist'
import { setCurrentIndexSong } from '~/feature/album/albumSlice'
import { addMusicId } from '~/feature/music/musicSlice'
const PlayItem = ({ item, index }) => {
  const dispatch = useDispatch()
  const handleSong = () => {
    dispatch(addMusicId(item.encodeId))
    dispatch(setCurrentIndexSong(index))
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
