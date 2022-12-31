import { PlayVideoIcon } from '~/components/Icons'

const LiveMusicItem = (item) => {
  return (
    <div className='group relative overflow-hidden rounded-full border-[3px] border-solid border-secondary-100'>
      <img
        src={item?.thumbnail}
        className='rounded-full transition-all duration-1000 ease-[3000] group-hover:scale-[1.2]'
      />
      <div className='absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center rounded-full group-hover:bg-[rgba(0,0,0,0.5)]'>
        <PlayVideoIcon
          className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white'
          width='40px'
          height='40px'
        />
      </div>
    </div>
  )
}
export default LiveMusicItem
