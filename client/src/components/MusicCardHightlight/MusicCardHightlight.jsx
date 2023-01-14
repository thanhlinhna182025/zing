import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HeartIcon, MoreIcon, PlayVideoIcon } from '~/components/Icons'
import Title from '~/components/Title'
import { addAlbumId } from '~/feature/album/albumSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import { addPlaylistId } from '~/feature/playlist/playlistSlice'

const MusicCardHightlight = ({ item }) => {
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
    <div>
      {item && (
        <div className='mr-7 flex flex-col'>
          <div className='mb-5 '>
            <Title>Mới Phát Hành</Title>
          </div>
          <div
            className='flex w-[336px]  rounded-md bg-gradient-to-r from-[#574643] to-[#312939] p-4'
            onClick={() => handleRedirect(item)}
          >
            <div className=' group relative w-[151px] flex-shrink-0 overflow-hidden rounded-md'>
              <img
                src={item?.thumbnail || item?.thumnailM}
                className='w-full object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1]'
              />
              <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center gap-x-3 hover:bg-[rgba(0,0,0,0.2)]'>
                <div className='cursor-pointer rounded-full p-[5px] group-hover:bg-main-200'>
                  <HeartIcon width='20px' height='20px' className='text-white' />
                </div>
                <PlayVideoIcon width='45px' height='45px' className='cursor-pointer text-white' />
                <div className='rounded-full p-[5px] hover:bg-main-200'>
                  <MoreIcon width='16px' height='16px' className='cursor-pointer text-white' />
                </div>
              </div>
            </div>
            <div className='my-[6px] ml-4 flex flex-col'>
              <span className='mb-[14px] text-xs font-bold text-gray'>{item?.textType}</span>
              <h5 className='mb-[1px] text-sm font-bold text-white'>{item?.title}</h5>
              <h4 className='mb-[14px] text-xs font-bold text-gray'>{item?.artistsNames}</h4>
              <span className='text-xs font-bold text-gray '>{item?.releaseDate}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default MusicCardHightlight
