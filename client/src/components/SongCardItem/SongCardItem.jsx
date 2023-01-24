import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MoreIcon, PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { addAlbumId } from '~/feature/album/albumSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import { addPlaylistId } from '~/feature/playlist/playlistSlice'
import { releaseDay } from '~/utils/hepper'
const SongCardItem = ({ item }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRedirect = (item) => {
    if (item.type === 1 || item.link.startsWith('/bai-hat')) {
      dispatch(addMusicId(item.encodeId))
    } else if (item.type === 4 || item.link.startsWith('/album')) {
      const link = item?.link.split('.')[0]
      dispatch(addAlbumId(link.split('/')[3]))
      navigate(link)
    } else if (item.type === 5 || item.link.startsWith('/playlist')) {
      const link = item?.link.split('.')[0]
      dispatch(addPlaylistId(link.split('/')[3]))
      navigate(link)
    } else {
      console.log('Khong thuoc truong hop tren')
    }
  }

  return (
    <div className='group relative flex h-[80px] items-center gap-x-2 rounded-md px-2 hover:bg-main-400'>
      <div className=' relative w-[60px]' onClick={() => handleRedirect(item)}>
        <img className='block w-full object-cover' src={item.thumbnail} />
        <PlayFullFillIcon className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] cursor-pointer text-white group-hover:inline-block hover:opacity-90 ' />
      </div>
      <div className=' flex-1'>
        <h5 className='w-[80%] truncate text-xs font-bold capitalize text-white'>{item.title}</h5>
        <NameArtist artists={item.artists} />
        <span className='text-sm font-semibold text-white'>{releaseDay(item.releaseDate)}</span>
      </div>
      <div className='absolute top-1/2 right-0 hidden translate-x-[-50%] translate-y-[-50%] rounded-full p-2 group-hover:inline-block hover:bg-main-200'>
        <MoreIcon className='cursor-pointer  text-white ' width='16px' height='16px' />
      </div>
    </div>
  )
}
export default SongCardItem
