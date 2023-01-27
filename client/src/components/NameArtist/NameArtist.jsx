import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { StarIcon } from '~/components/Icons'

const NameArtist = ({ artists, large }) => {
  const darkMode = useSelector((state) => state.app.darkMode)

  const baseClass = large
    ? `text-light-mode dark:text-dark-mode mr-[2px] inline   text-sm text-left font-semibold text-light-mode dark:text-dark-mode hover:text-secondary-100 hover:underline hover:decoration-secondary-100 hover:decoration-solid cursor-pointer`
    : `inline mr-[2px]  text-xs text-left font-[600] text-light-mode dark:text-dark-mode hover:text-secondary-100 hover:underline hover:decoration-secondary-100 hover:decoration-solid cursor-pointer`
  return (
    <div className='flex flex-grow leading-none'>
      {artists && (
        <h3 className=' flex flex-grow overflow-hidden  text-ellipsis text-light-mode line-clamp-2 dark:text-dark-mode'>
          {artists?.map((art, index) => {
            if (artists.length === 1) {
              return (
                <Link key={art?.id} className={baseClass} to={`/singer/${art.alias}`}>
                  {art?.name}
                  {art?.spotlight ? (
                    <StarIcon className='ml-[2px] inline translate-y-[-50%] text-light-mode dark:text-dark-mode' />
                  ) : (
                    ''
                  )}
                </Link>
              )
            } else if (index < artists.length - 1) {
              return (
                <Link key={art?.id} className={baseClass} to={`/singer/${art.alias}`}>
                  {art?.name}
                  {art?.spotlight ? (
                    <StarIcon className='ml-[2px] inline translate-y-[-50%] text-light-mode dark:text-dark-mode ' />
                  ) : (
                    ''
                  )}
                  ,
                </Link>
              )
            } else {
              return (
                <Link key={art?.id} className={baseClass} to={`/singer/${art.alias}`}>
                  {art?.name}
                  {art?.spotlight ? (
                    <StarIcon className='ml-[2px] translate-y-[-50%]  text-light-mode dark:text-dark-mode' />
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
