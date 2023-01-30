import { PlayFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import useColor from '~/hooks/useColor'
import useRedirect from '~/hooks/useRedirect'

const ZingChartItem = ({ item, number, totalScore }) => {
  const [bgColor, bg100Color, bg200Color, bg300Color] = useColor()
  const handleRedirect = useRedirect()
  return (
    <div className={`mr-5  w-[415px] `}>
      <div
        className={`flex items-center p-3 ${bg100Color} group rounded-md hover:bg-hover-light-mode dark:hover:bg-hover-dark-mode`}
      >
        <span
          style={{
            paintOrder: 'stroke fill',
            color: 'transparent',
            WebkitTextStroke: `2px ${
              number === 1 ? '#498BD9' : number === 2 ? '#4BD2B9' : number === 3 ? '#CB5056' : '#cccccc'
            }`
          }}
          className='mr-3 text-[40px] font-extrabold'
        >
          {number}
        </span>
        <div className='mr-2 flex flex-grow items-center'>
          <div
            className='relative mr-2 h-[60px] w-[60px] cursor-pointer overflow-hidden rounded-md'
            onClick={() => handleRedirect(item)}
          >
            <img src={item.thumbnail} />
            <PlayFillIcon
              className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] text-white group-hover:inline-block'
              width='16px'
              height='16px'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <h5 className='mb-1 text-[14px] font-bold text-light-mode dark:text-dark-mode'>{item.title}</h5>
            <NameArtist artists={item.artists} />
          </div>
        </div>
        {totalScore && (
          <span className='text-[20px] font-bold text-light-mode dark:text-dark-mode'>
            {Math.round((item.score * 100) / totalScore)}%
          </span>
        )}
      </div>
    </div>
  )
}
export default ZingChartItem
