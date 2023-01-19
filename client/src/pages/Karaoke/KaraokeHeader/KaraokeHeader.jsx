import Button from '~/components/Button'
import { DownArrowIcon, ExpandIcon, MP3ZingLogoIcon, SettingIcon } from '~/components/Icons/Icons'
const KaraokeHeader = ({ headerData, KaraokeMain, handleKaraokeMain, handleCloseKaraoke, karaokeIsPlaying }) => {
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center'>
        <div>
          <MP3ZingLogoIcon className="animate-spin-slow"/>
        </div>
        <div>
          <span className='text-xs text-white'>Từ {headerData?.textType}</span>
          <h5 className='text-xs font-bold text-white'>{headerData?.title}</h5>
        </div>
      </div>
      <div className='flex items-center rounded-full bg-secondary-300 p-1'>
        <Button
          type='outline'
          onClick={() => handleKaraokeMain(1)}
          rounded
          className={`mr-2   py-1 px-8 ${KaraokeMain === 1 ? 'bg-secondary-100' : 'bg-secondary-200'}`}
        >
          <span>Danh Sách Phát</span>
        </Button>
        <Button
          type='outline'
          onClick={() => handleKaraokeMain(2)}
          rounded
          className={`mr-2 py-1 px-8 ${KaraokeMain === 2 ? 'bg-secondary-100' : 'bg-secondary-200'}`}
        >
          <span>Karaoke</span>
        </Button>
        <Button
          type='outline'
          onClick={() => handleKaraokeMain(3)}
          rounded
          className={`py-1 px-8 ${KaraokeMain === 3 ? 'bg-secondary-100' : 'bg-secondary-200'}`}
        >
          <span>Lời Bài Hát</span>
        </Button>
      </div>
      <div className='flex items-center'>
        <Button className='mr-2 bg-secondary-100 p-3' rounded type='outline'>
          <ExpandIcon className='text-white' width='20px' height='20px' />
        </Button>
        <Button className='mr-2 bg-secondary-100 p-3' rounded type='outline'>
          <SettingIcon className='text-white' width='20px' height='20px' />
        </Button>
        <Button className='bg-secondary-100 p-3' rounded type='outline' onClick={handleCloseKaraoke}>
          <DownArrowIcon className='text-white' width='20px' height='20px' />
        </Button>
      </div>
    </div>
  )
}
export default KaraokeHeader
