import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bgOne from '~/assets/images/iu.jpg'
import bgTwo from '~/assets/images/jack.jpg'
import bgThree from '~/assets/images/ji-chang-wook.jpg'
import bgFour from '~/assets/images/lisa.jpg'

import Button from '~/components/Button'
import { CloseCirleIcon } from '~/components/Icons'
import { setColor, setDarkMode, setDisplayMode } from '~/feature/app/appSlice'
import { setColorTheme } from '~/feature/colorTheme/colorThemeSlice'
import useColors from '~/hooks/useColors'
const DisplayModal = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.app.darkMode)
  const { Color50Bg500, ColorBg300, ColorText500 } = useColors()
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
    if (e.target.value === 'A' || e.target.value === 'B') {
      dispatch(setDarkMode(true))
    } else if (e.target.value === 'C' || e.target.value === 'D') {
      dispatch(setDarkMode(false))
    } else {
      dispatch(setDarkMode(false))
    }
  }

  return (
    <div className={`${Color50Bg500} fixed top-0 left-0 right-0 bottom-0 z-[999] flex  items-center justify-center `}>
      <div
        className={`${ColorBg300} relative max-h-[50vh] min-h-[400px] min-w-[300px] rounded-lg p-[30px]  lg:min-h-[500px]`}
      >
        <Button type='text' className='absolute top-3 right-3 cursor-pointer' onClick={hideDisplay}>
          <CloseCirleIcon className={`${ColorText500}`} width='30px' height='30px' />
        </Button>
        <h5 className={`${ColorText500} mb-4 text-xl font-bold`}>GIAO DIỆN</h5>
        <div className='mb-10'>
          <h5 className='mb-2 text-base font-semibold text-light-mode dark:text-dark-mode'>Dynamic</h5>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='A'
                  className='mr-3'
                />
                <div className='flex'>
                  <div className={`h-[50px] w-8 bg-A-100 lg:w-12`}></div>
                  <div className={`h-[50px] w-8 bg-A-500 lg:w-12`}></div>
                </div>
              </div>
              <label className='mt-2 text-center text-sm font-semibold text-light-mode dark:text-dark-mode lg:mt-4'>
                Japonica
              </label>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='B'
                  className='mr-3'
                />
                <div className='flex'>
                  <div className={`h-[50px] w-8 bg-B-100 lg:w-12 `}></div>
                  <div className={`h-[50px] w-8 bg-B-500 lg:w-12`}></div>
                </div>
              </div>
              <label className='mt-2 text-center text-sm font-semibold text-light-mode dark:text-dark-mode lg:mt-4'>
                Wild-strawberry
              </label>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='C'
                  className='mr-3'
                />
                <div className='flex'>
                  <div className={`h-[50px] w-8 bg-C-100 lg:w-12`}></div>
                  <div className={`h-[50px] w-8 bg-C-500 lg:w-12`}></div>
                </div>
              </div>
              <label className='mt-2 text-center text-sm font-semibold text-light-mode dark:text-dark-mode lg:mt-4'>
                Cornflower-blue
              </label>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='D'
                  className='mr-3'
                />
                <div className='flex'>
                  <div className={`h-[50px] w-8 bg-D-100 lg:w-12`}></div>
                  <div className={`h-[50px] w-8 bg-D-500 lg:w-12`}></div>
                </div>
              </div>
              <label className='mt-2 text-center text-sm font-semibold text-light-mode dark:text-dark-mode lg:mt-4'>
                Eastern-blue
              </label>
            </div>
          </div>
        </div>
        <div>
          <h5 className='mb-2 text-base font-semibold text-light-mode dark:text-dark-mode'>Chủ đề</h5>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='1'
                  className='mr-3'
                />
                <div className='h-[50px] w-16 overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img alt='bgOne' src={bgOne} className='block w-full object-cover' />
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='2'
                  className='mr-3'
                />
                <div className='h-[50px] w-16 overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img alt='bgTwo' src={bgTwo} className='block w-full object-cover' />
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='4'
                  className='mr-3'
                />
                <div className='h-[50px] w-16 overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img alt='bgThree' src={bgFour} className='block w-full object-cover' />
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center p-2'>
                <input
                  type='radio'
                  onChange={handleBackgroundValue}
                  name='backgroundColor'
                  value='3'
                  className='mr-3'
                />
                <div className='h-[50px] w-16 overflow-hidden rounded-sm lg:h-[83px] lg:w-[126px]'>
                  <img alt='bgThree' src={bgThree} className='block w-full object-cover' />
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
