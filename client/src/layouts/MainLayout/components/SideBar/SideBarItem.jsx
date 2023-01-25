import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import { PlayVideoIcon } from '~/components/Icons/Icons'
const SideBarItem = ({ item, icon, setActive, active }) => {
  let Icon = icon
  const color = useSelector((state) => state.app.color)
  const darkMode = useSelector((state) => state.app.darkMode)

  // const bg0 = `${color === 'B' ? `B-0` : color === 'C' ? 'C-0' : color === 'D' ? 'D-0' : 'A-0'}`
  // const bg100 = `${color === 'B' ? `B-100` : color === 'C' ? 'C-100' : color === 'D' ? 'D-100' : 'A-100'}`
  // const bg200 = `${color === 'B' ? `B-200` : color === 'C' ? 'C-200' : color === 'D' ? 'D-200' : 'A-200'}`
  // const bg300 = `${color === 'B' ? `B-300` : color === 'C' ? 'C-300' : color === 'D' ? 'D-300' : 'A-300'}`
  return (
    <li
      key={item.path}
      onClick={() => setActive(item.id)}
      className={`${
        active === item.id
          ? `border-l-solid ${
              color === 'B'
                ? `border-l-B-300 bg-B-0`
                : color === 'C'
                ? 'border-l-C-300 bg-C-0'
                : color === 'D'
                ? 'border-l-D-300 bg-D-0'
                : 'border-l-A-300 bg-A-0'
            } w-full border-l-[3px] py-2 pl-[25px]`
          : 'w-full py-2 pl-[28px]'
      }`}
    >
      <Button to={item.path} type='text' className='group relative'>
        <Icon />
        <span className={`text-light ml-[10px] font-[Inter] text-[13px] font-bold leading-4`}>{item.title}</span>
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
