import { useDispatch } from 'react-redux'
import { MoreIcon, PlayFullFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import { addErrorMusicId, addMusicId } from '~/feature/music/musicSlice'
import useColors from '~/hooks/useColors'
import { releaseDay } from '~/utils/hepper'
const SongCardItem = ({ item }) => {
  const { ColorHoverBg200, ColorText500 } = useColors()
  const dispatch = useDispatch()
  const handleAddMusicId = (item) => {
    console.log(item)
    if (item.streamingStatus === 1) {
      dispatch(addMusicId(item.encodeId))
    } else if (item.streamingStatus === 2) {
      dispatch(addErrorMusicId(item.encodeId))
    }
  }

  return (
    <div className={`group relative flex h-[80px] items-center gap-x-2 rounded-md px-2 ${ColorHoverBg200}`}>
      <div className=' relative w-[60px]' onClick={() => handleAddMusicId(item)}>
        <img className='block w-full object-cover' src={item.thumbnail} alt={item.title} />
        <PlayFullFillIcon
          className={`${ColorText500} absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] cursor-pointer group-hover:inline-block hover:opacity-90`}
        />
      </div>
      <div className='flex-1'>
        <h5 className={`w-[80%] truncate text-xs font-bold capitalize text-light-mode dark:text-dark-mode`}>
          {item.title}
        </h5>
        <NameArtist artists={item.artists} />
        <span className='text-sm font-semibold text-light-mode dark:text-dark-mode'>
          {releaseDay(item.releaseDate)}
        </span>
      </div>
      <div
        className={`absolute top-1/2 right-0 hidden translate-x-[-50%] translate-y-[-50%] rounded-full p-2 group-hover:inline-block ${ColorHoverBg200}`}
      >
        <MoreIcon className={`${ColorText500}`} width='16px' height='16px' />
      </div>
    </div>
  )
}
export default SongCardItem
