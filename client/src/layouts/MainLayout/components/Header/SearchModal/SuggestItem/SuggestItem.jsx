import { TrendUpIcon } from '~/components/Icons'
import useColors from '~/hooks/useColors'

const SuggestItem = ({ item, handleSuggestKeyword }) => {
  const { ColorHoverBg200 } = useColors()
  return (
    <li
      onClick={() => handleSuggestKeyword(item.title)}
      className={` flex w-full cursor-pointer items-center rounded-[4px] py-1 px-1 md:py-2 md:px-2 lg:py-[10px] ${ColorHoverBg200}`}
    >
      <TrendUpIcon className='mr-2 text-light-mode dark:text-dark-mode' />
      <span className='text-sm font-semibold text-light-mode dark:text-dark-mode'>{item.title}</span>
    </li>
  )
}
export default SuggestItem
