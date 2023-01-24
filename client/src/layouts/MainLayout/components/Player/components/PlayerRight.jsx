import { forwardRef, useEffect, useState } from 'react'
import { getLyricMusic } from '~/feature/music/musicSlice'

import { useDispatch, useSelector } from 'react-redux'
import { MicroPhoneIcon, MVIcon, PlayListIcon, VolumeIcon, WindownIcon } from '~/components/Icons'
import { setIsPlaying, setKaraokMode } from '~/feature/app/appSlice'
import TippyString from '../../../../../components/TippyString'
const PlayerRight = ({ handleVolume, currentVolume }, ref) => {
  const musicId = useSelector((state) => state.music.musicId)
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

  const style = {
    backgroundSize: `${currentVolume}% 100%`
  }
  return (
    <div className='flex w-[30%] items-center justify-end'>
      <span className='cursor-pointer'>
        <MVIcon width='20px' height='20px' className=' text-white ' />
      </span>
      {hasLyric ? (
        <TippyString content='Xem lời bài hát'>
          <span className='ml-5 cursor-pointer' onClick={handleKaraokMode}>
            <MicroPhoneIcon width='16px' height='16px' className=' text-white ' />
          </span>
        </TippyString>
      ) : (
        <span className='ml-5 cursor-not-allowed'>
          <MicroPhoneIcon width='16px' height='16px' className=' text-white ' />
        </span>
      )}
      <TippyString content='Chế độ cửa sổ'>
        <span className='ml-5 cursor-pointer'>
          <WindownIcon width='16px' height='16px' className=' text-white ' />
        </span>
      </TippyString>
      <span className='ml-5 flex cursor-pointer items-center'>
        <VolumeIcon width='28px' height='28px' className=' mr-[1px] text-white' />
        <div className='relative flex items-center'>
          <input
            ref={ref}
            name='volume'
            type='range'
            min='0'
            max='100'
            step='10'
            defaultValue='50'
            className='h-[3px] w-[100px] bg-white'
            onChange={handleVolume}
            style={style}
          />
        </div>
      </span>
      <div className='ml-5 h-8 w-[1px] bg-main-200'></div>
      <TippyString content='Danh sách phát'>
        <span className='ml-5 cursor-pointer rounded-[4px] bg-main-200 py-2 px-[6px]'>
          <PlayListIcon width='16px' height='16px' className=' text-white ' />
        </span>
      </TippyString>
    </div>
  )
}
export default forwardRef(PlayerRight)
