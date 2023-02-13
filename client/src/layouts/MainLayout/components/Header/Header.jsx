import TippyHeadless from '@tippyjs/react/headless'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { getSearch, setDisplayMode } from '~/feature/app/appSlice'
import useColors from '~/hooks/useColors'
import useDebounce from '~/hooks/useDebounce'
import SearchModal from './SearchModal'
import SettingModal from './SettingModal'

const Header = ({ isTransparent }) => {
  const { ColorBg100, ColorBg500 } = useColors()
  const [visibleSetting, setVisibleSetting] = useState(false)
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [relatedKeywords, setRelatedKeywords] = useState([])
  const [formWidth, setFormWidth] = useState(400)
  const debounce = useDebounce(keyword, 500)
  const displayMode = useSelector((state) => state.app.displayMode)
  const dispatch = useDispatch()
  const showSetting = () => setVisibleSetting(true)
  const hideSetting = () => setVisibleSetting(false)
  const showDisplay = () => dispatch(setDisplayMode(true))
  const hideDisplay = () => dispatch(setDisplayMode(false))
  const showSearch = () => setVisibleSearch(true)
  const hideSearch = () => setVisibleSearch(false)

  useEffect(() => {
    if (!debounce.trim()) {
      setRelatedKeywords([])
      return
    }
    dispatch(getSearch(debounce))
      .unwrap()
      .then((res) => {
        if (res.top) {
          setRelatedKeywords([res.top].concat(res.songs.slice(0, 5)))
        } else if (res.counter.songs !== 0 && res.counter.artist !== 0) {
          setRelatedKeywords(res.songs.slice(0, 4).concat(res.artists.slice(0, 2)) | [])
        } else if (res.counter.songs !== 0 && res.counter.artist === 0) {
          setRelatedKeywords(res.songs?.slice(0, 6) || [])
        } else {
          setRelatedKeywords([])
        }
      })
      .catch((err) => console.log(err))
  }, [debounce])

  const handleChange = (e) => {
    const text = e.target.value
    if (!text.startsWith(' ')) {
      setKeyword(text)
    }
  }
  const handleClearKeyword = () => {
    setKeyword('')
    hideSearch()
  }
  const handleSuggestKeyword = (keyword) => {
    setKeyword(keyword)
  }
  const formRef = useRef()
  useEffect(() => {
    const handleResize = () => {
      if (!formRef) {
        return
      } else {
        setFormWidth(formRef.current.getBoundingClientRect().width)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      if (formRef) {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <header
      className={`fixed ${
        isTransparent ? 'bg-transparent' : `${ColorBg500} shadow md:shadow-md lg:shadow-lg`
      } top-0 z-10 ml-[calc(var(--sidebar-width-sm)-8px)] flex h-[70px] w-[calc(100%-var(--sidebar-width-sm))] flex-1 items-center justify-center px-5 md:justify-between md:px-0 lg:right-0 lg:ml-0 lg:w-[calc(100%-var(--sidebar-width))] lg:px-main-margin `}
    >
      <div className='flex w-full items-center justify-center md:justify-start'>
        <div className='hidden items-center lg:ml-[20px] lg:flex'>
          <Button type='text' className='mr-[26px] ml-[2px] translate-y-[-1px] '>
            <PrevArrowIcon className='text-light-mode dark:text-dark-mode' width='19px' height='19px' />
          </Button>
          <Button type='text' className='translate-y-[-1px]'>
            <NextArrowIcon className='text-light-mode dark:text-dark-mode' width='19px' height='19px' />
          </Button>
        </div>
        <TippyHeadless
          visible={visibleSearch}
          onClickOutside={hideSearch}
          interactive={true}
          placement='bottom'
          render={(attrs) => (
            <SearchModal
              {...attrs}
              formWidth={formWidth}
              relatedKeywords={relatedKeywords}
              handleClearKeyword={handleClearKeyword}
              handleSuggestKeyword={handleSuggestKeyword}
              tabIndex='0'
            />
          )}
        >
          <form
            ref={formRef}
            className={`flex shadow w-full max-w-[500px] items-center rounded-full md:ml-[22px] lg:w-search-input-width ${ColorBg100}`}
          >
            <Button type='text' rounded className=' flex h-[38px] w-[38px] items-center justify-center '>
              <SearchIcon
                className='translate-y-[1px] translate-x-[1px] text-light-mode dark:text-dark-mode'
                width='20px'
                height='20px'
              />
            </Button>
            <input
              value={keyword}
              onChange={handleChange}
              onClick={visibleSearch ? hideSearch : showSearch}
              placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
              className='w-[calc(100%-50px)] rounded-full  border-none bg-transparent py-[8px] pl-[1px] pr-2 text-light-mode outline-none placeholder:font-[Inter] placeholder:text-[14px] placeholder:font-[600] dark:text-dark-mode'
            />
          </form>
        </TippyHeadless>
      </div>
      <div className='hidden items-center px-[10px] md:flex'>
        <span
          onClick={displayMode ? hideDisplay : showDisplay}
          className='mr-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[hsla(0,0%,100%,0.2)] shadow md:shadow-md '
        >
          <ClotheIcon width='20px' height='20px' />
        </span>
        <TippyString content='Nâng cấp VIP'>
          <span className='mr-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[hsla(0,0%,100%,0.2)] shadow md:shadow-md '>
            <VipIcon className='text-light-mode dark:text-dark-mode' width='18px' height='18px' />
          </span>
        </TippyString>
        <TippyString content='Upload'>
          <span className='mr-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[hsla(0,0%,100%,0.2)] shadow md:shadow-md '>
            <UpLoadIcon className='text-light-mode dark:text-dark-mode' width='18px' height='18px' />
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
            className='mr-3 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[hsla(0,0%,100%,0.2)] shadow md:shadow-md '
          >
            <SettingIcon className='text-light-mode dark:text-dark-mode' width='16px' height='16px' />
          </span>
        </TippyHeadless>

        <Button
          type='text'
          to='#'
          rounded
          className='flex h-[40px] w-[40px] items-center justify-center shadow md:shadow-md '
        >
          <UserIcon className='text-light-mode dark:text-dark-mode' width='40px' height='40px' />
        </Button>
      </div>
    </header>
  )
}
export default Header
