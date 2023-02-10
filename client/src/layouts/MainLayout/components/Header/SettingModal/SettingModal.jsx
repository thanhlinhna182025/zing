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
import useColors from '~/hooks/useColors'

const SettingModal = () => {
  const { ColorBg100, ColorBg300, ColorHoverBg300 } = useColors()

  return (
    <div className={`${ColorBg100} w-[240px] overflow-hidden rounded-md`}>
      <ul className={`border-${ColorBg300} border-b-[1px] border-solid py-2`}>
        <li className={`flex cursor-pointer items-center justify-between p-3 ${ColorHoverBg300}`}>
          <div className='flex'>
            <BlockedIcon className='text-light-mode dark:text-dark-mode' />
            <span className='ml-2 text-sm font-semibold text-light-mode dark:text-dark-mode'>Danh sách chặn</span>
          </div>
        </li>
        <li className={`flex cursor-pointer items-center justify-between p-3 ${ColorHoverBg300}`}>
          <div className='flex'>
            <QualityIcon className='text-light-mode dark:text-dark-mode' />
            <span className='ml-2 text-sm font-semibold text-light-mode dark:text-dark-mode'>Chất lượng nhạc</span>
          </div>
          <RightArrowIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
        </li>
        <li className={`flex cursor-pointer items-center justify-between p-3 ${ColorHoverBg300}`}>
          <div className='flex'>
            <PlayVideoIcon className='text-light-mode dark:text-dark-mode' />
            <span className='ml-2 text-sm font-semibold text-light-mode dark:text-dark-mode'>Giao diện</span>
          </div>
          <RightArrowIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
        </li>
      </ul>
      <ul className='py-2'>
        <li className={`flex cursor-pointer items-center justify-between p-3 ${ColorHoverBg300}`}>
          <div className='flex'>
            <InfomationIcon className='text-light-mode dark:text-dark-mode' />
            <span className='ml-2 text-sm font-semibold text-light-mode dark:text-dark-mode'>Giới thiệu</span>
          </div>
        </li>
        <li className={`flex cursor-pointer items-center justify-between p-3 ${ColorHoverBg300}`}>
          <div className='flex'>
            <PhoneCallIcon className='text-light-mode dark:text-dark-mode' />
            <span className='ml-2 text-sm font-semibold text-light-mode dark:text-dark-mode'>Liên hệ</span>
          </div>
        </li>
        <li className={`flex cursor-pointer items-center justify-between p-3 ${ColorHoverBg300}`}>
          <div className='flex'>
            <AdvertisementIcon className='text-light-mode dark:text-dark-mode' />
            <span className='ml-2 text-sm font-semibold text-light-mode dark:text-dark-mode'>Quảng cáo</span>
          </div>
        </li>
        <li className={`flex cursor-pointer items-center justify-between p-3 ${ColorHoverBg300}`}>
          <div className='flex'>
            <AgreementIcon className='text-light-mode dark:text-dark-mode' />
            <span className='ml-2 text-sm font-semibold text-light-mode dark:text-dark-mode'>Thỏa thuận sử dụng</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default SettingModal
