import { Link } from 'react-router-dom'
import { StarIcon } from '~/components/Icons'

const NameArtist = ({ artists, large }) => {
  const baseClass = large
    ? 'mr-[2px]  text-sm text-left font-semibold text-white hover:text-secondary-100 hover:underline hover:decoration-secondary-100 hover:decoration-solid cursor-pointer'
    : 'mr-[2px]  text-xs text-left font-[600] text-white hover:text-secondary-100 hover:underline hover:decoration-secondary-100 hover:decoration-solid cursor-pointer'
  return (
    <div>
      {artists && (
        <h3 className=' overflow-hidden text-ellipsis text-white line-clamp-2'>
          {artists?.map((art, index) => {
            if (artists.length === 1) {
              return (
                <Link key={art?.id} className={baseClass} to={`/singer/${art.alias}`}>
                  {art?.name}
                  {art?.spotlight ? <StarIcon className='ml-[2px] text-white' /> : ''}
                </Link>
              )
            } else if (index < artists.length - 1) {
              return (
                <Link key={art?.id} className={baseClass} to={`/singer/${art.alias}`}>
                  {art?.name}
                  {art?.spotlight ? <StarIcon className='ml-[2px] inline text-white' /> : ''},
                </Link>
              )
            } else {
              return (
                <Link key={art?.id} className={baseClass} to={`/singer/${art.alias}`}>
                  {art?.name}
                  {art?.spotlight ? <StarIcon className='ml-[2px]  text-white' /> : ''}
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
