import { useSelector } from 'react-redux'
const useSingleSong = () => {
  const albumSongs = useSelector((state) => state.album.albumSongs)
  const playlistSongs = useSelector((state) => state.playlist.playlistSongs)
  return albumSongs.length === 0 && playlistSongs.length === 0 ? true : false
}
export default useSingleSong
