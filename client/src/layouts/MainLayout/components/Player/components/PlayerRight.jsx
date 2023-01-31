import { forwardRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MicroPhoneIcon, MVIcon, PlayListIcon, VolumeIcon, WindownIcon } from '~/components/Icons'
import { VolumeMutedIcon } from '~/components/Icons/Icons'
import TippyString from '~/components/TippyString'
import { setIsPlaying, setKaraokMode, toggleRightMode } from '~/feature/app/appSlice'
import { getLyricMusic } from '~/feature/music/musicSlice'
import useColor from '~/hooks/useColor'
const PlayerRight = ({ handleVolume, handleMuteVolume, handleActiveVolume, volume }, ref) => {
  const musicId = useSelector((state) => state.music.musicId)
  const rightMode = useSelector((state) => state.app.rightMode)
  const { bg100Color, bg300Color } = useColor()

  const [hasLyric, setHasLyric] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLyricMusic(musicId))
      .unwrap()
      .then((result) => {
        if (result.sentences) {
          setHasLyric(true)
        } else {
          setHasLyric(false)
        }
      })
      .catch((err) => console.log(err))
  }, [musicId])

  const handleKaraokMode = () => {
    dispatch(setKaraokMode(hasLyric))
    dispatch(setIsPlaying(false))
  }
  const handleRightMode = () => {
    dispatch(toggleRightMode())
  }

  const style = {
    backgroundSize: `${volume}% 100%`
  }
  return (
    <div className='flex w-[30%] items-center justify-end'>
      <span className='cursor-pointer'>
        <MVIcon width='20px' height='20px' className=' text-light-mode dark:text-dark-mode ' />
      </span>
      {hasLyric ? (
        <TippyString content='Xem lời bài hát'>
          <span className='ml-5 cursor-pointer' onClick={handleKaraokMode}>
            <MicroPhoneIcon width='16px' height='16px' className=' text-light-mode dark:text-dark-mode ' />
          </span>
        </TippyString>
      ) : (
        <span className='ml-5 cursor-not-allowed'>
          <MicroPhoneIcon width='16px' height='16px' className=' text-light-mode dark:text-dark-mode ' />
        </span>
      )}
      <TippyString content='Chế độ cửa sổ'>
        <span className='ml-5 cursor-pointer'>
          <WindownIcon width='16px' height='16px' className=' text-light-mode dark:text-dark-mode ' />
        </span>
      </TippyString>
      <span className='ml-5 flex cursor-pointer items-center'>
        {volume === 0 ? (
          <span onClick={handleActiveVolume}>
            <VolumeMutedIcon width='28px' height='28px' className=' mr-[1px] text-light-mode dark:text-dark-mode' />
          </span>
        ) : (
          <span onClick={handleMuteVolume}>
            <VolumeIcon width='28px' height='28px' className=' mr-[1px] text-light-mode dark:text-dark-mode' />
          </span>
        )}
        <div className='relative flex items-center'>
          <input
            ref={ref}
            name='volume'
            type='range'
            min='0'
            max='100'
            step='1'
            value={volume}
            className='h-[3px] w-[100px] bg-white'
            onChange={handleVolume}
            style={style}
          />
        </div>
      </span>
      <div className='bg-main-200 ml-5 h-8 w-[1px]'></div>
      <TippyString content='Danh sách phát'>
        <span
          className={`${rightMode ? bg300Color : bg100Color} ml-5 cursor-pointer rounded-[4px] py-2 px-[6px]`}
          onClick={handleRightMode}
        >
          <PlayListIcon width='16px' height='16px' className=' text-light-mode dark:text-dark-mode ' />
        </span>
      </TippyString>
    </div>
  )
}
export default forwardRef(PlayerRight)
