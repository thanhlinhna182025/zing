import { useDispatch } from 'react-redux'
import { PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { addMusicId } from '~/feature/music/musicSlice'
import { secondToMinuteAndSecond } from '~/utils/hepper'
const SingerSongItem = ({ item }) => {
  const dispath = useDispatch()

  const handleAddMusicId = () => {
    dispath(addMusicId(item.encodeId))
  }
  return (
    <div className='group flex flex-col hover:bg-hover-light-mode dark:hover:bg-hover-dark-mode'>
      <div className='hover:bg-main-300 flex h-[60px] items-center justify-between rounded-[4px] border-b-[1px] border-solid border-[#231B2E] p-[10px]'>
        <div className='flex  items-center gap-[10px] '>
          <div className='relative h-10 w-10 cursor-pointer overflow-hidden rounded-[4px]' onClick={handleAddMusicId}>
            <img src={item.thumbnailM} className='block w-full object-cover' />
            <PlayFullFillIcon
              className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%]  text-white group-hover:inline-block'
              width='16px'
              height='16px'
            />
          </div>
          <div className='flex flex-col justify-start'>
            <span className='mb-[2px] translate-y-[-2px] text-left text-sm font-medium leading-[17px] text-light-mode dark:text-dark-mode'>
              {item?.title}
            </span>
            <div className='flex items-center'>
              <NameArtist artists={item.artists} />
            </div>
          </div>
        </div>
        <span className='px-[6px] text-right text-xs font-semibold capitalize text-light-mode dark:text-dark-mode'>
          {secondToMinuteAndSecond(parseInt(item.duration))}
        </span>
      </div>
    </div>
  )
}
export default SingerSongItem
