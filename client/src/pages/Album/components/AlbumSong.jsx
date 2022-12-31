import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { MusicNodeIcon, StarIcon } from '~/components/Icons/Icons'
import { addMusicId } from '~/feature/music/musicSlice'
import { secondToMinuteAndSecond } from '~/utils/hepper'

const AlbumSong = ({ item, selectAll }) => {
  const [toggleIcon, setToggleIcon] = useState(false)
  const dispath = useDispatch()

  const handleAddMusicId = () => {
    dispath(addMusicId(item.encodeId))
  }
  return (
    <div className='group flex flex-col' onMouseOver={() => setToggleIcon(true)} onClick={handleAddMusicId}>
      <div className='flex h-[60px] items-center rounded-[4px] border-b-[1px] border-solid border-[#231B2E] p-[10px] hover:bg-main-300'>
        <div className='flex w-1/2 items-center gap-[10px] '>
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

          <div className='h-10 w-10 overflow-hidden rounded-[4px]'>
            <img src={item.thumbnailM} className='block w-full object-cover' />
          </div>
          <div className='flex flex-col justify-start'>
            <span className='mb-[2px] translate-y-[-2px] text-left text-sm font-medium leading-[17px] text-white'>
              {item?.title}
            </span>
            <div className='flex items-center'>
              {item?.artists.map((art, index) => {
                if (item?.artists.length === 1) {
                  return (
                    <a
                      key={art?.id}
                      className='mr-[2px] flex items-center text-xs text-gray hover:text-[#9D4BE0] hover:underline hover:decoration-[#9D4BE0] hover:decoration-solid'
                    >
                      {art?.name}
                      {art?.spotlight ? <StarIcon className='ml-[2px] text-white' /> : ''}
                    </a>
                  )
                } else if (index < item?.artists.length - 1) {
                  return (
                    <a
                      key={art?.id}
                      className='mr-[2px] flex items-center text-xs text-gray hover:text-[#9D4BE0] hover:underline hover:decoration-[#9D4BE0] hover:decoration-solid'
                    >
                      {art?.name}
                      {art?.spotlight ? <StarIcon className='ml-[2px]  text-white' /> : ''},
                    </a>
                  )
                } else {
                  return (
                    <a
                      key={art?.id}
                      className='mr-[2px] flex items-center text-xs text-gray hover:text-[#9D4BE0] hover:underline hover:decoration-[#9D4BE0] hover:decoration-solid'
                    >
                      {art?.name}
                      {art?.spotlight ? <StarIcon className='ml-[2px]  text-white' /> : ''}
                    </a>
                  )
                }
              })}
            </div>
          </div>
        </div>
        <a className='ml-[10px] flex-1 text-xs font-semibold capitalize leading-[17px] text-gray hover:text-[#9D4BE0] hover:underline hover:decoration-[#9D4BE0] hover:decoration-solid'>
          {item.title}
        </a>
        <span className='px-[6px] text-right text-xs font-semibold capitalize text-gray'>
          {secondToMinuteAndSecond(parseInt(item.duration))}
        </span>
      </div>
    </div>
  )
}
export default AlbumSong
