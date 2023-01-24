import { useDispatch } from 'react-redux'
import bgOne from '~/assets/images/bg_1.jpg'
import bgTwo from '~/assets/images/bg_2.jpg'
import bgThree from '~/assets/images/bg_3.jpg'
import dynamicBlue from '~/assets/images/dynamic-blue.jpg'
import dynamicBrown from '~/assets/images/dynamic-brown.jpg'
import dynamicPink from '~/assets/images/dynamic-pink.jpg'
import Button from '~/components/Button'
import { CloseCirleIcon } from '~/components/Icons'
import { setColor } from '~/feature/app/appSlice'
const DisplayModal = ({ hideDisplay }) => {
  const dispatch = useDispatch()
  const handleBackgroundValue = (e) => {
    dispatch(setColor(e.target.value))
  }

  return (
    <div className='flex w-[100vw] items-center justify-center bg-[rgba(0,0,0,0.5)]'>
      <div className={` relative  max-h-[50vh] min-h-[500px] rounded-lg bg-white p-[30px]`}>
        <Button type='text' className='absolute top-3 right-3 cursor-pointer' onClick={hideDisplay}>
          <CloseCirleIcon className='text-main-500' width='30px' height='30px' />
        </Button>
        <h5 className='mb-4 text-xl font-bold'>GIAO DIỆN</h5>
        <div className='mb-10'>
          <h5 className='mb-2 text-base font-semibold'>Dynamic</h5>
          <div className='flex'>
            <div className='mr-8 flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='B'
                  className='mr-3'
                />
                <div className='h-[83px] w-[126px] overflow-hidden rounded-sm'>
                  <img src={dynamicBlue} className='block w-full object-cover' />
                </div>
              </div>
              <label className='mt-4 text-center text-sm font-semibold text-white'>Blue</label>
            </div>
            <div className='mr-8 flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='C'
                  className='mr-3'
                />
                <div className='h-[83px] w-[126px] overflow-hidden rounded-sm'>
                  <img src={dynamicBrown} className='block w-full object-cover' />
                </div>
              </div>
              <label className='mt-4 text-center text-sm font-semibold text-white'>Brown</label>
            </div>
            <div className='mr-8 flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='D'
                  className='mr-3'
                />
                <div className='h-[83px] w-[126px] overflow-hidden rounded-sm'>
                  <img src={dynamicPink} className='block w-full object-cover' />
                </div>
              </div>
              <label className='mt-4 text-center text-sm font-semibold text-white'>Pink</label>
            </div>
          </div>
        </div>
        <div>
          <h5 className='mb-2 text-base font-semibold'>Chủ đề</h5>
          <div className='flex'>
            <div className='mr-8 flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='1'
                  className='mr-3'
                />
                <div className='h-[83px] w-[126px] overflow-hidden rounded-sm'>
                  <img src={bgOne} className='block w-full object-cover' />
                </div>
              </div>
              <label className='mt-4 text-center text-sm font-semibold text-white'>XONE</label>
            </div>
            <div className='mr-8 flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='2'
                  className='mr-3'
                />
                <div className='h-[83px] w-[126px] overflow-hidden rounded-sm'>
                  <img src={bgTwo} className='block w-full object-cover' />
                </div>
              </div>
              <label className='mt-4 text-center text-sm font-semibold text-white'>Zing Music Award</label>
            </div>
            <div className='mr-8 flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='3'
                  className='mr-3'
                />
                <div className='h-[83px] w-[126px] overflow-hidden rounded-sm'>
                  <img src={bgThree} className='block w-full object-cover' />
                </div>
              </div>
              <label className='mt-4 text-center text-sm font-semibold text-white'>Eiffel</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DisplayModal