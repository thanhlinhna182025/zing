import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import { numberToStringFollow } from '~/utils/hepper'
import { AddUserIcon } from '../Icons/Icons'
const MayBeYouLikeItem = ({ item }) => {
  return (
    <div className='flex-col px-[14px]'>
      <div className='mb-4'>
        <img src={item?.thumbnail} className='rounded-full' />
      </div>
      <div className='flex flex-col items-center'>
        <Link className='mb-[2px] text-sm text-white'>{item?.name}</Link>
        <span className='mb-4 text-xs font-bold text-gray'>{numberToStringFollow(item?.totalFollow)} quan tâm</span>
        <Button type='primary' rounded className='flex items-center bg-main-200 py-[6px] px-[19px]'>
          <AddUserIcon width='14px' height='14px' />
          <span className='ml-1 text-xs font-semibold'>QUAN TÂM</span>
        </Button>
      </div>
    </div>
  )
}
export default MayBeYouLikeItem