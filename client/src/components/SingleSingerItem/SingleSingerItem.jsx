import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import { AddUserIcon } from '~/components/Icons'
import useColor from '~/hooks/useColor'
import { numberToStringFollow } from '~/utils/hepper'

const SingleSingerItem = ({ item }) => {
  const { bg100Color, bg200Color } = useColor()

  return (
    <div className='flex-col px-[14px]'>
      <div className='mb-4'>
        <Link to={`/singer/${item.alias}`}>
          <img alt={item.title} src={item?.thumbnail} className='rounded-full' />
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <Link to={`/singer/${item.alias}`} className='mb-[2px] text-sm text-light-mode dark:text-dark-mode'>
          {item?.name}
        </Link>
        <span className='mb-4 text-xs font-bold text-light-mode dark:text-dark-mode'>
          {numberToStringFollow(item?.totalFollow)} quan tâm
        </span>
        <Button type='primary' rounded className={`${bg200Color} flex items-center py-[6px] px-[19px]`}>
          <AddUserIcon width='14px' height='14px' />
          <span className='ml-1 text-xs font-semibold'>QUAN TÂM</span>
        </Button>
      </div>
    </div>
  )
}
export default SingleSingerItem
