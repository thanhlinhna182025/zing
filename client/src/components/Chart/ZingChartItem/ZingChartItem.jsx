import { PlayFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import useColors from '~/hooks/useColors'
import useRedirect from '~/hooks/useRedirect'

const ZingChartItem = ({ item, number, totalScore }) => {
  const { ColorBg100, ColorHoverBg300, ColorText500 } = useColors()

  const handleRedirect = useRedirect()
  return (
    <div className={`mr-5 w-full rounded-md hover:shadow hover:md:shadow-md hover:lg:shadow-lg `}>
      <div className={`flex items-center lg:p-3 ${ColorBg100} group rounded-md ${ColorHoverBg300}`}>
        <span
          style={{
            paintOrder: 'stroke fill',
            color: 'transparent',
            WebkitTextStroke: `2px ${
              number === 1 ? '#498BD9' : number === 2 ? '#4BD2B9' : number === 3 ? '#CB5056' : '#cccccc'
            }`
          }}
          className='mr-3 text-[24px] font-extrabold md:text-[30px] lg:text-[40px]'
        >
          {number}
        </span>
        <div className='mr-2 flex flex-grow items-center'>
          <div
            className='relative mr-2 h-[30px] w-[30px] shrink-0 cursor-pointer overflow-hidden rounded-md md:h-[40px] md:w-[40px] lg:h-[60px] lg:w-[60px]'
            onClick={() => handleRedirect(item)}
          >
            <img src={item.thumbnail} />
            <PlayFillIcon
              className={`${ColorText500} absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] group-hover:inline-block`}
              width='16px'
              height='16px'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <h5 className='mb-1 grow text-[14px] font-bold text-light-mode dark:text-dark-mode'>{item.title}</h5>
            <NameArtist artists={item.artists} />
          </div>
        </div>
        {totalScore && (
          <span className={`${ColorText500} hidden font-bold md:inline-block md:text-[16px] lg:text-[20px] `}>
            {Math.round((item.score * 100) / totalScore)}%
          </span>
        )}
      </div>
    </div>
  )
}
export default ZingChartItem
