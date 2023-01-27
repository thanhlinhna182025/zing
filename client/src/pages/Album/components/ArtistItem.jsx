import { Link } from 'react-router-dom'

const ArtistItem = ({ item }) => {
  return (
    <div>
      <div className='overflow-hidden rounded-full'>
        <img src={item.thumbnail} />
      </div>
      <div>
        <Link className='hover:text-secondary-100 text-light-mode dark:text-dark-mode'>{item.name}</Link>
      </div>
    </div>
  )
}
export default ArtistItem
