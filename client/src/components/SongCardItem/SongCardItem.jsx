import { MoreIcon, PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import useRedirect from '~/hooks/useRedirect'
import { releaseDay } from '~/utils/hepper'
import useColor from '~/hooks/useColor'
const SongCardItem = ({ item }) => {
  const [bgColor, bg100Color, bg200Color, bg300Color] = useColor()
  const handleRedirect = useRedirect()
  return (
    <div
      className={`group relative flex h-[80px] items-center gap-x-2 rounded-md px-2 hover:bg-hover-light-mode dark:hover:bg-hover-dark-mode`}
    >
      <div className=' relative w-[60px]' onClick={() => handleRedirect(item)}>
        <img className='block w-full object-cover' src={item.thumbnail} />
        <PlayFullFillIcon className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] cursor-pointer  text-white group-hover:inline-block hover:opacity-90 ' />
      </div>
      <div className=' flex-1'>
        <h5 className='w-[80%] truncate text-xs font-bold capitalize text-light-mode dark:text-dark-mode'>
          {item.title}
        </h5>
        <NameArtist artists={item.artists} />
        <span className='text-sm font-semibold text-light-mode dark:text-dark-mode'>
          {releaseDay(item.releaseDate)}
        </span>
      </div>
      <div className='hover:bg-main-200 absolute top-1/2 right-0 hidden translate-x-[-50%] translate-y-[-50%] rounded-full p-2 group-hover:inline-block'>
        <MoreIcon className='cursor-pointer  text-light-mode dark:text-dark-mode ' width='16px' height='16px' />
      </div>
    </div>
  )
}
export default SongCardItem
