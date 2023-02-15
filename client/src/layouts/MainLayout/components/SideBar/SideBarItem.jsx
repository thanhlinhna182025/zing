import { Link } from 'react-router-dom'
import { PlayVideoIcon } from '~/components/Icons/Icons'
import useColors from '~/hooks/useColors'
const SideBarItem = ({ item, icon, setActive, active, disabled }) => {
  let Icon = icon
  const { ColorBg100, ColorBorder300, ColorHoverText500, ColorHoverTextDark500 } = useColors()
  return (
    <li
      className={`${
        active === item.id ? `${ColorBg100} ${ColorBorder300} lg:border-l-4 lg:border-solid lg:pl-[24px]` : 'lg:pl-7'
      } group relative flex w-full justify-center py-3 lg:justify-start`}
      key={item?.path}
      onClick={() => setActive(item.id)}
    >
      <Link
        className={`${item.disabled && 'cursor-not-allowed'} flex items-center `}
        to={`${disabled ? '#' : item.path}`}
        disabled={disabled}
        type='text'
      >
        <Icon className={`${ColorHoverText500} ${ColorHoverTextDark500} mr-2 text-light-mode dark:text-dark-mode`} />
        <span className={`hidden items-center lg:flex `}>
          <span className='mr-2 text-sm font-bold text-light-mode dark:text-dark-mode'>{item.title}</span>
          {item?.liveIcon && (
            <span className='rounded-[3px] bg-red-600 p-[2px] text-[10px] font-semibold text-white'>LIVE</span>
          )}
        </span>
      </Link>
      <span className='absolute top-1/2 right-5 hidden translate-y-[-50%] lg:group-hover:inline-block'>
        {item?.playVideoIcon && (
          <PlayVideoIcon className='text-light-mode dark:text-dark-mode' width='19px' height='19px' />
        )}
      </span>
    </li>
  )
}
export default SideBarItem
