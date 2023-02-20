import { forwardRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MicroPhoneIcon, MVIcon, PlayListIcon, VolumeIcon, WindownIcon } from '~/components/Icons'
import { VolumeMutedIcon } from '~/components/Icons/Icons'
import TippyString from '~/components/TippyString'
import { setIsPlaying, setKaraokMode, toggleRightMode } from '~/feature/app/appSlice'
import { getLyricMusic } from '~/feature/music/musicSlice'
import useColors from '~/hooks/useColors'
const PlayerRight = ({ handleVolume, handleMuteVolume, handleActiveVolume, volume }, ref) => {
  const musicId = useSelector((state) => state.music.musicId)
  const rightMode = useSelector((state) => state.app.rightMode)
  const { ColorBg100, ColorBg300 } = useColors()

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
    <div className='ml-4 hidden items-center justify-end md:ml-0 md:flex lg:w-[30%] '>
      <span className='cursor-pointer'>
        <MVIcon width='20px' height='20px' className=' text-light-mode dark:text-dark-mode ' />
      </span>
      {hasLyric ? (
        <TippyString content='Xem lời bài hát'>
          <span className='ml-2 cursor-pointer md:ml-3 lg:ml-5' onClick={handleKaraokMode}>
            <MicroPhoneIcon width='16px' height='16px' className=' text-light-mode dark:text-dark-mode ' />
          </span>
        </TippyString>
      ) : (
        <span className='ml-2 cursor-not-allowed md:ml-3 lg:ml-5'>
          <MicroPhoneIcon width='16px' height='16px' className=' text-light-mode dark:text-dark-mode ' />
        </span>
      )}
      <TippyString content='Chế độ cửa sổ'>
        <span className='ml-2 cursor-pointer md:ml-3 lg:ml-5'>
          <WindownIcon width='16px' height='16px' className=' text-light-mode dark:text-dark-mode ' />
        </span>
      </TippyString>
      <span className='ml-2 flex cursor-pointer items-center md:ml-3 lg:ml-5'>
        {volume === 0 ? (
          <span onClick={handleActiveVolume}>
            <VolumeMutedIcon width='24px' height='24px' className=' mr-[1px] text-light-mode dark:text-dark-mode' />
          </span>
        ) : (
          <span onClick={handleMuteVolume}>
            <VolumeIcon width='24px' height='24px' className=' mr-[1px] text-light-mode dark:text-dark-mode' />
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
            className='h-[3px] w-[50px] bg-white md:w-[70px] lg:w-[100px]'
            onChange={handleVolume}
            style={style}
          />
        </div>
      </span>
      <div className='ml-5 hidden h-8 w-[1px] bg-[#ccc] md:block'></div>
      <TippyString content='Danh sách phát'>
        <span
          className={`${
            rightMode ? ColorBg300 : ColorBg100
          } ml-5 hidden cursor-pointer rounded-[4px] py-2 px-[6px] md:inline-block`}
          onClick={handleRightMode}
        >
          <PlayListIcon width='16px' height='16px' className=' text-light-mode dark:text-dark-mode ' />
        </span>
      </TippyString>
    </div>
  )
}
export default forwardRef(PlayerRight)
