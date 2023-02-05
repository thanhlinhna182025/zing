import Button from '~/components/Button'
import { DownArrowIcon, ExpandIcon, MP3ZingLogoIcon, SettingIcon } from '~/components/Icons/Icons'
const KaraokeHeader = ({ headerData, KaraokeMain, handleKaraokeMain, handleCloseKaraoke, karaokeIsPlaying }) => {
  return (
    <div className='flex items-center justify-between p-1 lg:p-5 '>
      <div className='flex flex-col items-center lg:flex-row'>
        <div>
          <MP3ZingLogoIcon className='animate-spin-slow' />
        </div>
        <div className='flex flex-col items-center lg:flex-row'>
          <span className='text-xs text-light-mode dark:text-dark-mode'>Từ {headerData?.textType}</span>
          <h5 className='text-xs font-bold text-light-mode dark:text-dark-mode lg:ml-1'>{headerData?.title}</h5>
        </div>
      </div>
      <div className='bg-secondary-300 flex items-center rounded-full p-1'>
        <Button
          type='outline'
          onClick={() => handleKaraokeMain(1)}
          rounded
          className={`mr-2 py-1 lg:px-8 ${KaraokeMain === 1 ? 'bg-secondary-100' : 'bg-secondary-200'}`}
        >
          <span>Danh Sách Phát</span>
        </Button>
        <Button
          type='outline'
          onClick={() => handleKaraokeMain(2)}
          rounded
          className={`mr-2 py-1 lg:px-8 ${KaraokeMain === 2 ? 'bg-secondary-100' : 'bg-secondary-200'}`}
        >
          <span>Karaoke</span>
        </Button>
        <Button
          type='outline'
          onClick={() => handleKaraokeMain(3)}
          rounded
          className={`py-1 lg:px-8 ${KaraokeMain === 3 ? 'bg-secondary-100' : 'bg-secondary-200'}`}
        >
          <span>Lời Bài Hát</span>
        </Button>
      </div>
      <div className='flex items-center'>
        <Button className='bg-secondary-100 mr-2 p-1 lg:p-3' rounded type='outline'>
          <ExpandIcon className='text-light-mode dark:text-dark-mode' width='20px' height='20px' />
        </Button>
        <Button className='bg-secondary-100 mr-2 p-1 lg:p-3' rounded type='outline'>
          <SettingIcon className='text-light-mode dark:text-dark-mode' width='20px' height='20px' />
        </Button>
        <Button className='bg-secondary-100 p-1 lg:p-3' rounded type='outline' onClick={handleCloseKaraoke}>
          <DownArrowIcon className='text-light-mode dark:text-dark-mode' width='20px' height='20px' />
        </Button>
      </div>
    </div>
  )
}
export default KaraokeHeader
