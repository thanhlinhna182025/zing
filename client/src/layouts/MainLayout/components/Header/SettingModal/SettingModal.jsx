import {
  AdvertisementIcon,
  AgreementIcon,
  BlockedIcon,
  InfomationIcon,
  PhoneCallIcon,
  PlayVideoIcon,
  QualityIcon,
  RightArrowIcon
} from '~/components/Icons'

const SettingModal = () => {
  return (
    <div className=' w-[240px] overflow-hidden rounded-md bg-main-500 '>
      <ul className='border-b-[1px] border-solid border-main-400 py-2'>
        <li className='flex cursor-pointer items-center justify-between p-3 hover:bg-main-200'>
          <div className='flex'>
            <BlockedIcon className='text-white' />
            <span className='ml-2 text-sm font-semibold text-white'>Danh sách chặn</span>
          </div>
        </li>
        <li className='flex cursor-pointer items-center justify-between p-3 hover:bg-main-200'>
          <div className='flex'>
            <QualityIcon className='text-white' />
            <span className='ml-2 text-sm font-semibold text-white'>Chất lượng nhạc</span>
          </div>
          <RightArrowIcon className='text-white' width='14px' height='14px' />
        </li>
        <li className='flex cursor-pointer items-center justify-between p-3 hover:bg-main-200'>
          <div className='flex'>
            <PlayVideoIcon className='text-white' />
            <span className='ml-2 text-sm font-semibold text-white'>Giao diện</span>
          </div>
          <RightArrowIcon className='text-white' width='14px' height='14px' />
        </li>
      </ul>
      <ul className='py-2'>
        <li className='flex cursor-pointer items-center justify-between p-3 hover:bg-main-200'>
          <div className='flex'>
            <InfomationIcon className='text-white' />
            <span className='ml-2 text-sm font-semibold text-white'>Giới thiệu</span>
          </div>
        </li>
        <li className='flex cursor-pointer items-center justify-between p-3 hover:bg-main-200'>
          <div className='flex'>
            <PhoneCallIcon className='text-white' />
            <span className='ml-2 text-sm font-semibold text-white'>Liên hệ</span>
          </div>
        </li>
        <li className='flex cursor-pointer items-center justify-between p-3 hover:bg-main-200'>
          <div className='flex'>
            <AdvertisementIcon className='text-white' />
            <span className='ml-2 text-sm font-semibold text-white'>Quảng cáo</span>
          </div>
        </li>
        <li className='flex cursor-pointer items-center justify-between p-3 hover:bg-main-200'>
          <div className='flex'>
            <AgreementIcon className='text-white' />
            <span className='ml-2 text-sm font-semibold text-white'>Thỏa thuận sử dụng</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default SettingModal
