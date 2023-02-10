import disk from '~/assets/images/disk.png'
import { HeartIcon, MoreIcon, PlayFullFillIcon } from '~/components/Icons'
import useColors from '~/hooks/useColors'
import useRedirect from '~/hooks/useRedirect'

const AlbumItem = ({ item }) => {
  const { ColorHoverBg300, ColorText500 } = useColors()
  const handleRedirect = useRedirect()

  return (
    <div
      onClick={() => handleRedirect(item)}
      className={`group flex cursor-pointer items-center rounded-md p-[10px] ${ColorHoverBg300}`}
    >
      <div className='w-[50%] pl-3'>
        <div className='flex'>
          <div className='relative z-10 w-fit group-hover:animate-slide-left'>
            <img src={item.thumbnail} alt={item.title} className=' h-[87px] w-[87px] rounded-[4px]' />
            <PlayFullFillIcon
              width='24px'
              height='24px'
              className={`${ColorText500} absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]`}
            />
          </div>
          <img src={disk} alt='disk' className='ml-[-70px]  h-[87px] w-[87px] group-hover:animate-rotate-360' />
        </div>
      </div>
      <div className='flex w-1/2 justify-between'>
        <div className='text-light-mode dark:text-dark-mode'>{item?.releaseDate}</div>
        <div className='hidden items-center pr-5  group-hover:flex'>
          <HeartIcon className={`${ColorText500} mr-8 cursor-pointer`} height='20px' width='20px' />
          <MoreIcon className={`${ColorText500} cursor-pointer`} height='20px' width='20px' />
        </div>
      </div>
    </div>
  )
}
export default AlbumItem
