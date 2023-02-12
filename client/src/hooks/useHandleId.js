import { useDispatch } from 'react-redux'
import { addErrorMusicId, addMusicId } from '~/feature/music/musicSlice'

const useHandleId = () => {
  const dispatch = useDispatch()
  const handleAddMusicId = (item) => {
    if (item.streamingStatus === 1) {
      dispatch(addMusicId(item.encodeId))
    } else if (item.streamingStatus === 2) {
      dispatch(addErrorMusicId(item.encodeId))
    }
  }
  return handleAddMusicId
}
export default useHandleId
