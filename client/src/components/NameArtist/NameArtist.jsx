import { Link } from 'react-router-dom'
import { StarIcon } from '~/components/Icons'
import useColors from '~/hooks/useColors'
/** Tên ca sĩ bài hát */
const NameArtist = ({ artists, large }) => {
  const { ColorHoverText500, ColorHoverTextDark500 } = useColors()
  let baseClass = large
    ? `${ColorHoverText500} ${ColorHoverTextDark500} text-light-mode dark:text-dark-mode underline-offset-2 mr-[2px] inline text-sm text-left font-semibold cursor-pointer`
    : `${ColorHoverText500} ${ColorHoverTextDark500} text-light-mode dark:text-dark-mode inline mr-[2px] text-xs text-left font-[600] underline-offset-8 cursor-pointer`

  return (
    <div className='flex leading-none'>
      {artists && (
        <h3 className={`flex  overflow-hidden text-ellipsis text-light-mode line-clamp-2 dark:text-dark-mode`}>
          {artists?.map((art, index) => {
            if (artists.length === 1) {
              return (
                <Link key={art?.id} className={`${baseClass}`} to={`/singer/${art.alias}`}>
                  {art?.name}
                  {art?.spotlight ? (
                    <StarIcon className='ml-[2px] inline-block translate-y-[-50%] text-light-mode dark:text-dark-mode' />
                  ) : (
                    ''
                  )}
                </Link>
              )
            } else if (index < artists.length - 1) {
              return (
                <Link key={art?.id} className={`${baseClass}`} to={`/singer/${art.alias}`}>
                  {art?.name}
                  {art?.spotlight ? (
                    <StarIcon className='ml-[2px] inline-block translate-y-[-50%] text-light-mode dark:text-dark-mode ' />
                  ) : (
                    ''
                  )}
                  ,
                </Link>
              )
            } else {
              return (
                <Link key={art?.id} className={`${baseClass}`} to={`/singer/${art.alias}`}>
                  {art?.name}
                  {art?.spotlight ? (
                    <StarIcon className='ml-[2px] inline-block translate-y-[-50%] text-light-mode dark:text-dark-mode' />
                  ) : (
                    ''
                  )}
                </Link>
              )
            }
          })}
        </h3>
      )}
    </div>
  )
}
export default NameArtist
