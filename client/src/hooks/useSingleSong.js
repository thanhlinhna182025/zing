import { useParams } from 'react-router-dom'
const useSingleSong = () => {
  const { title, id } = useParams()
  let flag = title || id ? false : true
  return flag
}
export default useSingleSong
