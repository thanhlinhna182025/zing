import { BackMusicIcon, NextMusicIcon, PlayVideoIcon, RepeatIcon, ShuffleIcon } from '~/components/Icons/Icons'
import { PauseIcon } from '../../../../components/Icons/Icons'

const PlayerCenter = ({ handlePlaying, isPlaying }) => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <div className='flex items-center justify-center gap-[17px]'>
        <span className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full  px-[3px] py-[3px]  hover:bg-main-200'>
          <ShuffleIcon className='text-white' width='24px' height='24px' />
        </span>
        <span className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200'>
          <BackMusicIcon className='text-white' width='14px' height='14px' />
        </span>
        <span className='cursor-pointer ' onClick={handlePlaying}>
          {isPlaying ? (
            <PauseIcon className='text-white' width='38px' height='38px' />
          ) : (
            <PlayVideoIcon className='text-white' width='38px' height='38px' />
          )}
        </span>
        <span className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200'>
          <NextMusicIcon className='text-white' width='14px' height='14px' />
        </span>
        <span className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200'>
          <RepeatIcon className='text-white' width='20px' height='20px' />
        </span>
      </div>
      <div>process bar</div>
    </div>
  )
}
export default PlayerCenter
