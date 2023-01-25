import TippyHeadless from '@tippyjs/react/headless'; // different import path!
import { forwardRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '~/components/Button/Button'
import {
  ClotheIcon,
  NextArrowIcon,
  PrevArrowIcon,
  SearchIcon,
  SettingIcon,
  UpLoadIcon,
  UserIcon,
  VipIcon
} from '~/components/Icons/Icons'
import TippyString from '~/components/TippyString'
import DisplayModal from './DisplayModal'
import SearchModal from './SearchModal'
import SettingModal from './SettingModal'

const Header = ({ isTransparent }) => {
  const color = useSelector((state) => state.app.color)
  const bg200Color = `${
    color === 'B' ? `bg-B-200` : color === 'C' ? 'bg-C-200' : color === 'D' ? 'bg-D-200' : ' bg-A-200'
  }`
  const bgColor = `${
    color === 'B' ? `bg-B` : color === 'C' ? 'bg-C' : color === 'D' ? 'bg-D' : ' bg-A'
  }`
  const [visibleSetting, setVisibleSetting] = useState(false)
  const [visibleDisplay, setVisibleDisplay] = useState(false)
  const [visibleSearch, setVisibleSearch] = useState(false)
  const showSetting = () => setVisibleSetting(true)
  const hideSetting = () => setVisibleSetting(false)
  const showDisplay = () => setVisibleDisplay(true)
  const hideDisplay = () => setVisibleDisplay(false)
  const showSearch = () => setVisibleSearch(true)
  const hideSearch = () => setVisibleSearch(false)

  return (
    <header
      className={`fixed ${
        isTransparent ? 'bg-transparent' : bg200Color
      } top-0 right-0 z-10 flex h-[70px] w-[calc(100%-240px)]  flex-1 items-center justify-between px-main-margin `}
    >
      <div className='flex items-center'>
        <div className='flex items-center'>
          <Button type='text' className='mr-[26px] ml-[2px] translate-y-[-1px]'>
            <PrevArrowIcon className='  text-white' width='19px' height='19px' />
          </Button>
          <Button type='text' className='translate-y-[-1px]'>
            <NextArrowIcon className='text-white' width='19px' height='19px' />
          </Button>
        </div>
        <TippyHeadless
          visible={visibleSearch}
          onClickOutside={hideSearch}
          interactive={true}
          placement='bottom'
          render={(attrs) => <SearchModal {...attrs} tabIndex='0' />}
        >
          <form className={`ml-[22px] flex w-search-input-width items-center rounded-full ${bgColor}`}>
            <Button type='text' rounded className=' flex h-[38px] w-[38px] items-center justify-center '>
              <SearchIcon className='translate-y-[1px] translate-x-[1px] text-white' width='20px' height='20px' />
            </Button>
            <input
              onClick={visibleSearch ? hideSearch : showSearch}
              placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
              className='w-[400px] rounded-full  border-none bg-transparent py-[8px] pl-[1px] pr-2 text-white outline-none placeholder:font-[Inter] placeholder:text-[14px] placeholder:font-[600]'
            />
          </form>
        </TippyHeadless>
      </div>
      <div className='flex  items-center  px-[10px]'>
        <div>
          <TippyHeadless
            visible={visibleDisplay}
            onClickOutside={hideDisplay}
            interactive={true}
            placement='bottom'
            render={(attrs) => <DisplayModal {...attrs} hideDisplay={hideDisplay} tabIndex='0' />}
          >
            <span
              onClick={visibleDisplay ? hideDisplay : showDisplay}
              className='mr-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[hsla(0,0%,100%,0.2)] '
            >
              <ClotheIcon className='text-white' width='16px' height='16px' />
            </span>
          </TippyHeadless>
        </div>
        <TippyString content='Nâng cấp VIP'>
          <span className='mr-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[hsla(0,0%,100%,0.2)] '>
            <VipIcon className={`text-white`} width='18px' height='18px' />
          </span>
        </TippyString>
        <TippyString content='Upload'>
          <span className='mr-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[hsla(0,0%,100%,0.2)] '>
            <UpLoadIcon className='text-white' width='18px' height='18px' />
          </span>
        </TippyString>
        <TippyHeadless
          visible={visibleSetting}
          onClickOutside={hideSetting}
          placement='bottom-end'
          interactive={true}
          render={(attrs) => <SettingModal tabIndex='0' {...attrs} />}
        >
          <span
            onClick={visibleSetting ? hideSetting : showSetting}
            className='mr-3 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[hsla(0,0%,100%,0.2)] '
          >
            <SettingIcon className='text-white' width='16px' height='16px' />
          </span>
        </TippyHeadless>

        <Button type='text' to='#' rounded className=' flex h-[40px] w-[40px] items-center justify-center '>
          <UserIcon className='text-white' width='40px' height='40px' />
        </Button>
      </div>
    </header>
  )
}
export default forwardRef(Header)
