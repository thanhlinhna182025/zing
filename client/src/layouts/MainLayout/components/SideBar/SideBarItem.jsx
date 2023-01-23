import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import { PlayVideoIcon } from '~/components/Icons/Icons'
const SideBarItem = ({ item, icon, setActive, active }) => {
  let Icon = icon
  const color = useSelector((state) => state.app.color)
  const bgColor = `${color === 'B' ? `bg-BB` : color === 'C' ? 'bg-CC' : color === 'D' ? 'bg-DD' : 'bg-AA'}`
  return (
    <li
      key={item.path}
      onClick={() => setActive(item.id)}
      className={`${
        active === item.id
          ? `border-l-solid border-l-purpleA84-600 w-full border-l-[3px] ${bgColor} py-2 pl-[25px]`
          : 'w-full py-2 pl-[28px]'
      }`}
    >
      <Button to={item.path} type='text' className='group relative'>
        <Icon />
        <span
          className={`ml-[10px] font-[Inter] text-[13px] font-bold leading-4  hover:text-white  ${
            active === item.id ? 'text-white' : 'text-light'
          }`}
        >
          {item.title}
        </span>
        {item?.liveIcon && (
          <div className='ml-2 rounded-[4px] bg-[#ff0a0a] px-[7px] py-[2px] font-[Inter] text-[8px] font-bold tracking-[0.58px] text-white'>
            LIVE
          </div>
        )}
        {item?.playVideoIcon && (
          <PlayVideoIcon className='absolute right-[20px] hidden group-hover:inline-block' width='19px' height='19px' />
        )}
      </Button>
    </li>
  )
}
export default SideBarItem
