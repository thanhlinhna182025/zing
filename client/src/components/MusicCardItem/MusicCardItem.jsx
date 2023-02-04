import { HeartIcon, MoreIcon, PlayVideoIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import useRedirect from '~/hooks/useRedirect'
import ReleaseDate from '../ReleaseDate/ReleaseDate'
import SortDescription from '../SortDescription/SortDescription'

const MusicCardItem = ({ item, title, name, sortDescription, releaseDate, releaseDateText, large }) => {
  const baseClass = large ? 'flex items-center gap-x-5' : 'flex items-center gap-x-1'
  const handleRedirect = useRedirect()

  return (
    <div className='px-[14px]' onClick={() => handleRedirect(item)}>
      <div className='group relative mb-3 box-border overflow-hidden rounded-md' key={item.encodeId}>
        <img
          alt={item.title}
          src={item.thumbnail}
          className=' w-full rounded-md object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1] hover:ease-[3000]'
        />
        <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.5)]'>
          <div className={baseClass}>
            <div className='hover:bg-hover-light-mode dark:hover:bg-hover-dark-mode cursor-pointer rounded-full p-[5px]'>
              <HeartIcon width='20px' height='20px' className='text-white' />
            </div>
            <PlayVideoIcon width='45px' height='45px' className='cursor-pointer text-white' />
            <div className='hover:bg-hover-light-mode dark:hover:bg-hover-dark-mode rounded-full p-[5px]'>
              <MoreIcon width='16px' height='16px' className='cursor-pointer text-white' />
            </div>
          </div>
        </div>
      </div>

      {title && (
        <h5 className='hover:text-secondary-100 cursor-pointer truncate text-sm font-bold text-light-mode dark:text-dark-mode'>
          {item.title}
        </h5>
      )}
      {name && <NameArtist artists={item.artists} large />}
      {sortDescription && <SortDescription>{item.sortDescription}</SortDescription>}
      {releaseDate && <ReleaseDate>{item.releaseDate}</ReleaseDate>}
      {releaseDateText && (
        <span className='text-xs font-bold text-light-mode dark:text-dark-mode'>{item.releaseDateText}</span>
      )}
    </div>
  )
}
export default MusicCardItem
