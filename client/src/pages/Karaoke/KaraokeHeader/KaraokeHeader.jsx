import Button from '~/components/Button'
import { DownArrowIcon, ExpandIcon, MP3ZingLogoIcon, SettingIcon } from '~/components/Icons/Icons'
import useColors from '~/hooks/useColors'
const KaraokeHeader = ({ KaraokeMain, handleKaraokeMain, handleCloseKaraoke, karaokeIsPlaying }) => {
  const { ColorBg300, ColorBg400 } = useColors()
  return (
    <div className='flex items-center justify-between py-1 px-1 lg:p-5 '>
      <div className='hidden flex-col items-center md:flex lg:flex-row'>
        <div>
          <MP3ZingLogoIcon className='animate-spin-slow' />
        </div>
      </div>
      <div className={`${ColorBg300} rounded-full p-[1px]`}>
        <div className='flex items-center rounded-full p-1'>
          <Button
            type='outline'
            onClick={() => handleKaraokeMain(1)}
            rounded
            className={`mr-2 px-3 lg:px-8 ${KaraokeMain === 1 ? ColorBg400 : ''}`}
          >
            <span>Danh Sách Phát</span>
          </Button>
          <Button
            type='outline'
            onClick={() => handleKaraokeMain(2)}
            rounded
            className={`mr-2 px-3 lg:px-8 ${KaraokeMain === 2 ? ColorBg400 : ''}`}
          >
            <span>Karaoke</span>
          </Button>
          <Button
            type='outline'
            onClick={() => handleKaraokeMain(3)}
            rounded
            className={`px-3 lg:px-8 ${KaraokeMain === 3 ? ColorBg400 : ''}`}
          >
            <span>Lời Bài Hát</span>
          </Button>
        </div>
      </div>
      <div className='flex items-center'>
        <Button className='mr-2 p-1 lg:p-3' rounded type='outline'>
          <ExpandIcon className='text-light-mode dark:text-dark-mode' width='20px' height='20px' />
        </Button>
        <Button className='mr-2 p-1 lg:p-3' rounded type='outline'>
          <SettingIcon className='text-light-mode dark:text-dark-mode' width='20px' height='20px' />
        </Button>
        <Button className='p-1 lg:p-3' rounded type='outline' onClick={handleCloseKaraoke}>
          <DownArrowIcon className='text-light-mode dark:text-dark-mode' width='20px' height='20px' />
        </Button>
      </div>
    </div>
  )
}
export default KaraokeHeader
