import useColor from '~/hooks/useColor'
import { ImageSkeletonIcon } from '../../Icons/Icons'
const MusicCardItemSkeleton = () => {
  const { bg300Color, bg100Color } = useColor()
  return (
    <div role='status' className={`max-w-sm animate-pulse ${bg100Color} rounded border p-2 shadow md:p-6`}>
      <div className='bg-gray-300 mb-3 flex items-center justify-center rounded'>
        <ImageSkeletonIcon width='130px' height='130px' className='text-light-mode dark:text-dark-mode' />
      </div>
      <div className={`${bg300Color} mb-2.5 h-2 rounded-full`} />
      <div className={`${bg300Color} mb-2.5 h-2 rounded-full`} />
      <div className={`${bg300Color} mb-2.5 h-2 rounded-full`} />
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
export default MusicCardItemSkeleton
