import Button from '~/components/Button'
import { AddUserIcon, PlayFullFillIcon } from '~/components/Icons'
import { numberWithCommas } from '~/utils/hepper'

const Poster = ({ poster, isPoster }) => {
  return (
    <div>
      {isPoster ? (
        <div
          className=' relative ml-[-59px] mt-[-70px] mr-[-59px] mb-[30px] min-h-[410px] px-main-margin '
          style={{
            backgroundImage: `url(${poster?.cover})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className='absolute left-[59px] bottom-6 flex flex-col '>
            <div className='mb-[8px] flex items-center'>
              <h3 className='mr-5 text-[60px] font-bold text-light-mode dark:text-dark-mode xl:text-shadow-lg'>
                {poster?.name}
              </h3>
              <Button rounded type='outline' className=' flex h-[52px] w-[52px] items-center justify-center bg-white'>
                <PlayFullFillIcon className='text-A-0' width='24px' height='25px' />
              </Button>
            </div>
            <div className='flex items-center'>
              <span className='mr-6 text-sm font-[500] text-light-mode dark:text-dark-mode'>
                {poster?.follow && numberWithCommas(poster?.follow)} người quan tâm
              </span>
              <Button
                type='primary'
                rounded
                className='border-A-text-A-0 flex items-center py-[5px] px-6 drop-shadow-xl hover:bg-opacity-80'
              >
                <AddUserIcon width='16px' height='16px' className='mr-1 text-light-mode dark:text-dark-mode' />
                <span className='text-xs font-semibold  text-light-mode dark:text-dark-mode'>QUAN TÂM</span>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className=' relative ml-[-59px] mt-[-70px] mr-[-59px] min-h-[299px] bg-gradient-to-r from-cyan-500 to-blue-500 px-main-margin '>
          <div className='flex-start absolute left-[59px] bottom-6 flex '>
            <div className='mr-8 w-[140px]'>
              <img src={poster?.thumbnail} className='block rounded-full object-cover' />
            </div>
            <div className='flex flex-col'>
              <div className='mb-[14px] flex items-center'>
                <h3 className='mr-5 text-[60px] font-bold leading-tight text-light-mode dark:text-dark-mode xl:text-shadow-lg'>
                  {poster?.name}
                </h3>
                <Button rounded type='outline' className=' flex h-[52px] w-[52px] items-center justify-center bg-white'>
                  <PlayFullFillIcon className='text-A-0' width='24px' height='25px' />
                </Button>
              </div>
              <div className=' flex items-center justify-start'>
                <span className='mr-6 text-sm font-[500] text-light-mode dark:text-dark-mode'>
                  {poster?.follow && numberWithCommas(poster?.follow)} người quan tâm
                </span>
                <Button
                  type='primary'
                  rounded
                  className='border-A-text-A-0 flex items-center py-[5px] px-6 drop-shadow-xl hover:bg-opacity-80'
                >
                  <AddUserIcon width='16px' height='16px' className='mr-1 text-light-mode dark:text-dark-mode' />
                  <span className='text-xs font-semibold  text-light-mode dark:text-dark-mode'>QUAN TÂM</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Poster
