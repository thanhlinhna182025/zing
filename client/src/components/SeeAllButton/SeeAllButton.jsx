import Button from '~/components/Button'
import { RightArrowIcon } from '~/components/Icons'

const SeeAllButton = ({ to }) => {
  return (
    <Button
      to={to}
      type='text'
      className='hover:text-secondary-100 flex items-center py-1 px-1 text-xs font-bold text-light-mode dark:text-dark-mode sm:mr-[14px] sm:py-[3px] sm:px-6'
    >
      TẤT CẢ
      <RightArrowIcon className='ml-1 text-light-mode dark:text-dark-mode' width='14px' height='14px' />
    </Button>
  )
}
export default SeeAllButton
