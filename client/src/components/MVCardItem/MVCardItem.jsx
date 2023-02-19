import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PlayVideoIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { setMvId } from '~/feature/app/appSlice'
import useColors from '~/hooks/useColors'
const MVCardItem = ({ item }) => {
  const { ColorText500, ColorBg400 } = useColors()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLink = (item) => {
    dispatch(setMvId(item.encodeId))
    const link = item.link.split('.')[0]
    navigate(link)
  }
  return (
    <div className='border-b-none flex flex-col overflow-hidden rounded-md shadow md:shadow-md lg:shadow-lg'>
      <div className=' group relative flex-shrink-0 overflow-hidden hover:opacity-80 '>
        <img
          alt='thumbnail'
          src={item.thumbnail}
          className='block w-full object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1]'
        />
        <div
          onClick={() => handleLink(item)}
          className='absolute top-0 left-0 flex h-full w-full items-center justify-center gap-x-3 hover:bg-[rgba(0,0,0,0.2)]'
        >
          <PlayVideoIcon width='45px' height='45px' className={`${ColorText500} cursor-pointer`} />
        </div>
      </div>
      <div className={`${ColorBg400} flex flex-grow p-[10px]`}>
        <div className='mr-2 w-10 overflow-hidden '>
          <img alt='thumbnailM' src={item?.artist?.thumbnail} className='block w-full rounded-full object-cover' />
        </div>
        <div className='w-full'>
          <h5 className='mb-[1px] truncate text-sm font-bold text-light-mode dark:text-dark-mode'>{item.title}</h5>
          <NameArtist artists={item.artists} />
        </div>
      </div>
    </div>
  )
}
export default MVCardItem
