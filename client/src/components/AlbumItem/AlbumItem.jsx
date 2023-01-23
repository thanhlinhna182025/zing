import disk from '~/assets/images/album-disk.png'
import { HeartIcon, MoreIcon, PlayFullFillIcon } from '~/components/Icons'

const AlbumItem = ({ item }) => {
  
  return (
    <div className='group flex items-center rounded-md p-[10px] hover:bg-main-300'>
      <div className='w-[50%] pl-3'>
        <div className='flex'>
          <div className='relative z-10 w-fit group-hover:animate-slide-left'>
            <img src={item.thumbnail} className=' h-[87px] w-[87px] rounded-[4px]' />
            <PlayFullFillIcon
              width='24px'
              height='24px'
              className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white'
            />
          </div>
          <img src={disk} className='ml-[-70px]  h-[87px] w-[87px] group-hover:animate-rotate-360' />
        </div>
      </div>
      <div className='flex w-1/2 justify-between'>
        <div className='text-white'>{item?.releaseDate}</div>
        <div className='hidden items-center pr-5  group-hover:flex'>
          <HeartIcon className='mr-8 cursor-pointer text-white' height='20px' width='20px' />
          <MoreIcon className='cursor-pointer text-white' height='20px' width='20px' />
        </div>
      </div>
    </div>
  )
}
export default AlbumItem
