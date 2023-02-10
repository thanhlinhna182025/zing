import { useDispatch } from 'react-redux'
import { setKaraokeIsPlaying } from '~/feature/app/appSlice'
import { addMusicId } from '~/feature/music/musicSlice'
const KaraokeItem = ({ item }) => {
  const dispatch = useDispatch()
  const handleKaraoke = () => {
    dispatch(addMusicId(item.encodeId))
    dispatch(setKaraokeIsPlaying(false))
  }
  return (
    <div className='cursor-pointer rounded-lg'>
      <img alt={item.title} src={item.thumbnailM} className='rounded-lg' onClick={handleKaraoke} />
    </div>
  )
}
export default KaraokeItem
