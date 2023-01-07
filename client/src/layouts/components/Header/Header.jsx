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

const Header = () => {
  return (
    <header className='fixed top-0 right-[59px] z-10 flex  h-[70px] w-[calc(100%-240px-59px-59px)] flex-1 items-center justify-between bg-transparent'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <Button type='text' className='mr-[26px] ml-[2px] translate-y-[-1px]'>
            <PrevArrowIcon className='  text-white' width='19px' height='19px' />
          </Button>
          <Button type='text' className='translate-y-[-1px]'>
            <NextArrowIcon className='text-white' width='19px' height='19px' />
          </Button>
        </div>
        <form className='ml-[22px] flex max-w-[440px] items-center rounded-full bg-[hsla(0,0%,100%,0.2)]'>
          <Button type='text' rounded className=' flex h-[38px] w-[38px] items-center justify-center '>
            <SearchIcon className='translate-y-[1px] translate-x-[1px] text-gray' width='20px' height='20px' />
          </Button>
          <input
            placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
            className='w-[400px] rounded-full  border-none bg-transparent py-[8px] pl-[1px] pr-2 text-white outline-none placeholder:font-[Inter] placeholder:text-[14px] placeholder:font-[600]'
          />
        </form>
      </div>
      <div className='flex  items-center  px-[10px]'>
        <Button
          type='text'
          to='#'
          rounded
          className=' mr-3 flex h-[40px] w-[40px] items-center justify-center bg-[hsla(0,0%,100%,0.2)]'
        >
          <ClotheIcon className='text-white' width='20px' height='20px' />
        </Button>
        <Button
          type='text'
          to='#'
          rounded
          className='mr-3 flex h-[40px] w-[40px] items-center justify-center bg-[hsla(0,0%,100%,0.2)] '
        >
          <VipIcon className='text-white' width='18px' height='18px' />
        </Button>
        <Button
          type='text'
          to='#'
          rounded
          className='mr-3 flex h-[40px] w-[40px] items-center justify-center bg-[hsla(0,0%,100%,0.2)] '
        >
          <UpLoadIcon className='text-white' width='18px' height='18px' />
        </Button>
        <Button
          type='text'
          to='#'
          rounded
          className='mr-3 flex h-[40px] w-[40px] items-center justify-center bg-[hsla(0,0%,100%,0.2)] '
        >
          <SettingIcon className='text-white' width='16px' height='16px' />
        </Button>
        <Button type='text' to='#' rounded className=' flex h-[40px] w-[40px] items-center justify-center '>
          <UserIcon className='text-white' width='40px' height='40px' />
        </Button>
      </div>
    </header>
  )
}
export default Header
