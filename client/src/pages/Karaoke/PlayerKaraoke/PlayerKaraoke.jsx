import { forwardRef } from 'react'
import { BackMusicIcon, NextMusicIcon, PauseIcon, PlayVideoIcon, RepeatIcon, ShuffleIcon } from '~/components/Icons'
import { secondToMinuteAndSecond } from '~/utils/hepper'
const PlayerKaraoke = (
  { karaokeIsPlaying, url, handleKaraokeIsPlaying, handleAudioTime, audioTime, audioDuration },
  ref
) => {
  const style = { backgroundSize: `${(audioTime * 100) / audioDuration}% 100%` }
  return (
    <div className='fixed left-0 bottom-0 right-0 h-[70px] '>
      <audio src={url} ref={ref}></audio>
      <div className='  flex flex-1 flex-col items-center justify-center gap-y-4'>
        <div className='mb-[6px] flex h-1 w-full items-center justify-center gap-x-2'>
          <div className='mr-3 flex w-6 items-center'>
            <span className='text-xs font-bold text-gray'>{secondToMinuteAndSecond(audioTime)}</span>
          </div>
          <input
            type='range'
            min='0'
            max={audioDuration?.toString()}
            step='0.1'
            value={audioTime}
            className='h-1 w-[400px]'
            style={style}
            onChange={(e) => handleAudioTime(e.target.value)}
          />
          <span className='text-xs font-bold text-gray'>
            {audioDuration ? secondToMinuteAndSecond(audioDuration) : '00:00'}
          </span>
        </div>
        <div className=' flex items-center justify-center gap-[17px]'>
          <span className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full  px-[3px] py-[3px]  hover:bg-main-200'>
            <ShuffleIcon className='text-white' width='24px' height='24px' />
          </span>
          <span
            className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200 `}
          >
            <BackMusicIcon className={`text-white`} width='14px' height='14px' />
          </span>
          <span className='cursor-pointer ' onClick={handleKaraokeIsPlaying}>
            {karaokeIsPlaying ? (
              <PauseIcon className='text-white' width='38px' height='38px' />
            ) : (
              <PlayVideoIcon className='text-white' width='38px' height='38px' />
            )}
          </span>
          <span
            className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200 `}
          >
            <NextMusicIcon className={`text-white`} height='14px' />
          </span>
          <span className='flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full px-[3px] py-[3px]  hover:bg-main-200'>
            <RepeatIcon className='text-white' width='20px' height='20px' />
          </span>
        </div>
      </div>
    </div>
  )
}
export default forwardRef(PlayerKaraoke)
