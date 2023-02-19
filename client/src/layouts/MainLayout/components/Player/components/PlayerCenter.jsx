import Tippy from '@tippyjs/react'
import { forwardRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  BackMusicIcon,
  MusicLoadingIcon,
  NextMusicIcon,
  PauseIcon,
  PlayVideoIcon,
  RepeatIcon,
  ShuffleIcon
} from '~/components/Icons/Icons'
import useColors from '~/hooks/useColors'
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
  const { ColorText500, ColorHoverBg200, ColorBg200 } = useColors()
  const urlLoading = useSelector((state) => state.music.urlLoading)

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
    <div className='  flex flex-col items-center justify-center gap-y-2 lg:flex-grow lg:gap-y-4'>
      <div className=' flex items-center justify-center gap-[17px]'>
        {isSingle ? (
          <span
            className={`  flex h-[32px] w-[32px] cursor-not-allowed items-center justify-center rounded-full  px-[3px] py-[3px] `}
          >
            <ShuffleIcon className='text-light-mode dark:text-dark-mode' width='24px' height='24px' />
          </span>
        ) : isShuffle ? (
          <Tippy content={<span className='text-xs text-light-mode dark:text-dark-mode'>Tắt phát ngẫu nhiên</span>}>
            <span
              className={`${ColorBg200} flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]`}
              onClick={togleIsShuffle}
            >
              <ShuffleIcon className={`${ColorText500}`} width='24px' height='24px' />
            </span>
          </Tippy>
        ) : (
          <Tippy content={<span className={`text-xs text-light-mode dark:text-dark-mode`}>Bật phát ngẫu nhiên</span>}>
            <span
              className={`${ColorHoverBg200} flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]`}
              onClick={setShuffle}
            >
              <ShuffleIcon className='text-light-mode dark:text-dark-mode' width='24px' height='24px' />
            </span>
          </Tippy>
        )}
        <span
          onClick={handlePrevSong}
          className={`${
            prevActive ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
          } ${ColorHoverBg200} flex h-[32px] w-[32px]  items-center justify-center rounded-full px-[3px] py-[3px]`}
        >
          <BackMusicIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
        </span>
        <span className='cursor-pointer ' onClick={togglePlaying}>
          {urlLoading ? (
            <MusicLoadingIcon className='h-[30px] w-[30px] animate-spin text-light-mode dark:text-dark-mode lg:h-[38px] lg:w-[38px]' />
          ) : isPlaying ? (
            <PauseIcon className='h-[30px] w-[30px] text-light-mode dark:text-dark-mode lg:h-[38px] lg:w-[38px]' />
          ) : (
            <PlayVideoIcon className='h-[30px] w-[30px] text-light-mode dark:text-dark-mode lg:h-[38px] lg:w-[38px]' />
          )}
        </span>
        <span
          onClick={handleNextSong}
          className={`${
            nextActive ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
          } ${ColorHoverBg200} flex h-[32px] w-[32px]  cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]`}
        >
          <NextMusicIcon className='text-light-mode dark:text-dark-mode' height='14px' />
        </span>
        {isRepeat ? (
          <Tippy content={<span className='text-xs text-light-mode dark:text-dark-mode'>Tắt phát lại</span>}>
            <span
              className={`${ColorBg200} flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]`}
              onClick={toggleIsRepeat}
            >
              <RepeatIcon className={`${ColorText500}`} width='20px' height='20px' />
            </span>
          </Tippy>
        ) : (
          <Tippy content={<span className='text-xs text-light-mode dark:text-dark-mode'>Bật phát lại</span>}>
            <span
              className={`${ColorHoverBg200} flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]`}
              onClick={setRepeat}
            >
              <RepeatIcon className='text-light-mode dark:text-dark-mode' width='20px' height='20px' />
            </span>
          </Tippy>
        )}
      </div>
      <div className='mb-[6px] flex h-1 w-full items-center justify-center gap-x-2'>
        <div className='mr-3 flex w-6 items-center'>
          <span className='text-xs font-bold text-light-mode dark:text-dark-mode'>
            {minute < 10 ? '0' + minute : minute}:
          </span>

          <span className='text-xs font-bold text-light-mode dark:text-dark-mode'>
            {second < 10 ? '0' + second : second}
          </span>
        </div>
        <input
          type='range'
          min='0'
          value={currentTime}
          max={duration}
          step='0.01'
          className='h-1 w-[200px] md:w-[300px] lg:w-[400px]'
          ref={ref}
          style={{ backgroundSize: `${percent}% 100%` }}
          onChange={handleCurrentTime}
        />
        <span className='text-xs font-bold text-light-mode dark:text-dark-mode'>
          {secondToMinuteAndSecond(parseInt(duration))}
        </span>
      </div>
    </div>
  )
}
export default forwardRef(PlayerCenter)
