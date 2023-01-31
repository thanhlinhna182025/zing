import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import { PlayVideoIcon } from '~/components/Icons/Icons'
const SideBarItem = ({ item, icon, setActive, active }) => {
  let Icon = icon
  const color = useSelector((state) => state.app.color)

  return (
    <li
      key={item.path}
      onClick={() => setActive(item.id)}
      className={`${
        active === item.id
          ? ` ${
              color === 'B'
                ? `border-l-B-300 bg-B-0`
                : color === 'C'
                ? 'border-l-C-300 bg-C-0'
                : color === 'D'
                ? 'border-l-D-300 bg-D-0'
                : 'border-l-A-300 bg-A-0'
            } border-l-solid w-full border-l-[3px] py-2 pl-[25px]`
          : 'w-full py-2 pl-[28px]'
      }`}
    >
      <Button to={item.path} type='text' className='group relative'>
        <Icon className='text-light-mode dark:text-dark-mode' />
        <span className='ml-[10px] font-[Inter] text-[13px] font-bold leading-4 text-light-mode dark:text-dark-mode'>
          {item.title}
        </span>
        {item?.liveIcon && (
          <div className='ml-2 rounded-[4px] bg-[#ff0a0a] px-[7px] py-[2px] font-[Inter] text-[8px] font-bold tracking-[0.58px]'>
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
