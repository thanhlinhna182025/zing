import Button from '~/components/Button'
import { RightArrowIcon } from '~/components/Icons'

const SeeAllButton = ({ to }) => {
  return (
    <Button
      to={to}
      type='text'
      className='hover:text-secondary-100 sm:mr-[14px] flex items-center py-1 px-1 sm:py-[3px] sm:px-6 text-xs font-bold text-light-mode dark:text-dark-mode'
    >
      TẤT CẢ
      <RightArrowIcon className='ml-1 text-light-mode dark:text-dark-mode' width='14px' height='14px' />
    </Button>
  )
}
export default SeeAllButton
