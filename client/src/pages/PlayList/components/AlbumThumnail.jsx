import { useDispatch, useSelector } from 'react-redux'
import MusicBar from '~/assets/images/Z23N.gif'
import Button from '~/components/Button'
import { HeartIcon, MoreIcon, PlayFillIcon } from '~/components/Icons'
import { PlayVideoIcon } from '~/components/Icons/Icons'
import { isPlayingToggle } from '~/feature/app/appSlice'

const AlbumThumnail = ({ thumbnailM, artists, releaseDate, title, like }) => {
  const isPlaying = useSelector((state) => state.app.isPlaying)
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(isPlayingToggle())
  }
  return (
    <div>
      {isPlaying ? (
        <div
          className='relative mb-3 flex h-[300px] w-[300px] cursor-pointer items-center justify-center overflow-hidden '
          onClick={handleToggle}
        >
          <div className='absolute top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%]'>
            <img className='h-10 w-10 text-white' src={MusicBar} />
          </div>
          <img src={thumbnailM} className='animate-spin-slow rounded-full object-cover ' />
        </div>
      ) : (
        <div className='group relative mb-3 h-[300px] w-[300px] overflow-hidden rounded-lg' onClick={handleToggle}>
          <div className='absolute top-0 bottom-0 left-0 right-0 z-[-1] flex cursor-pointer items-center justify-center bg-[rgba(0,0,0,0.5)] group-hover:z-10'>
            <PlayVideoIcon className='text-white' width='44px' height='44px' />
          </div>
          <img
            src={thumbnailM}
            className='rounded-lg object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1] hover:ease-[3000]'
          />
        </div>
      )}

      <div className='flex flex-col items-center justify-center'>
        <h5 className='text-center font-[Inter] text-[20px] font-bold leading-[1.5] text-white'>{title}</h5>
        <div className='mb-[4px] leading-none'>
          {artists?.map((artist, index) => {
            if (artists.length === 1) {
              return (
                <a key={artist.id} className=' font-[Inter] text-xs font-semibold tracking-[-0.1px] text-white'>
                  {artist.name}
                </a>
              )
            } else {
              if (index < artists.length - 1) {
                return (
                  <a
                    key={artist.id}
                    className='mr-[2px]  cursor-pointer font-[Inter] text-[12px] font-bold tracking-[-0.1px] text-white hover:text-[#9D4be0] hover:underline hover:decoration-[#9D4be0] hover:decoration-solid'
                  >
                    {artist.name},
                  </a>
                )
              } else {
                return (
                  <a
                    key={artist.id}
                    className='cursor-pointer font-[Inter] text-[12px] font-bold tracking-[-0.1px] text-white hover:text-[#9D4be0] hover:underline hover:decoration-[#9D4be0] hover:decoration-solid'
                  >
                    {artist.name}
                  </a>
                )
              }
            }
          })}
          {releaseDate && (
            <>
              <b className='px-[4px] align-top text-[20px] font-black leading-3 text-white'>.</b>
              <span className='font-[Inter] text-xs font-semibold tracking-[-0.1px] text-white'>{releaseDate}</span>
            </>
          )}
        </div>
        <p className='mb-[20px] font-[Inter] text-xs font-semibold text-white'>{like} người yêu thích</p>
        <Button type='secondary' className='mb-4 mr-[10px] flex items-center py-2 px-[25px]'>
          <PlayFillIcon className='mr-[5px] text-white' width='16px' height='16px' />
          <span className='text-sm font-normal leading-normal'>PHÁT TẤT CẢ</span>
        </Button>
        <div className='mr-2 flex items-center'>
          <Button type='text' rounded className=' mr-5 flex h-[35px] w-[35px] items-center justify-center bg-[#2f2739]'>
            <HeartIcon className='text-ebony170-200' width='16px' height='16px' />
          </Button>
          <Button type='text' rounded className=' flex h-[35px] w-[35px] items-center justify-center bg-[#2f2739]'>
            <MoreIcon className='text-ebony170-200' width='16px' height='16px' />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default AlbumThumnail
