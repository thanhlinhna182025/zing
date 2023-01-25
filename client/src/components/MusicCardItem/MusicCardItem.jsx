import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HeartIcon, MoreIcon, PlayVideoIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { addAlbumId } from '~/feature/album/albumSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import { addPlaylistId } from '../../feature/playlist/playlistSlice'
import ReleaseDate from '../ReleaseDate/ReleaseDate'
import SortDescription from '../SortDescription/SortDescription'
const MusicCardItem = ({ item, title, name, sortDescription, releaseDate, releaseDateText, large }) => {
  const baseClass = large ? 'flex items-center gap-x-5' : 'flex items-center gap-x-1'
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRedirect = (item) => {
    if (item.type === 1 || item.link.startsWith('/bai-hat')) {
      dispatch(addMusicId(item.encodeId))
    } else if (item.type === 4 || item.link.startsWith('/album')) {
      const link = item?.link.split('.')[0]
      dispatch(addAlbumId(link.split('/')[3]))
      navigate(link)
    } else if (item.type === 5 || item.link.startsWith('/playlist')) {
      const link = item?.link.split('.')[0]
      dispatch(addPlaylistId(link.split('/')[3]))
      navigate(link)
    } else {
      console.log('Khong thuoc truong hop tren')
    }
  }

  return (
    <div className='px-[14px]' onClick={() => handleRedirect(item)}>
      <div className='group relative mb-3 box-border overflow-hidden rounded-md' key={item.encodeId}>
        <img
          src={item.thumbnail}
          className=' w-full rounded-md object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1] hover:ease-[3000]'
        />
        <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.5)]'>
          <div className={baseClass}>
            <div className='cursor-pointer rounded-full p-[5px] hover:bg-main-200'>
              <HeartIcon width='20px' height='20px' className='text-white' />
            </div>
            <PlayVideoIcon width='45px' height='45px' className='cursor-pointer text-white' />
            <div className='rounded-full p-[5px] hover:bg-main-200'>
              <MoreIcon width='16px' height='16px' className='cursor-pointer text-white' />
            </div>
          </div>
        </div>
      </div>

      {title && (
        <h5 className='cursor-pointer truncate text-sm font-bold text-white hover:text-secondary-100'>{item.title}</h5>
      )}
      {name && <NameArtist artists={item.artists} large />}
      {sortDescription && <SortDescription>{item.sortDescription}</SortDescription>}
      {releaseDate && <ReleaseDate>{item.releaseDate}</ReleaseDate>}
      {releaseDateText && <span className='text-xs font-bold text-white'>{item.releaseDateText}</span>}
    </div>
  )
}
export default MusicCardItem
