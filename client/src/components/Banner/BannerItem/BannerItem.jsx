import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addAlbumId } from '~/feature/album/albumSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import { addPlaylistId } from '~/feature/playlist/playlistSlice'
const BannerItem = ({ item }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleRedirect = (item) => {
    if (item.type === 1 || item.link.startsWith('/bai-hat')) {
      dispatch(addMusicId(item.encodeId))
    } else if (item.type === 4 || item.link.startsWith('/album')) {
      const link = item?.link.split('.')[0]
      dispatch(addAlbumId(link.split('/')[3]))
      navigate(link)
    } else if (item.type === 5 || item.link.startsWith('/playlist')) {
      const link = item?.link.split('.')[0]
      dispatch(addPlaylistId(link.split('/')[3]))
      navigate(link)
    } else {
      console.log('Khong thuoc truong hop tren')
    }
  }
  return (
    <div className='rounded-lg'>
      <img src={item.banner} className='rounded-lg' onClick={() => handleRedirect(item)} />
    </div>
  )
}
export default BannerItem
