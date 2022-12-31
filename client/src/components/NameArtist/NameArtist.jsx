import { StarIcon } from '~/components/Icons'

const NameArtist = ({ artists, large }) => {
  const baseClass = large
    ? 'mr-[2px]  text-sm text-left font-semibold text-gray hover:text-secondary-100 hover:underline hover:decoration-secondary-100 hover:decoration-solid'
    : 'mr-[2px]  text-xs text-left text-gray hover:text-secondary-100 hover:underline hover:decoration-secondary-100 hover:decoration-solid'
  return (
    <h3 className=' overflow-hidden text-ellipsis text-gray line-clamp-2'>
      {artists?.map((art, index) => {
        if (artists.length === 1) {
          return (
            <a key={art?.id} className={baseClass}>
              {art?.name}
              {art?.spotlight ? <StarIcon className='ml-[2px] text-white' /> : ''}
            </a>
          )
        } else if (index < artists.length - 1) {
          return (
            <a key={art?.id} className={baseClass}>
              {art?.name}
              {art?.spotlight ? <StarIcon className='ml-[2px] inline text-white' /> : ''},
            </a>
          )
        } else {
          return (
            <a key={art?.id} className={baseClass}>
              {art?.name}
              {art?.spotlight ? <StarIcon className='ml-[2px]  text-white' /> : ''}
            </a>
          )
        }
      })}
    </h3>
  )
}
export default NameArtist
