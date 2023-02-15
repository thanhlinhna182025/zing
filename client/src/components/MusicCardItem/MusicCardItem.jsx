import { HeartIcon, MoreIcon, PlayVideoIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import useColors from '~/hooks/useColors'
import useRedirect from '~/hooks/useRedirect'
import ReleaseDate from '../ReleaseDate/ReleaseDate'
import SortDescription from '../SortDescription/SortDescription'

/** Tùy chọn dựa trên title, name, sortDescription, releaseDate, releaseDateText, large, padding */
const MusicCardItem = ({ item, title, name, sortDescription, releaseDate, releaseDateText, large, padding }) => {
  const baseClass = large ? 'flex items-center gap-x-5' : 'flex items-center gap-x-1'
  const { ColorHoverBg300, ColorHoverText500, ColorHoverTextDark500, ColorText500 } = useColors()

  const handleRedirect = useRedirect()

  return (
    <div
      className='overflow-hidden rounded-md hover:shadow hover:md:shadow-md hover:lg:shadow-lg'
      onClick={() => handleRedirect(item)}
    >
      <div className='group relative box-border overflow-hidden rounded-md' key={item.encodeId}>
        <img
          alt={item.title}
          src={item.thumbnail}
          className=' w-full object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1] hover:ease-[3000]'
        />
        <div className='group-hover:flex absolute top-0 right-0 bottom-0 left-0 hidden  items-center justify-center group-hover:bg-[rgba(0,0,0,0.5)]'>
          <div className={baseClass}>
            <div className={`cursor-pointer rounded-full p-[5px] ${ColorHoverBg300}`}>
              <HeartIcon width='20px' height='20px' className={`${ColorText500}`} />
            </div>
            <PlayVideoIcon width='45px' height='45px' className={`${ColorText500} cursor-pointer`} />
            <div className={`cursor-pointer rounded-full p-[5px] ${ColorHoverBg300}`}>
              <MoreIcon width='16px' height='16px' className={`${ColorText500}`} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${padding ? padding : 'p-3'} flex flex-col px-2`}>
        {title && (
          <h5
            className={`${ColorHoverText500} ${ColorHoverTextDark500} cursor-pointer truncate text-sm font-bold text-light-mode dark:text-dark-mode`}
          >
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
    </div>
  )
}
export default MusicCardItem
