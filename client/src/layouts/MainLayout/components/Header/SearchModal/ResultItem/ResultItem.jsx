import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setIsPlaying, setKaraokMode } from '~/feature/app/appSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import useColorHover from '~/hooks/useColorHover'

const ResultItem = ({ item, handleClearKeyword }) => {
  const { hoverColor300 } = useColorHover()

  const dispatch = useDispatch()
  const handleKaraokMode = () => {
    dispatch(addMusicId(item.encodeId))
    dispatch(setKaraokMode(true))
    dispatch(setIsPlaying(false))
    handleClearKeyword()
  }

  return (
    <li className={`w-full cursor-pointer rounded-[4px] px-[10px] py-2 ${hoverColor300}`}>
      {item.objectType === 'artist' ? (
        <Link onClick={handleClearKeyword} to={`/singer/${item.alias}`} className='flex w-full items-center '>
          <div className={`mr-3 h-[52px] w-[52px] overflow-hidden rounded-full `}>
            <img src={item.thumbnail} className='block w-full object-cover' />
          </div>
          <div>
            <span className='text-sm font-semibold text-light-mode dark:text-dark-mode'>{item.title || item.name}</span>
          </div>
        </Link>
      ) : (
        <div onClick={handleKaraokMode} className='flex w-full items-center'>
          <div className={`mr-3 h-[52px] w-[52px] overflow-hidden rounded-md`}>
            <img src={item.thumbnail} className='block w-full object-cover' />
          </div>
          <div>
            <span className='text-sm font-semibold text-light-mode dark:text-dark-mode'>{item.title || item.name}</span>
          </div>
        </div>
      )}
    </li>
  )
}
export default ResultItem
