import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import { AddUserIcon } from '~/components/Icons'
import useColors from '~/hooks/useColors'
import { numberToStringFollow } from '~/utils/hepper'

const SingleSingerItem = ({ item }) => {
  const { ColorBg200, ColorHoverText500, ColorHoverTextDark500 } = useColors()

  return (
    <div className='flex-col px-[14px]'>
      <div className='mb-4'>
        <Link to={`/singer/${item.alias}`}>
          <img alt={item.title} src={item?.thumbnail} className='rounded-full' />
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <Link
          to={`/singer/${item.alias}`}
          className={`${ColorHoverText500} ${ColorHoverTextDark500} mb-[2px] text-sm text-light-mode dark:text-dark-mode`}
        >
          {item?.name}
        </Link>
        <span className='mb-4 text-xs font-bold text-light-mode dark:text-dark-mode'>
          {numberToStringFollow(item?.totalFollow)} quan tâm
        </span>
        <Button
          type='primary'
          rounded
          className={`${ColorBg200} flex items-center py-[6px] px-[19px] shadow md:shadow-md`}
        >
          <AddUserIcon width='14px' height='14px' />
          <span className='ml-1 text-xs font-semibold'>QUAN TÂM</span>
        </Button>
      </div>
    </div>
  )
}
export default SingleSingerItem
