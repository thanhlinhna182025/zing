import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { MusicNodeIcon, PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { addMusicId } from '~/feature/music/musicSlice'
import { secondToMinuteAndSecond } from '~/utils/hepper'
const AlbumSong = ({ item }) => {
  const [toggleIcon, setToggleIcon] = useState(false)
  const dispath = useDispatch()

  const handleAddMusicId = () => {
    dispath(addMusicId(item.encodeId))
  }
  return (
    <div className='group flex flex-col' onMouseOver={() => setToggleIcon(true)}>
      <div className='flex h-[60px] items-center rounded-[4px] border-b-[1px] border-solid border-[#231B2E] p-[10px] hover:bg-main-300'>
        <div className='flex w-1/2 items-center gap-[10px] overflow-hidden gap-x-2'>
          {toggleIcon ? (
            <label className='relative flex w-fit items-center justify-center'>
              <input
                type='checkbox'
                value=''
                className='after:border-r-solid after:border-b-solid peer cursor-pointer appearance-none rounded-[3px] border-[1px] border-solid border-[#ccc] p-[7px] after:absolute after:left-[5px] after:top-[2px] after:hidden after:h-[10px] after:w-[6px] after:rotate-45 after:border-r-[3px] after:border-b-[2px] after:border-r-white after:border-b-white after:bg-transparent after:content-[""] checked:bg-main-500 checked:after:block '
              />
            </label>
          ) : (
            <MusicNodeIcon className=' text-white ' width='16px' height='16px' />
          )}

          <div
            className='relative h-[40px] w-[40px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[4px]'
            onClick={handleAddMusicId}
          >
            <img src={item.thumbnailM} className='block w-full object-cover' />
            <PlayFullFillIcon
              className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] text-white group-hover:inline-block'
              width='16px'
              height='16px'
            />
          </div>
          <div className='flex flex-col justify-start'>
            <h5 className='mb-[2px] max-w-[250px] translate-y-[-2px] truncate text-left text-sm font-medium leading-[17px] text-white'>
              {item?.title}
            </h5>
            <div className='flex items-center'>
              <NameArtist artists={item.artists} />
            </div>
          </div>
        </div>
        <div className='w-1/2 flex justify-between'>
          <Link to="#" className='ml-[10px] inline-block max-w-[250px] truncate flex-1 text-xs font-semibold capitalize leading-[17px] text-gray hover:text-[#9D4BE0] hover:underline hover:decoration-[#9D4BE0] hover:decoration-solid'>
            {item.title}
          </Link>
          <span className='px-[6px] text-right text-xs font-semibold capitalize text-gray'>
            {secondToMinuteAndSecond(parseInt(item.duration))}
          </span>
        </div>
      </div>
    </div>
  )
}
export default AlbumSong
