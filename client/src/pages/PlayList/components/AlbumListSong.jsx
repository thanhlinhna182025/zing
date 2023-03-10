import { memo } from 'react'
import { useSelector } from 'react-redux'
import AlbumSongItem from '~/components/AlbumSongItem'
import { SortIcon } from '~/components/Icons/Icons'
import SongCartItemSkeleton from '~/components/Skeleton/SongCartItemSkeleton'
import { secondToHourMinute } from '~/utils/hepper'
const AlbumListSong = ({ song, description }) => {
  const loading = useSelector((state) => state.app.loading)
  return (
    <div className=' w-full'>
      <div className='mb-[10px] leading-[21px]'>
        <span className='text-sm font-normal  leading-[1.5] text-light-mode dark:text-dark-mode'>Lời tựa </span>
        <span className='text-sm font-normal leading-[1.5] text-light-mode dark:text-dark-mode'>{description}</span>
      </div>
      <div className='flex h-[46px] items-center border-b-[1px] border-solid border-[#231B2E] md:p-1 lg:p-[10px]'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center lg:w-1/2'>
            <div className='mr-3 rounded-[4px] border-[1px] border-solid border-[#7E7A85] p-[1px]'>
              <SortIcon className='text-light-mode dark:text-dark-mode' width='10px' height='10px' />
            </div>
            <span className='text-xs font-semibold text-light-mode dark:text-dark-mode'>BÀI HÁT</span>
          </div>
          <span className='ml-[10px] hidden text-xs font-semibold text-light-mode dark:text-dark-mode md:inline-block'>
            ALBUM
          </span>
          <span className='hidden text-xs font-semibold text-light-mode dark:text-dark-mode xl:inline-block'>
            THỜI GIAN
          </span>
        </div>
      </div>
      <div className='flex max-h-[400px] flex-col scrollbar'>
        {loading
          ? [1, 2, 3, 4, 5, 6, 7].map((item) => <SongCartItemSkeleton key={item} />)
          : song?.items?.map((item, index) => <AlbumSongItem item={item} key={item.encodeId} index={index} />)}
      </div>
      <div className='py-[6px]'>
        <span className='font-[Inter] text-xs font-semibold tracking-[-0.1px] text-light-mode dark:text-dark-mode'>
          {song?.total} bài hát
        </span>
        <b className='px-2 align-top text-[20px] font-black leading-3 text-light-mode dark:text-dark-mode'>.</b>
        <span className='font-[Inter] text-xs font-semibold tracking-[-0.1px] text-light-mode dark:text-dark-mode'>
          {secondToHourMinute(parseInt(song?.totalDuration))}
        </span>
      </div>
    </div>
  )
}
export default memo(AlbumListSong)
