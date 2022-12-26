import Button from '~/components/Button'
import { HeartIcon, MoreIcon, PlayFillIcon } from '~/components/Icons'

const AlbumThumnail = ({ thumbnailM, artists, releaseDate, title, like }) => {
  return (
    <div>
      <div className='mb-3 h-[300px] w-[300px] rounded-lg'>
        <img src={thumbnailM} className='rounded-lg object-cover' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h5 className='font-[Inter] text-center text-[20px] font-bold leading-[1.5] text-white'>{title}</h5>
        <div className='mb-[4px] leading-none'>
          {artists?.map((artist, index) => {
            if (artists.length === 1) {
              return (
                <a key={artist.id} className=' font-[Inter] text-xs font-semibold tracking-[-0.1px] text-gray'>
                  {artist.name}
                </a>
              )
            } else {
              if (index < artists.length - 1) {
                return (
                  <a
                    key={artist.id}
                    className='mr-[2px]  cursor-pointer font-[Inter] text-[12px] font-bold tracking-[-0.1px] text-gray hover:text-[#9D4be0] hover:underline hover:decoration-[#9D4be0] hover:decoration-solid'
                  >
                    {artist.name},
                  </a>
                )
              } else {
                return (
                  <a
                    key={artist.id}
                    className='cursor-pointer font-[Inter] text-[12px] font-bold tracking-[-0.1px] text-gray hover:text-[#9D4be0] hover:underline hover:decoration-[#9D4be0] hover:decoration-solid'
                  >
                    {artist.name}
                  </a>
                )
              }
            }
          })}
          {releaseDate && (
            <>
              <b className='px-[4px] align-top text-[20px] font-black leading-3 text-gray'>.</b>
              <span className='font-[Inter] text-xs font-semibold tracking-[-0.1px] text-gray'>{releaseDate}</span>
            </>
          )}
        </div>
        <p className='mb-[20px] font-[Inter] text-xs font-semibold text-gray'>{like} người yêu thích</p>
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
