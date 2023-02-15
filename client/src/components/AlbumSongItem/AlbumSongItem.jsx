import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MusicBar from '~/assets/images/Z23N.gif'
import { MusicNodeIcon, PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { setCurrentIndexAlbumSong } from '~/feature/album/albumSlice'
import { addErrorMusicId, addMusicId } from '~/feature/music/musicSlice'
import useColors from '~/hooks/useColors'
import { releaseDay, secondToMinuteAndSecond } from '~/utils/hepper'

const AlbumSongItem = ({ item, index, release }) => {
  // Global State
  const isPlaying = useSelector((state) => state.app.isPlaying)
  const musicId = useSelector((state) => state.music.musicId)
  const { ColorHoverBg200, ColorText500 } = useColors()
  //Local Sstate
  const [albumLink, setAlbumLink] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    setAlbumLink(item?.album?.link.split('.')[0])
  }, [])

  /** Thay đổi MusicId , curentIndexAlbumSong và errorMusicId */
  const handleSong = (item) => {
    if (item.streamingStatus === 1) {
      dispatch(addMusicId(item.encodeId))
      dispatch(setCurrentIndexAlbumSong(index))
    } else if (item.streamingStatus === 2) {
      dispatch(addErrorMusicId(item.encodeId))
    }
  }

  return (
    <div className={`group flex flex-col hover:shadow md:hover:shadow-md lg:hover:shadow-lg ${ColorHoverBg200} `}>
      <div className={`flex h-[60px] items-center rounded-[4px] p-[10px] `}>
        <div className='flex flex-grow items-center gap-[10px] gap-x-2 overflow-hidden lg:w-1/2'>
          <MusicNodeIcon
            className=' hidden flex-shrink-0 text-light-mode dark:text-dark-mode lg:inline-block '
            width='16px'
            height='16px'
          />
          <div
            className='relative h-[40px] w-[40px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[4px]'
            onClick={() => handleSong(item)}
          >
            <img alt={item.title} src={item.thumbnailM} className='block w-full object-cover' />
            {musicId === item.encodeId && isPlaying ? (
              <img src={MusicBar} alt='musicBar' className='absolute top-0 left-0 z-10' />
            ) : (
              <PlayFullFillIcon
                className={`${ColorText500} absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] group-hover:inline-block`}
                width='16px'
                height='16px'
              />
            )}
            <PlayFullFillIcon
              className={`${ColorText500} absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] group-hover:inline-block`}
              width='16px'
              height='16px'
            />
          </div>
          <div className='flex flex-grow flex-col justify-start '>
            <h5
              className={`mb-[2px] max-w-[250px] translate-y-[-2px] truncate text-left text-sm font-medium leading-[17px] text-light-mode dark:text-dark-mode `}
            >
              {item?.title}
            </h5>
            <div className='flex flex-grow items-center'>
              <NameArtist artists={item.artists} />
            </div>
          </div>
        </div>
        <div className='flex justify-between lg:w-1/2'>
          {release ? (
            <span className='hidden text-sm font-semibold text-light-mode dark:text-dark-mode lg:inline-block'>
              {releaseDay(item.releaseDate)}
            </span>
          ) : (
            <Link
              to={albumLink}
              className={` ml-[10px] inline-block max-w-[250px] flex-1 truncate text-[12px] font-semibold capitalize leading-[17px] text-light-mode underline-offset-2 hover:text-link-color hover:underline  hover:decoration-link-color hover:decoration-solid dark:text-dark-mode`}
            >
              {item.title}
            </Link>
          )}

          <span className=' px-[6px] text-right text-xs font-semibold capitalize text-light-mode dark:text-dark-mode'>
            {secondToMinuteAndSecond(parseInt(item.duration))}
          </span>
        </div>
      </div>
    </div>
  )
}
export default AlbumSongItem
