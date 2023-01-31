import { TrendUpIcon } from '~/components/Icons'

const SuggestItem = ({ item, handleSuggestKeyword }) => {
  return (
    <li
      onClick={() => handleSuggestKeyword(item.title)}
      className={` flex cursor-pointer items-center rounded-[4px] py-[10px] px-2 hover:bg-hover-light-mode dark:hover:bg-hover-dark-mode`}
    >
      <TrendUpIcon className='mr-2 text-light-mode dark:text-dark-mode' />
      <span className='text-sm font-semibold text-light-mode dark:text-dark-mode'>{item.title}</span>
    </li>
  )
}
export default SuggestItem
