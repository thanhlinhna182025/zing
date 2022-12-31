import { MoreIcon, PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { releaseDay } from '~/utils/hepper'

const SongCard = ({ item }) => {
  return (
    <div className='group relative flex h-[80px] items-center gap-x-2 rounded-md px-2 hover:bg-main-400'>
      <div className=' relative w-[60px]'>
        <img className='block w-full object-cover' src={item.thumbnail} />
        <PlayFullFillIcon className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] cursor-pointer text-white group-hover:inline-block hover:opacity-90 ' />
      </div>
      <div className=' flex-1'>
        <h5 className='w-[80%] truncate text-xs font-bold capitalize text-white'>{item.title}</h5>
        <NameArtist artists={item.artists} />
        <span className='text-sm font-semibold text-gray'>{releaseDay(item.releaseDate)}</span>
      </div>
      <div className='absolute top-1/2 right-0 hidden translate-x-[-50%] translate-y-[-50%] rounded-full p-2 group-hover:inline-block hover:bg-main-200'>
        <MoreIcon className='cursor-pointer  text-white ' width='16px' height='16px' />
      </div>
    </div>
  )
}
export default SongCard
