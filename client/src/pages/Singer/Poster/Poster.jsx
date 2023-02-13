import Button from '~/components/Button'
import { AddUserIcon, PlayFullFillIcon } from '~/components/Icons'
import useColors from '~/hooks/useColors'
import { numberWithCommas } from '~/utils/hepper'
const Poster = ({ poster, isPoster }) => {
  const { ColorFrom300, ColorTo400, ColorText500, ColorBorder500 } = useColors()
  return (
    <div>
      {isPoster ? (
        <div
          className=' relative lg:ml-[-59px] mt-[-70px] mr-[-59px] mb-[30px] h-[200px] px-main-margin lg:min-h-[410px]'
          style={{
            backgroundImage: `url(${poster?.cover})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className='absolute left-[59px] bottom-6 flex flex-col '>
            <div className='mb-[8px] flex items-center'>
              <h3
                className={`${ColorText500} mr-5 text-[30px] font-bold text-shadow-md lg:text-[60px] lg:text-shadow-lg xl:text-shadow-lg`}
              >
                {poster?.name}
              </h3>
              <Button
                rounded
                type='outline'
                className='flex h-[45px] w-[45px] items-center justify-center bg-white shadow-md lg:h-[52px] lg:w-[52px] lg:shadow-lg '
              >
                <PlayFullFillIcon className={`${ColorText500}`} width='24px' height='25px' />
              </Button>
            </div>
            <div className='flex items-center'>
              <span className='mr-6 text-sm font-[500] text-light-mode dark:text-dark-mode'>
                {poster?.follow && numberWithCommas(poster?.follow)} người quan tâm
              </span>
              <button
                className={`${ColorBorder500} flex w-fit items-center rounded-full border-[1px] border-solid py-[5px] px-6 shadow drop-shadow-xl hover:bg-opacity-80 md:shadow-md`}
              >
                <AddUserIcon width='16px' height='16px' className={`${ColorText500} mr-1`} />
                <span className={`${ColorText500} text-xs font-semibold`}>QUAN TÂM</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${ColorFrom300} ${ColorTo400} xs:ml-[-59px] relative mt-[-70px] mr-[-59px] min-h-[299px] bg-gradient-to-r px-2 lg:px-main-margin`}
        >
          <div className='flex-start absolute top-[80px] flex lg:left-[59px] lg:bottom-6 '>
            <div className='mr-2 w-[140px] lg:mr-8 '>
              <img
                alt='thumbnail'
                src={poster?.thumbnail}
                className='block rounded-full object-cover shadow-md lg:shadow-md'
              />
            </div>
            <div className='flex flex-col'>
              <div className='mb-[14px] flex items-center'>
                <h3
                  className={`${ColorText500} mr-5 text-[30px] font-bold text-shadow-md lg:text-[60px] lg:text-shadow-lg xl:text-shadow-lg`}
                >
                  {poster?.name}
                </h3>
                <Button
                  rounded
                  type='outline'
                  className='flex h-[45px] w-[45px] items-center justify-center bg-white shadow-md lg:h-[52px] lg:w-[52px] lg:shadow-lg '
                >
                  <PlayFullFillIcon className={`${ColorText500}`} width='24px' height='25px' />
                </Button>
              </div>
              <div className=' flex flex-col justify-start lg:flex-row lg:items-center'>
                <span className='mr-6 text-sm font-[500] text-light-mode dark:text-dark-mode'>
                  {poster?.follow && numberWithCommas(poster?.follow)} người quan tâm
                </span>
                <button
                  className={`${ColorBorder500} flex w-fit items-center rounded-full border-[1px] border-solid py-[5px] px-6 shadow drop-shadow-xl hover:bg-opacity-80 md:shadow-md`}
                >
                  <AddUserIcon width='16px' height='16px' className={`${ColorText500} mr-1`} />
                  <span className={`${ColorText500} text-xs font-semibold`}>QUAN TÂM</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Poster
