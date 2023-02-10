import { HeartIcon, PlayFillIcon } from '~/components/Icons'
import { MoreIcon } from '~/components/Icons/Icons'
import NameArtist from '~/components/NameArtist'
import useColors from '~/hooks/useColors'
import useRedirect from '~/hooks/useRedirect'

const PlayCurrentItem = ({ item }) => {
  const { ColorBg100, ColorHoverBg300, ColorText500 } = useColors()

  const handleRedirect = useRedirect()
  return (
    <div className={`flex items-center p-[6px] ${ColorBg100} group rounded-md ${ColorHoverBg300}`}>
      <div className='mr-2 flex flex-grow items-center'>
        <div
          className='relative mr-2 h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-md'
          onClick={() => handleRedirect(item)}
        >
          <img alt='thumbnail' src={item?.thumbnail} />
          <PlayFillIcon
            className={`${ColorText500} translate-y-[-50%]group-hover:inline-block absolute top-1/2 left-1/2 hidden translate-x-[-50%]`}
            width='16px'
            height='16px'
          />
        </div>
        <div className='flex w-[200px] flex-col justify-center'>
          <h5 className='mb-1 truncate text-xs font-bold text-light-mode dark:text-dark-mode'>{item?.title}</h5>
          <NameArtist artists={item?.artists} />
        </div>
      </div>
      <div className='mr-3 flex flex-grow gap-x-2'>
        <HeartIcon className={`${ColorText500}`} width='14px' height='14px' />
        <MoreIcon className={`${ColorText500}`} width='14px' height='14px' />
      </div>
    </div>
  )
}
export default PlayCurrentItem
