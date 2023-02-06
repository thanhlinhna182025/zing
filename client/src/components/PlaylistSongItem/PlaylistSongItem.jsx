import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MusicBar from '~/assets/images/Z23N.gif'
import { MusicNodeIcon, PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { addMusicId } from '~/feature/music/musicSlice'
import { setCurrentIndexPlaylistSong } from '~/feature/playlist/playlistSlice'
import { releaseDay, secondToMinuteAndSecond } from '~/utils/hepper'
import { setOmitPage } from '~/feature/app/appSlice'
import useColorHover from '~/hooks/useColorHover'

const PlaylistSongItem = ({ item, index, release }) => {
  const { hoverColor300 } = useColorHover()

  const dispatch = useDispatch()
  const [albumLink, setAlbumLink] = useState(null)
  useEffect(() => {
    setAlbumLink(item?.album?.link.split('.')[0])
  }, [])

  const isPlaying = useSelector((state) => state.app.isPlaying)
  const musicId = useSelector((state) => state.music.musicId)

  const handleSong = () => {
    dispatch(addMusicId(item.encodeId))
    dispatch(setCurrentIndexPlaylistSong(index))
    dispatch(setOmitPage('playlist'))
  }

  return (
    <div className={`group flex flex-col ${hoverColor300}`}>
      <div
        className={`flex h-[60px] items-center rounded-[4px] border-b-[1px] border-solid border-[#231B2E] p-[10px] `}
      >
        <div className='flex w-1/2 items-center gap-[10px] gap-x-2 overflow-hidden'>
          <MusicNodeIcon className=' text-light-mode dark:text-dark-mode ' width='16px' height='16px' />
          <div
            className='relative h-[40px] w-[40px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[4px]'
            onClick={handleSong}
          >
            <img alt={item.title} src={item.thumbnailM} className='block w-full object-cover' />
            {musicId === item.encodeId && isPlaying ? (
              <img src={MusicBar} alt='musicBar' className='absolute top-0 left-0 z-10' />
            ) : (
              <PlayFullFillIcon
                className='absolute top-1/2 left-1/2 hidden translate-x-[-50%]  translate-y-[-50%]  text-white group-hover:inline-block'
                width='16px'
                height='16px'
              />
            )}
            <PlayFullFillIcon
              className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%]  text-white group-hover:inline-block'
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
        <div className='flex w-1/2 justify-between'>
          {release ? (
            <span className='text-sm font-semibold text-light-mode dark:text-dark-mode'>
              {releaseDay(item.releaseDate)}
            </span>
          ) : (
            <Link
              to={albumLink}
              className={` ml-[10px] inline-block max-w-[250px] flex-1 truncate text-[12px] font-semibold capitalize leading-[17px]  text-light-mode hover:text-[#9D4BE0] hover:underline  hover:decoration-[#9D4BE0] hover:decoration-solid dark:text-dark-mode`}
            >
              {item.title}
            </Link>
          )}

          <span className='px-[6px] text-right text-xs font-semibold capitalize text-light-mode dark:text-dark-mode'>
            {secondToMinuteAndSecond(parseInt(item.duration))}
          </span>
        </div>
      </div>
    </div>
  )
}
export default PlaylistSongItem
