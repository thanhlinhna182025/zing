import { useDispatch, useSelector } from 'react-redux'
import { setError } from '~/feature/app/appSlice'
import { addErrorMusicId } from '~/feature/music/musicSlice'

const Toast = () => {
  const dispatch = useDispatch()
  const contentError = useSelector((state) => state.app.contentError)

  const handleError = () => {
    dispatch(setError(false))
    dispatch(addErrorMusicId(null))
  }
  return (
    <div
      id='alert-border-1'
      className='dark:bg-gray-800 fixed top-[80px] right-10 z-[30] mb-4 flex border-t-4 border-blue-300 bg-blue-50 p-4 text-blue-800 dark:border-blue-800 dark:text-blue-400'
      role='alert'
    >
      <svg className='h-5 w-5 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
          clipRule='evenodd'
        />
      </svg>
      <div className='ml-3 text-sm font-medium'>{contentError?.msg}</div>
      <button
        onClick={handleError}
        type='button'
        className='dark:bg-gray-800 dark:hover:bg-gray-700 -mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-blue-50 p-1.5 text-blue-500 focus:ring-2 focus:ring-blue-400 hover:bg-blue-200 dark:text-blue-400'
        data-dismiss-target='#alert-border-1'
        aria-label='Close'
      >
        <span className='sr-only'>Dismiss</span>
        <svg
          aria-hidden='true'
          className='h-5 w-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  )
}
export default Toast
