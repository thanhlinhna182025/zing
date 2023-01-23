import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import {
  AddIcon,
  DiscoveryIcon,
  FollowIcon,
  LogoIcon,
  MusicBageIcon,
  MVIcon,
  NewMusicIcon,
  RadioIcon,
  Top100Icon,
  TypeMusicIcon,
  ZingChatIcon
} from '~/components/Icons/Icons'
import configs from '~/configs'
import SideBarItem from './SideBarItem'

const ListTop = [
  {
    id: 1,
    path: configs.routes.login,
    icon: MusicBageIcon,
    title: 'Cá Nhân'
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
    liveIcon: true
  },
  {
    id: 5,
    path: configs.routes.follow,
    icon: FollowIcon,
    title: 'Theo Dõi'
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
    title: 'MV'
  }
]

const SideBar = () => {
  const [active, setActive] = useState(2)
  const color = useSelector((state) => state.app.color)
  const bgColor = `${color === 'B' ? `bg-BB` : color === 'C' ? 'bg-CC' : color === 'D' ? 'bg-DD' : 'bg-AA'}`

  return (
    <div className='fixed left-0 top-0 w-size-bar-width flex-shrink-0 '>
      <div className='flex h-[70px] w-full  items-center pl-[28px]'>
        <Link to={configs.routes.home}>
          <LogoIcon className='-translate-y-[2px]' />
        </Link>
      </div>
      <nav className='w-full'>
        <ul className='w-full '>
          {ListTop.map((item, index) => {
            let Icon = item.icon
            return <SideBarItem key={item.path} icon={Icon} item={item} setActive={setActive} active={active} />
          })}
        </ul>
      </nav>
      <div className='m-auto  mt-[15px] h-[1px] w-[190px] bg-main-200'></div>
      <div className='h-[247px] scrollbar'>
        <nav className='mt-[15px] w-full'>
          <ul className='w-full '>
            {ListBottom.map((item, index) => {
              let Icon = item.icon
              return <SideBarItem key={item.path} icon={Icon} item={item} setActive={setActive} active={active} />
            })}
          </ul>
        </nav>
        <div className='bg-purpleA84-700 mx-5 mt-[15px] flex flex-col items-center rounded-lg px-2 py-[15px]'>
          <p className='mb-[10px] text-center font-[Inter] text-[12px] font-semibold text-white'>
            Đăng nhập để khám phá playlist dành riêng cho bạn
          </p>
          <Button
            type='outline'
            hasBorder
            className='w-[144px] rounded-full px-[15px] py-[6px] text-[13px] font-semibold hover:opacity-90'
          >
            ĐĂNG NHẬP
          </Button>
        </div>
        <div className='mx-5 mt-[15px] flex flex-col items-center rounded-lg  bg-gradient-to-br from-[#5F4DE6] to-[#C26BD7] px-2 py-[15px]'>
          <p className='mb-[10px] text-center font-[Inter] text-[12px] font-semibold text-white'>
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
        className='flex items-center justify-start border-t-[1px] border-solid border-main-200 pt-[14px] pb-[14px]'
      >
        <AddIcon className='ml-[24px] mr-[6px] text-white' />
        <span className='font-["Inter"] text-[14px] font-bold leading-5 text-white'>Tạo playlist mới</span>
      </Button>
    </div>
  )
}
export default SideBar
