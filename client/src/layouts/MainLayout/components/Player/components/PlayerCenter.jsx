import Tippy from '@tippyjs/react'
import { forwardRef, useEffect, useState } from 'react'
import {
  BackMusicIcon,
  NextMusicIcon,
  PauseIcon,
  PlayVideoIcon,
  RepeatIcon,
  ShuffleIcon
} from '~/components/Icons/Icons'
import { secondToMinuteAndSecond } from '~/utils/hepper'
const PlayerCenter = (
  {
    handleNextSong,
    handlePrevSong,
    duration,
    nextActive,
    prevActive,
    currentTime,
    handleCurrentTime,
    isPlaying,
    togglePlaying,
    isShuffle,
    setShuffle,
    togleIsShuffle,
    isRepeat,
    setRepeat,
    toggleIsRepeat,
    isSingle
  },
  ref
) => {
  const [percent, setPercent] = useState(0)
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)

  useEffect(() => {
    setPercent(Math.round((currentTime / duration).toFixed(4) * 100))
  }, [currentTime])
  useEffect(() => {
    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor((currentTime / 60) % 60)
    setSecond(seconds)
    setMinute(minutes)
  }, [currentTime])

  return (
    <div className='  flex flex-1 flex-col items-center justify-center gap-y-4'>
      <div className=' flex items-center justify-center gap-[17px]'>
        {isSingle ? (
          <span className='flex h-[32px] w-[32px] cursor-not-allowed items-center justify-center rounded-full  px-[3px] py-[3px]  hover:bg-main-200'>
            <ShuffleIcon className='text-gray' width='24px' height='24px' />
          </span>
        ) : isShuffle ? (
          <Tippy content={<span className='text-xs text-white'>Tắt phát ngẫu nhiên</span>}>
            <span
              className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full  px-[3px] py-[3px]  hover:bg-main-200'
              onClick={togleIsShuffle}
            >
              <ShuffleIcon className='text-secondary-100' width='24px' height='24px' />
            </span>
          </Tippy>
        ) : (
          <Tippy content={<span className='text-xs text-white'>Bật phát ngẫu nhiên</span>}>
            <span
              className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full  px-[3px] py-[3px]  hover:bg-main-200'
              onClick={setShuffle}
            >
              <ShuffleIcon className='text-white' width='24px' height='24px' />
            </span>
          </Tippy>
        )}
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
        {isRepeat ? (
          <Tippy content={<span className='text-xs text-white'>Tắt phát lại</span>}>
            <span
              className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200'
              onClick={toggleIsRepeat}
            >
              <RepeatIcon className='text-secondary-100' width='20px' height='20px' />
            </span>
          </Tippy>
        ) : (
          <Tippy content={<span className='text-xs text-white'>Bật phát lại</span>}>
            <span
              className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200'
              onClick={setRepeat}
            >
              <RepeatIcon className='text-white' width='20px' height='20px' />
            </span>
          </Tippy>
        )}
      </div>
      <div className='mb-[6px] flex h-1 w-full items-center justify-center gap-x-2'>
        <div className='mr-3 flex w-6 items-center'>
          <span className='text-xs font-bold text-gray'>{minute < 10 ? '0' + minute : minute}</span>:
          <span className='text-xs font-bold text-gray'>{second < 10 ? '0' + second : second}</span>
        </div>
        <input
          type='range'
          min='0'
          value={currentTime}
          max={duration}
          step='1'
          className='h-1 w-[400px]'
          ref={ref}
          style={{ backgroundSize: `${percent}% 100%` }}
          onChange={handleCurrentTime}
        />
        <span className='text-xs font-bold text-gray'>{secondToMinuteAndSecond(parseInt(duration))}</span>
      </div>
    </div>
  )
}
export default forwardRef(PlayerCenter)
