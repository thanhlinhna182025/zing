import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { secondToMinuteAndSecond } from '~/utils/hepper'

const ProcessBar = ({ process, duration }) => {
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const isPlaying = useSelector((state) => state.music.isPlaying)
  useEffect(() => {
    const flag = duration === minute * 60 + second ? true : false
    let timerId
    if (!flag && isPlaying) {
      timerId = setInterval(() => {
        if (second < 60) {
          setSecond((pre) => pre + 1)
        } else if (minute < 60) {
          setMinute((pre) => pre + 1)
          setSecond(0)
        }
      }, 1000)
    }
    return () => {
      clearInterval(timerId)
    }
  }, [second, minute, duration, isPlaying])

  const bar = {
    height: '100%',
    width: `${process}%`,
    backgroundColor: '#90CAF9',
    borderRadius: 'inherit'
  }
  return (
    <div className='mb-[6px] flex h-1 w-full items-center gap-x-2'>
      <div className='mr-3 flex w-6 items-center'>
        <span className='text-xs font-bold text-gray'>{minute < 10 ? `0${minute}` : minute}</span>:
        <span className='text-xs font-bold text-gray'>{second < 10 ? `0${second}` : second}</span>
      </div>
      <div className='h-[3px] w-[400px] rounded-full bg-white '>
        <div style={bar} role='processbar' aria-valuenow={process} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
      <span className='text-xs font-bold text-gray'>{secondToMinuteAndSecond(parseInt(duration))}</span>
    </div>
  )
}
export default ProcessBar
