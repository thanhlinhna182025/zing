import { PlayVideoIcon } from '~/components/Icons'
const LiveStreamItem = ({ item }) => {
  return (
    <div>
      <div className='relative'>
        <div className='group relative overflow-hidden rounded-full border-[3px] border-solid border-secondary-100'>
          <img
            src={item?.program?.thumbnail}
            className='rounded-full transition-all duration-1000 ease-[3000] group-hover:scale-[1.2]'
          />
          <div className='absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center rounded-full group-hover:bg-[rgba(0,0,0,0.5)]'>
            <PlayVideoIcon
              className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] text-white group-hover:inline-block'
              width='40px'
              height='40px'
            />
          </div>
        </div>
        <div className='absolute right-0 top-1/2 h-11 w-11 translate-y-[30%] overflow-hidden rounded-full border-[2px] border-solid border-black'>
          <img src={item.thumbnail} className='block w-full object-cover' />
        </div>
        <span className='absolute bottom-0 right-1/2 translate-x-[50%] translate-y-[50%] rounded-[3px] bg-[#FF0A0A] py-[1px] px-[7px] text-[8px] text-white'>
          LIVE
        </span>
      </div>
      <h3 className='mt-4 text-center text-[16px] font-semibold text-white'>{item?.host?.name}</h3>
      <p className='text-xs font-bold text-center text-gray'>{item?.activeUsers} đang nghe</p>
    </div>
  )
}
export default LiveStreamItem
