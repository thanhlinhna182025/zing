import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import AlbumSongItem from '~/components/AlbumSongItem'
import { SortIcon } from '~/components/Icons/Icons'
import { secondToMinute } from '~/utils/hepper'

const AlbumListSong = ({ song, description }) => {
  const [selectAll, setSelectAll] = useState(true)
  const musicId = useSelector((state) => state.music.musicId)

  return (
    <div className=' w-full'>
      <div className='mb-[10px] leading-[21px]'>
        <span className='text-sm font-normal  leading-[1.5] text-gray'>Lời tựa </span>
        <span className='text-sm font-normal leading-[1.5] text-white'>{description}</span>
      </div>
      <div className='flex h-[46px] items-center border-b-[1px] border-solid border-[#231B2E] p-[10px]'>
        <div className='flex w-full items-center'>
          <div className='flex w-1/2 items-center'>
            <div className='mr-3 rounded-[4px] border-[1px] border-solid border-[#7E7A85] p-[1px]'>
              <SortIcon className='text-gray' width='10px' height='10px' />
            </div>
            <span className='text-xs font-semibold text-gray'>BÀI HÁT</span>
          </div>
          <span className='ml-[10px] flex-1 text-xs font-semibold text-gray'>ALBUM</span>
          <span className='text-xs font-semibold text-gray'>THỜI GIAN</span>
        </div>
      </div>
      <div className='flex max-h-[400px] flex-col scrollbar'>
        {song?.items?.map((item) => (
          <AlbumSongItem item={item} key={item.encodeId} selectAll={selectAll} />
        ))}
      </div>
      <div className='py-[6px]'>
        <span className='font-[Inter] text-xs font-semibold tracking-[-0.1px] text-gray'>{song?.total} bài hát</span>
        <b className='px-2 align-top text-[20px] font-black leading-3 text-gray'>.</b>
        <span className='font-[Inter] text-xs font-semibold tracking-[-0.1px] text-gray'>
          {secondToMinute(parseInt(song?.totalDuration))} phút
        </span>
      </div>
    </div>
  )
}
export default memo(AlbumListSong)
