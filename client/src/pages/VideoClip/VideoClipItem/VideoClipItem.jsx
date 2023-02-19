import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { setMvId } from '~/feature/app/appSlice'
import useColors from '~/hooks/useColors'

const VideoClipItem = ({ item }) => {
  const { ColorHoverBg100 } = useColors()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLink = (item) => {
    dispatch(setMvId(item.encodeId))
    const link = item.link.split('.')[0]
    navigate(link)
  }
  return (
    <div className={`${ColorHoverBg100} flex items-center p-1`} onClick={() => handleLink(item)}>
      <div className='relative mr-3 w-[100px] cursor-pointer overflow-hidden rounded-md'>
        <img alt='thumbnail' src={item?.thumbnail} className='block w-full object-cover' />
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
          <PlayFullFillIcon className='text-white' width='20px' height='20px' />
        </div>
      </div>
      <div>
        <h5>{item.title}</h5>
        <NameArtist artists={item.artists} large />
      </div>
    </div>
  )
}
export default VideoClipItem
