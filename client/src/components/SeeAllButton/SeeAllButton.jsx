import Button from '~/components/Button'
import { RightArrowIcon } from '~/components/Icons'

const SeeAllButton = ({ to }) => {
  return (
    <Button
      to={to}
      type='text'
      className='mr-[14px] flex items-center py-[3px] px-6 text-xs font-bold text-gray hover:text-secondary-100'
    >
      TẤT CẢ
      <RightArrowIcon className='ml-1 text-gray' width='14px' height='14px' />
    </Button>
  )
}
export default SeeAllButton
