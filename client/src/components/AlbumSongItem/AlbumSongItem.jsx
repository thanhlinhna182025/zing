import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MusicBar from '~/assets/images/Z23N.gif'
import { MusicNodeIcon, PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { setCurrentIndexSong } from '~/feature/album/albumSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import { secondToMinuteAndSecond } from '~/utils/hepper'

const AlbumSong = ({ item, index }) => {
  const dispatch = useDispatch()
  const [albumLink, setAlbumLink] = useState(null)
  useEffect(() => {
    setAlbumLink(item?.album?.link.split('.')[0])
  }, [])

  const isPlaying = useSelector((state) => state.app.isPlaying)
  const musicId = useSelector((state) => state.music.musicId)

  const handleSong = () => {
    dispatch(addMusicId(item.encodeId))
    dispatch(setCurrentIndexSong(index))
  }

  return (
    <div className='group flex flex-col'>
      <div className='flex h-[60px] items-center rounded-[4px] border-b-[1px] border-solid border-[#231B2E] p-[10px] hover:bg-main-300'>
        <div className='flex w-1/2 items-center gap-[10px] gap-x-2 overflow-hidden'>
          <MusicNodeIcon className=' text-white ' width='16px' height='16px' />
          <div
            className='relative h-[40px] w-[40px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[4px]'
            onClick={handleSong}
          >
            <img src={item.thumbnailM} className='block w-full object-cover' />
            {musicId === item.encodeId && isPlaying ? (
              <img src={MusicBar} className='absolute top-0 left-0 z-10' />
            ) : (
              <PlayFullFillIcon
                className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] text-white group-hover:inline-block'
                width='16px'
                height='16px'
              />
            )}
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
        <div className='flex w-1/2 justify-between'>
          <Link
            to={albumLink}
            className='ml-[10px] inline-block max-w-[250px] flex-1 truncate text-xs font-semibold capitalize leading-[17px] text-gray hover:text-[#9D4BE0] hover:underline hover:decoration-[#9D4BE0] hover:decoration-solid'
          >
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
