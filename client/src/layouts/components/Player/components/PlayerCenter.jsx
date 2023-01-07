import {
  BackMusicIcon,
  NextMusicIcon,
  PauseIcon,
  PlayVideoIcon,
  RepeatIcon,
  ShuffleIcon
} from '~/components/Icons/Icons'
import ProcessBar from './ProcessBar'

const PlayerCenter = ({
  isPlaying,
  togglePlaying,
  handleNextSong,
  handlePrevSong,
  handleShuffle,
  isPrepeat,
  handleIsPrepeat,
  duration,
  nextActive,
  prevActive,
  process,
  minute,
  second
}) => {
  return (
    <div className='  flex flex-1 flex-col items-center justify-center gap-y-4'>
      <div className=' flex items-center justify-center gap-[17px]'>
        <span
          onClick={handleShuffle}
          className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full  px-[3px] py-[3px]  hover:bg-main-200'
        >
          <ShuffleIcon className='text-white' width='24px' height='24px' />
        </span>
        <span
          onClick={handlePrevSong}
          className={`flex h-[32px] w-[32px]  items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200 ${
            prevActive ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
          }`}
        >
          <BackMusicIcon className={`${prevActive ? 'text-white' : ' text-gray'}`} width='14px' height='14px' />
        </span>
        <span className='cursor-pointer ' onClick={togglePlaying}>
          {isPlaying ? (
            <PauseIcon className='text-white' width='38px' height='38px' />
          ) : (
            <PlayVideoIcon className='text-white' width='38px' height='38px' />
          )}
        </span>
        <span
          onClick={handleNextSong}
          className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200 ${
            nextActive ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
          }`}
        >
          <NextMusicIcon className={`${nextActive ? 'text-white' : 'text-gray'}`} height='14px' />
        </span>
        <span
          className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200'
          onClick={handleIsPrepeat}
        >
          <RepeatIcon className={`${isPrepeat ? 'text-secondary-100' : 'text-white'}`} width='20px' height='20px' />
        </span>
      </div>
      <ProcessBar duration={duration} minute={minute} second={second} process={process} />
    </div>
  )
}
export default PlayerCenter
