import { useSelector } from 'react-redux'

const useSingleSong = () => {
  const dataSongs = useSelector((state) => state.app.dataSongs)
  const isSingle = dataSongs.length === 0 ? true : false
  return isSingle
}
export default useSingleSong
