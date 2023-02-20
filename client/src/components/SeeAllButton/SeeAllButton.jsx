import Button from '~/components/Button'
import { RightArrowIcon } from '~/components/Icons'
import useColors from '~/hooks/useColors'

const SeeAllButton = ({ to }) => {
  const { ColorHoverText500, ColorHoverTextDark500, ColorText500 } = useColors()
  return (
    <Button
      to={to}
      type='text'
      className={`${ColorHoverText500} ${ColorHoverTextDark500} flex items-center text-xs font-bold text-light-mode dark:text-dark-mode sm:mr-[14px] sm:py-[3px] sm:px-6`}
    >
      TẤT CẢ
      <RightArrowIcon className={`${ColorText500} ml-1 `} width='14px' height='14px' />
    </Button>
  )
}
export default SeeAllButton
