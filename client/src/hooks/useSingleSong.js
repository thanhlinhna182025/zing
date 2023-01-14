import { useSelector } from 'react-redux'
const useSingleSong = () => {
  const albumSongs = useSelector((state) => state.album.albumSongs)
  return albumSongs.length === 0 ? true : false
}
export default useSingleSong
