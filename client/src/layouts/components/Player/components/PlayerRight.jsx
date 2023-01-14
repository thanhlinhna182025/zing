import { forwardRef } from 'react'
import { MicroPhoneIcon, MVIcon, PlayListIcon, VolumeIcon, WindownIcon } from '~/components/Icons'
const PlayerRight = ({ handleVolume, currentVolume }, ref) => {
  const style = {
    backgroundSize: `${currentVolume}% 100%`
  }
  return (
    <div className='flex w-[30%] items-center justify-end'>
      <span className='cursor-pointer'>
        <MVIcon width='20px' height='20px' className=' text-white ' />
      </span>
      <span className='ml-5 cursor-pointer'>
        <MicroPhoneIcon width='16px' height='16px' className=' text-white ' />
      </span>
      <span className='ml-5 cursor-pointer'>
        <WindownIcon width='16px' height='16px' className=' text-white ' />
      </span>
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
      <span className='ml-5 cursor-pointer rounded-[4px] bg-main-200 py-2 px-[6px]'>
        <PlayListIcon width='16px' height='16px' className=' text-white ' />
      </span>
    </div>
  )
}
export default forwardRef(PlayerRight)
