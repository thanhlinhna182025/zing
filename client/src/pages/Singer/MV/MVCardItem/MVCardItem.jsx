import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PlayVideoIcon } from '~/components/Icons'
import { addAlbumId } from '~/feature/album/albumSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import { addPlaylistId } from '~/feature/playlist/playlistSlice'
const MVCardItem = ({ item }) => {
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
    <div className='flex flex-col overflow-hidden rounded-md bg-gradient-to-r from-[#574643] to-[#312939]'>
      <div className=' group relative   flex-shrink-0 hover:opacity-80 '>
        <img
          src={item.thumbnail}
          className='w-full object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1]'
        />
        <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center gap-x-3 hover:bg-[rgba(0,0,0,0.2)]'>
          <PlayVideoIcon width='45px' height='45px' className='cursor-pointer text-light-mode dark:text-dark-mode' />
        </div>
      </div>
      <div className='flex p-[10px]'>
        <div className='mr-2 w-10 overflow-hidden '>
          <img src={item?.artist?.thumbnail} className='w-full rounded-full object-cover' />
        </div>
        <div>
          <h5 className='mb-[1px] text-sm font-bold text-light-mode dark:text-dark-mode'>{item.title}</h5>
          <h4 className='text-xs font-bold text-light-mode dark:text-dark-mode'>{item.artistsNames}</h4>
        </div>
      </div>
    </div>
  )
}
export default MVCardItem
