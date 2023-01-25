import { Link } from "react-router-dom"

const ArtistItem = ({ item }) => {
  return (
    <div>
      <div className="rounded-full overflow-hidden">
        <img src={item.thumbnail} />
      </div>
      <div>
        <Link className="text-white hover:text-secondary-100">{item.name}</Link>
      </div>
    </div>
  )
}
export default ArtistItem
