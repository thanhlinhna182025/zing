import { TrendUpIcon } from '~/components/Icons'
import useColors from '~/hooks/useColors'

const SuggestItem = ({ item, handleSuggestKeyword }) => {
  const { ColorHoverBg200 } = useColors()
  return (
    <li
      onClick={() => handleSuggestKeyword(item.title)}
      className={` flex cursor-pointer items-center rounded-[4px] py-[10px] px-2 ${ColorHoverBg200}`}
    >
      <TrendUpIcon className='mr-2 text-light-mode dark:text-dark-mode' />
      <span className='text-sm font-semibold text-light-mode dark:text-dark-mode'>{item.title}</span>
    </li>
  )
}
export default SuggestItem
