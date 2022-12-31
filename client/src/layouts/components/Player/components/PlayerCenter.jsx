import { useEffect, useState } from 'react'
import {
  BackMusicIcon,
  NextMusicIcon,
  PauseIcon,
  PlayVideoIcon,
  RepeatIcon,
  ShuffleIcon
} from '~/components/Icons/Icons'
import ProcessBar from './ProcessBar'

const PlayerCenter = ({ isPlaying, togglePlaying, musicInfo }) => {
  const { duration } = musicInfo
  const [process, setProcess] = useState(0)
  const time = (duration * 1000) / 100
  useEffect(() => {
    let timerId
    if (isPlaying) {
      if (process < 100) {
        timerId = setInterval(() => {
          setProcess((pre) => pre + 1)
        }, time)
      }
    }
    return () => {
      clearInterval(timerId)
    }
  }, [isPlaying, musicInfo, process])
  useEffect(() => {
    setProcess(0)
  }, [musicInfo])
  return (
    <div className='  flex flex-1 flex-col items-center justify-center gap-y-4'>
      <div className=' flex items-center justify-center gap-[17px]'>
        <span className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full  px-[3px] py-[3px]  hover:bg-main-200'>
          <ShuffleIcon className='text-white' width='24px' height='24px' />
        </span>
        <span className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200'>
          <BackMusicIcon className='text-white' width='14px' height='14px' />
        </span>
        <span className='cursor-pointer ' onClick={togglePlaying}>
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
      <ProcessBar duration={duration} process={process} />
    </div>
  )
}
export default PlayerCenter
