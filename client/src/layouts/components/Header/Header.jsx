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
    <header className='fixed top-0 z-10 flex h-[70px] w-full items-center justify-between'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <Button className='mr-[26px] ml-[2px] translate-y-[-1px]'>
            <PrevArrowIcon className='  text-light' width='19px' height='19px' />
          </Button>
          <Button className='translate-y-[-1px]'>
            <NextArrowIcon className='text-light' width='19px' height='19px' />
          </Button>
        </div>
        <form className='ml-[22px] flex max-w-[440px] items-center rounded-full bg-main-300'>
          <Button type='text' rounded className=' flex h-[38px] w-[38px] items-center justify-center bg-main-300'>
            <SearchIcon className='text-ebony170-200 translate-y-[1px] translate-x-[1px]' width='20px' height='20px' />
          </Button>
          <input
            placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
            className='w-[400px] rounded-full  border-none bg-transparent py-[8px] pl-[1px] pr-2 text-white outline-none placeholder:font-[Inter] placeholder:text-[14px] placeholder:font-[600]'
          />
        </form>
      </div>
      <div className='flex items-center px-[10px]'>
        <Button type='text' rounded className=' mr-3 flex h-[40px] w-[40px] items-center justify-center bg-[#2f2739]'>
          <ClotheIcon className='text-ebony170-200' width='20px' height='20px' />
        </Button>
        <Button type='text' rounded className='mr-3 flex h-[40px] w-[40px] items-center justify-center bg-[#2f2739]'>
          <VipIcon className='text-ebony170-200' width='20px' height='20px' />
        </Button>
        <Button type='text' rounded className='mr-3 flex h-[40px] w-[40px] items-center justify-center bg-[#2f2739]'>
          <UpLoadIcon className='text-ebony170-200' width='20px' height='20px' />
        </Button>
        <Button type='text' rounded className='mr-3 flex h-[40px] w-[40px] items-center justify-center bg-[#2f2739]'>
          <SettingIcon className='text-ebony170-200' width='20px' height='20px' />
        </Button>
        <Button type='text' rounded className=' flex h-[40px] w-[40px] items-center justify-center bg-[#2f2739]'>
          <UserIcon className='text-ebony170-200' width='40px' height='40px' />
        </Button>
      </div>
    </header>
  )
}
export default Header
