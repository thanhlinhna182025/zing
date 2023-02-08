import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bgOne from '~/assets/images/bg_1.jpg'
import bgTwo from '~/assets/images/bg_2.jpg'
import bgThree from '~/assets/images/bg_3.jpg'
import dynamicBlue from '~/assets/images/dynamic-blue.jpg'
import dynamicBrown from '~/assets/images/dynamic-brown.jpg'
import dynamicPink from '~/assets/images/dynamic-pink.jpg'
import Button from '~/components/Button'
import { CloseCirleIcon } from '~/components/Icons'
import { setColor, setDarkMode, setDisplayMode } from '~/feature/app/appSlice'
import { setColorTheme } from '~/feature/colorTheme/colorThemeSlice'
import useColor from '~/hooks/useColor'
const DisplayModal = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.app.darkMode)
  const { bg300Color50, bg100Color } = useColor()
  const hideDisplay = () => dispatch(setDisplayMode(false))

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(setColorTheme(true))
    } else {
      dispatch(setColorTheme(false))
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleBackgroundValue = (e) => {
    dispatch(setColor(e.target.value))
    if (e.target.value === 'B' || e.target.value === 'C') {
      dispatch(setDarkMode(true))
    } else if (e.target.value === 'D') {
      dispatch(setDarkMode(false))
    } else {
      dispatch(setDarkMode(true))
    }
  }

  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 z-[999] flex  items-center justify-center ${bg300Color50}`}>
      <div className={`${bg100Color} relative  max-h-[50vh] min-h-[500px] rounded-lg  p-[30px]`}>
        <Button type='text' className='absolute top-3 right-3 cursor-pointer' onClick={hideDisplay}>
          <CloseCirleIcon className='text-gray' width='30px' height='30px' />
        </Button>
        <h5 className='mb-4 text-xl font-bold text-light-mode dark:text-dark-mode'>GIAO DIỆN</h5>
        <div className='mb-10'>
          <h5 className='mb-2 text-base font-semibold text-light-mode dark:text-dark-mode'>Dynamic</h5>
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
                <div className='h-[80px] w-[80px] overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img src={dynamicBlue} className='block w-full object-cover' />
                </div>
              </div>
              <label className='mt-2 text-center text-sm font-semibold text-light-mode dark:text-dark-mode lg:mt-4'>
                Blue
              </label>
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
                <div className='h-[80px] w-[80px] overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img src={dynamicBrown} className='block w-full object-cover' />
                </div>
              </div>
              <label className='mt-2 text-center text-sm font-semibold text-light-mode dark:text-dark-mode lg:mt-4'>
                Brown
              </label>
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
                <div className='h-[80px] w-[80px] overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img src={dynamicPink} className='block w-full object-cover' />
                </div>
              </div>
              <label className='mt-2 text-center text-sm font-semibold text-light-mode dark:text-dark-mode lg:mt-4'>
                Pink
              </label>
            </div>
          </div>
        </div>
        <div>
          <h5 className='mb-2 text-base font-semibold text-light-mode dark:text-dark-mode'>Chủ đề</h5>
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
                <div className='h-[80px] w-[80px] overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img src={bgOne} className='block w-full object-cover' />
                </div>
              </div>
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
                <div className='h-[80px] w-[80px] overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img src={bgTwo} className='block w-full object-cover' />
                </div>
              </div>
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
                <div className='h-[80px] w-[80px] overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img src={bgThree} className='block w-full object-cover' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DisplayModal
