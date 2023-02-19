import { ImageSkeletonIcon } from '~/components/Icons'
import useColors from '~/hooks/useColors'

const SongCartItemSkeleton = () => {
  const { ColorBg300, ColorBg100 } = useColors()
  return (
    <div
      role='status'
      className={`animate-pulse space-y-8 rounded-md ${ColorBg100} md:flex md:items-center md:space-y-0 md:space-x-8`}
    >
      <div className='bg-gray-300  flex  w-full items-center justify-center rounded sm:w-96'>
        <div className='h-15 w-15 overflow-hidden'>
          <ImageSkeletonIcon className='text-light-mode dark:text-dark-mode' width='60px' heght='60px' />
        </div>
      </div>
      <div className='w-full py-1 md:py-2'>
        <div className={`${ColorBg300}  mb-4 h-2.5 w-48 rounded-full`} />
        <div className={`${ColorBg300}  mb-2.5 h-2 max-w-[460px] rounded-full`} />
        <div className={`${ColorBg300}  h-2 max-w-[360px] rounded-full`} />
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
export default SongCartItemSkeleton
