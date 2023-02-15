import { useDispatch } from 'react-redux'
import { PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { addErrorMusicId, addMusicId } from '~/feature/music/musicSlice'
import useColors from '~/hooks/useColors'
import { secondToMinuteAndSecond } from '~/utils/hepper'

const SingerSongItem = ({ item }) => {
  const { ColorHoverBg200, ColorText500 } = useColors()
  const dispatch = useDispatch()

  const handleSong = (item) => {
    if (item.streamingStatus === 1) {
      dispatch(addMusicId(item.encodeId))
    } else if (item.streamingStatus === 2) {
      dispatch(addErrorMusicId(item.encodeId))
    }
  }

  return (
    <div
      className={`group flex flex-col rounded-sm hover:shadow md:rounded-md hover:md:shadow-md hover:lg:shadow-lg ${ColorHoverBg200}`}
    >
      <div className='hover:bg-main-300 flex h-[60px] items-center justify-between rounded-[4px] p-[10px]'>
        <div className='flex items-center gap-[10px] '>
          <div
            className='relative h-10 w-10 flex-shrink-0 cursor-pointer overflow-hidden rounded-[4px]'
            onClick={() => handleSong(item)}
          >
            <img alt='thumbnailM' src={item.thumbnailM} className='block w-full object-cover' />
            <PlayFullFillIcon
              className={`${ColorText500} absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] group-hover:inline-block`}
              width='16px'
              height='16px'
            />
          </div>
          <div className='flex flex-grow flex-col justify-start'>
            <span className='mb-[2px] max-w-[300px] translate-y-[-2px] truncate text-left text-sm font-medium leading-[17px] text-light-mode dark:text-dark-mode md:max-w-[350px]'>
              {item?.title}
            </span>
            <div className='flex items-center'>
              <NameArtist artists={item.artists} />
            </div>
          </div>
        </div>
        <span className='inline-block px-[6px] text-right text-xs font-semibold capitalize text-light-mode dark:text-dark-mode'>
          {secondToMinuteAndSecond(parseInt(item.duration))}
        </span>
      </div>
    </div>
  )
}
export default SingerSongItem
