import useColors from '~/hooks/useColors'
import { ImageSkeletonIcon } from '../../Icons/Icons'
const MusicCardItemSkeleton = () => {
  const { ColorBg300, ColorBg100 } = useColors()
  return (
    <div role='status' className={`max-w-sm animate-pulse ${ColorBg100} rounded border p-2 shadow md:p-6`}>
      <div className='bg-gray-300 mb-3 flex items-center justify-center rounded'>
        <ImageSkeletonIcon width='130px' height='130px' className='text-light-mode dark:text-dark-mode' />
      </div>
      <div className={`${ColorBg300} mb-2.5 h-2 rounded-full`} />
      <div className={`${ColorBg300} mb-2.5 h-2 rounded-full`} />
      <div className={`${ColorBg300} mb-2.5 h-2 rounded-full`} />
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
export default MusicCardItemSkeleton
