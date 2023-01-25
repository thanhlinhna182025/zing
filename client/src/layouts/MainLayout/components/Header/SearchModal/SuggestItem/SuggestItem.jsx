import { useSelector } from 'react-redux'
import { TrendUpIcon } from '~/components/Icons'

const SuggestItem = ({ item }) => {
  const color = useSelector((state) => state.app.color)
  const bgColor = `${color === 'B' ? `bg-B` : color === 'C' ? 'bg-C' : color === 'D' ? 'bg-D' : ' bg-A'}`
  const bg100Color = `${
    color === 'B' ? `bg-B-100` : color === 'C' ? 'bg-C-100' : color === 'D' ? 'bg-D-100' : ' bg-A-100'
  }`
  return (
    <li className={` flex cursor-pointer items-center rounded-[4px] py-[10px] px-2 hover:${bg100Color}`}>
      <TrendUpIcon className='mr-2 text-white' />
      <span className='text-sm font-semibold text-white'>{item.title}</span>
    </li>
  )
}
export default SuggestItem
