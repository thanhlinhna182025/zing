import { HeartIcon, MoreIcon, PlayVideoIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'

const MusicCard = ({ item, large }) => {
  const baseClass = large ? 'flex items-center gap-x-5' : 'flex items-center gap-x-1'
  return (
    <div className=' px-[14px]'>
      <div className='group relative mb-3 box-border overflow-hidden rounded-md' key={item.encodeId}>
        <img
          src={item.thumbnail}
          className=' rounded-md object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1] hover:ease-[3000]'
        />
        <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.5)]'>
          <div className={baseClass}>
            <div className='cursor-pointer rounded-full p-[5px] hover:bg-main-200'>
              <HeartIcon width='20px' height='20px' className='text-white' />
            </div>
            <PlayVideoIcon width='45px' height='45px' className='cursor-pointer text-white' />
            <div className='rounded-full p-[5px] hover:bg-main-200'>
              <MoreIcon width='16px' height='16px' className='cursor-pointer text-white' />
            </div>
          </div>
        </div>
      </div>
      <h5 className='truncate text-sm font-bold text-white'>{item.title}</h5>
      {large && <NameArtist artists={item.artists} large={large} />}
    </div>
  )
}
export default MusicCard
