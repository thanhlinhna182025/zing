import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LogoIcon, MP3ZingLogoIcon, PlayListIcon, SettingIcon } from '~/components/Icons/Icons'
import configs from '~/configs'
import { ListBottom, ListTop } from '~/Data'
import { setDisplayMode, setRightMode, toggleRightMode } from '~/feature/app/appSlice'
import useColors from '~/hooks/useColors'
import SideBarItem from './SideBarItem'
const SideBar = () => {
  const [active, setActive] = useState(2)
  const { ColorBg200, ColorBg300, ColorBorder500, Color70Bg200 } = useColors()
  const sidebarMode = useSelector((state) => state.app.sidebarMode)
  const rightMode = useSelector((state) => state.app.rightMode)
  const displayMode = useSelector((state) => state.app.displayMode)
  const musicId = useSelector((state) => state.music.musicId)

  const dispatch = useDispatch()

  const handleRightMode = () => {
    dispatch(toggleRightMode())
  }
  const showDisplay = () => {
    dispatch(setDisplayMode(true))
    if (rightMode) {
      dispatch(setRightMode(false))
    }
  }
  const hideDisplay = () => dispatch(setDisplayMode(false))
  return (
    <aside
      className={`${Color70Bg200} ${sidebarMode ? 'w-sidebar-width' : 'w-sidebar-width-sm'} ${
        musicId ? 'h-[calc(100vh-var(--player-height-sm))] lg:h-[calc(100vh-var(--player-height))]' : 'h-[100vh]'
      } fixed top-0 left-0 z-[20] flex-shrink-0 transition-all duration-1000 ease-linear md:shadow-lg lg:w-sidebar-width `}
    >
      <div className='relative flex h-full w-full flex-col items-center'>
        <div className='flex h-[70px] w-[70px] items-center justify-center '>
          <Link to={configs.routes.home}>
            <LogoIcon className={`hidden lg:inline-block`} />
            <MP3ZingLogoIcon className={`lg:hidden`} width='43px' height='43px' />
          </Link>
        </div>
        <nav className='w-full'>
          <ul className='w-full'>
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
        <nav className='relative flex h-[calc(100vh-var(--header-height)-var(--player-height))] w-full flex-col items-center scrollbar'>
          <ul className='mb-2 w-full'>
            {ListBottom.map((item, index) => {
              let Icon = item.icon
              let disabled = item.disabled === true ? true : false
              return (
                <SideBarItem
                  key={item.path}
                  disabled={disabled}
                  icon={Icon}
                  item={item}
                  setActive={setActive}
                  active={active}
                />
              )
            })}
          </ul>
          <div className='mb-3 flex flex-col md:hidden'>
            <button
              onClick={handleRightMode}
              className={`${rightMode && ColorBg300} mb-5 rounded-[3px]  p-1 shadow hover:shadow-lg`}
            >
              <PlayListIcon className='text-light-mode dark:text-dark-mode' width='18px' height='18px' />
            </button>
            <button
              onClick={displayMode ? hideDisplay : showDisplay}
              className={`rounded-[3px]  p-1 shadow hover:shadow-lg`}
            >
              <SettingIcon className='text-light-mode dark:text-dark-mode' width='18px' height='18px' />
            </button>
          </div>
        </nav>
      </div>
    </aside>
  )
}
export default SideBar
