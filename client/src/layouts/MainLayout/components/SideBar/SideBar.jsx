import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import {
  AddIcon,
  DiscoveryIcon,
  FollowIcon,
  LogoIcon,
  MP3ZingLogoIcon,
  MusicBageIcon,
  MVIcon,
  NewMusicIcon,
  NextArrowIcon,
  PrevArrowIcon,
  RadioIcon,
  Top100Icon,
  TypeMusicIcon,
  ZingChatIcon
} from '~/components/Icons/Icons'
import configs from '~/configs'
import { toggleSideBarMode } from '~/feature/app/appSlice'
import useColor from '~/hooks/useColor'
import SideBarItem from './SideBarItem'
const ListTop = [
  {
    id: 1,
    path: configs.routes.login,
    icon: MusicBageIcon,
    title: 'Cá Nhân',
    disabled: true
  },
  {
    id: 2,
    path: configs.routes.discovery,
    icon: DiscoveryIcon,
    title: ' Khám Phá'
  },
  {
    id: 3,
    path: configs.routes.zingchart,
    icon: ZingChatIcon,
    title: '#zingchart',
    playVideoIcon: true
  },
  {
    id: 4,
    path: configs.routes.radio,
    icon: RadioIcon,
    title: 'Radio',
    playVideoIcon: true,
    liveIcon: true,
    disabled: true
  },
  {
    id: 5,
    path: configs.routes.follow,
    icon: FollowIcon,
    title: 'Theo Dõi',
    disabled: true
  }
]

const ListBottom = [
  {
    id: 6,
    path: configs.routes.newMusic,
    icon: NewMusicIcon,
    title: 'Nhạc Mới',
    playVideoIcon: true
  },
  {
    id: 7,
    path: configs.routes.typeMusic,
    icon: TypeMusicIcon,
    title: ' Thể Loại'
  },
  {
    id: 8,
    path: configs.routes.top100,
    icon: Top100Icon,
    title: 'Top 100'
  },

  {
    id: 9,
    path: configs.routes.mv,
    icon: MVIcon,
    title: 'MV',
    disabled: true
  }
]

const SideBar = () => {
  const [active, setActive] = useState(2)
  const { bg100Color, bg300Color } = useColor()
  const sidebarMode = useSelector((state) => state.app.sidebarMode)
  const dispatch = useDispatch()

  const handleTogleSideBarMode = () => {
    dispatch(toggleSideBarMode())
  }

  return (
    <div
      className={`${
        sidebarMode ? 'w-size-bar-width' : 'w-sidebar-width-sm'
      }  fixed left-0 top-0 z-[9999999] h-[calc(100vh-var(--player-height-sm))] flex-shrink-0 transition-all  duration-500   ease-linear md:w-size-bar-width lg:h-[calc(100vh-var(--player-height))] ${bg100Color}`}
    >
      <div className='flex h-[70px] w-full items-center justify-center md:pl-[28px]'>
        <Link to={configs.routes.home}>
          <MP3ZingLogoIcon className='inline-block md:hidden' />
          <LogoIcon className='hidden -translate-y-[2px] md:inline-block' />
        </Link>
      </div>
      <nav className='w-full'>
        <ul className='w-full '>
          {ListTop.map((item) => {
            let Icon = item.icon
            let disabled = item.disabled === true ? true : false
            return (
              <SideBarItem
                disabled={disabled}
                key={item.path}
                icon={Icon}
                item={item}
                setActive={setActive}
                active={active}
              />
            )
          })}
        </ul>
      </nav>
      <div className='m-auto  mt-[15px] h-[1px] w-[190px] bg-gray'></div>
      <div className='h-[247px] scrollbar'>
        <nav className='mt-[15px] w-full'>
          <ul className='w-full '>
            {ListBottom.map((item, index) => {
              let Icon = item.icon
              return <SideBarItem key={item.path} icon={Icon} item={item} setActive={setActive} active={active} />
            })}
          </ul>
        </nav>
        <div className='bg-purpleA84-700 mx-5 mt-[15px] hidden flex-col  items-center rounded-lg px-2 py-[15px] md:flex'>
          <p className='mb-[10px] ml-[10px] text-center font-[Inter] text-[12px]  font-bold leading-4 text-light-mode dark:text-dark-mode'>
            Đăng nhập để khám phá playlist dành riêng cho bạn
          </p>
          <Button
            type='outline'
            hasBorder
            className={`w-[144px] rounded-full px-[15px] py-[6px] text-[13px] font-semibold text-light-mode hover:opacity-90 dark:text-dark-mode ${bg300Color}`}
          >
            ĐĂNG NHẬP
          </Button>
        </div>
        <div className='mx-5 mt-[15px] hidden flex-col  items-center rounded-lg bg-gradient-to-br  from-[#5F4DE6] to-[#C26BD7] px-2 py-[15px] md:flex'>
          <p className='mb-[10px] text-center font-[Inter] text-[12px] font-semibold text-light-mode dark:text-dark-mode'>
            Nghe nhạc không quản cáo cùng kho nhạc VIP
          </p>
          <Button
            type='outline'
            className='w-[144px] rounded-full bg-yellow-400 px-[15px] py-[6px] text-[13px] font-semibold text-black hover:opacity-90'
          >
            NÂNG CẤP VIP
          </Button>
        </div>
      </div>
      <Button
        isBlock
        className={`${bg300Color} hidden items-center  justify-start border-t-[1px] border-solid border-gray pt-[14px] pb-[14px] md:flex`}
      >
        <AddIcon className='ml-[24px] mr-[6px] text-light-mode dark:text-dark-mode' />
        <span className=' font-[Inter] text-[14px] font-bold leading-5 text-light-mode dark:text-dark-mode '>
          Tạo playlist mới
        </span>
      </Button>
      {sidebarMode ? (
        <button
          onClick={handleTogleSideBarMode}
          className='fixed bottom-[90px] left-[20px] rounded-full border-[1px] border-solid  border-[#ccc] p-2'
        >
          <PrevArrowIcon className='text-light-mode dark:text-dark-mode' width='20px' height='20px' />
        </button>
      ) : (
        <button
          onClick={handleTogleSideBarMode}
          className='fixed bottom-[90px] left-[20px] rounded-full border-[1px] border-solid  border-[#ccc] p-2'
        >
          <NextArrowIcon className='text-light-mode dark:text-dark-mode' width='20px' height='20px' />
        </button>
      )}
    </div>
  )
}
export default SideBar
