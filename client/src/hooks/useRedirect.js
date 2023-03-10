import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addAlbumId } from '~/feature/album/albumSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import { addPlaylistId } from '~/feature/playlist/playlistSlice'

const useRedirect = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  /** Nhận vào item và kiểm tra xem link của item bắt đầu bằng gì , chuyển trang theo link của item */
  const handleRedirect = (item) => {
    if (item.link.startsWith('/bai-hat')) {
      dispatch(addMusicId(item.encodeId))
    } else if (item.link.startsWith('/album')) {
      const link = item?.link.split('.')[0]
      dispatch(addAlbumId(link.split('/')[3]))
      navigate(link)
    } else if (item.link.startsWith('/playlist')) {
      const link = item?.link.split('.')[0]
      dispatch(addPlaylistId(link.split('/')[3]))
      navigate(link)
    } else {
      console.log('Khong thuoc truong hop tren')
    }
  }
  return handleRedirect
}

export default useRedirect
