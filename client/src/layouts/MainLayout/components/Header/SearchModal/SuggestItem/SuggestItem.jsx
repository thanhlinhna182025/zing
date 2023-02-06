import { TrendUpIcon } from '~/components/Icons'
import useColorHover from '~/hooks/useColorHover'

const SuggestItem = ({ item, handleSuggestKeyword }) => {
  const { hoverColor300 } = useColorHover()
  return (
    <li
      onClick={() => handleSuggestKeyword(item.title)}
      className={` flex cursor-pointer items-center rounded-[4px] py-[10px] px-2 ${hoverColor300}`}
    >
      <TrendUpIcon className='mr-2 text-light-mode dark:text-dark-mode' />
      <span className='text-sm font-semibold text-light-mode dark:text-dark-mode'>{item.title}</span>
    </li>
  )
}
export default SuggestItem
