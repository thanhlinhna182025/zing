import { PlayVideoIcon } from '~/components/Icons'
import useRedirect from '~/hooks/useRedirect'
const MVCardItem = ({ item }) => {
  const handleRedirect = useRedirect()

  return (
    <div className='flex flex-col overflow-hidden rounded-md bg-gradient-to-r from-[#574643] to-[#312939]'>
      <div className=' group relative   flex-shrink-0 hover:opacity-80 '>
        <img
          src={item.thumbnail}
          className='w-full object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1]'
        />
        <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center gap-x-3 hover:bg-[rgba(0,0,0,0.2)]'>
          <PlayVideoIcon width='45px' height='45px' className='cursor-pointer text-light-mode dark:text-dark-mode' />
        </div>
      </div>
      <div className='flex p-[10px]'>
        <div className='mr-2 w-10 overflow-hidden '>
          <img src={item?.artist?.thumbnail} className='w-full rounded-full object-cover' />
        </div>
        <div>
          <h5 className='mb-[1px] text-sm font-bold text-light-mode dark:text-dark-mode'>{item.title}</h5>
          <h4 className='text-xs font-bold text-light-mode dark:text-dark-mode'>{item.artistsNames}</h4>
        </div>
      </div>
    </div>
  )
}
export default MVCardItem
