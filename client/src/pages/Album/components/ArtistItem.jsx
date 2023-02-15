import { Link } from 'react-router-dom'
import useColors from '~/hooks/useColors'

const ArtistItem = ({ item }) => {
  const { ColorHoverText300, ColorHoverTextDark300 } = useColors()
  return (
    <div>
      <div className='overflow-hidden rounded-full'>
        <img alt='thumbnail' src={item.thumbnail} />
      </div>
      <div>
        <Link className={`${ColorHoverText300} ${ColorHoverTextDark300} text-light-mode dark:text-dark-mode `}>
          {item.name}
        </Link>
      </div>
    </div>
  )
}
export default ArtistItem
