import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import { HeartIcon, MoreIcon } from '~/components/Icons/Icons'
import Loading from '~/components/Loading'
const PlayerLeft = ({ musicInfo }) => {
  const { thumbnail, artistsNames, title } = musicInfo
  const musicLoading = useSelector((state) => state.music.musicLoading)
  return (
    <div className='hidden lg:flex'>
      {musicLoading ? (
        <Loading />
      ) : (
        <div className=' hidden w-full items-center justify-start lg:flex'>
          <div className='mr-[10px] flex-shrink-0'>
            <img alt='thumbnail' src={thumbnail} className='block h-16 w-16 rounded-md object-cover' />
          </div>
          <div className='mr-[30px] max-w-[300px]'>
            <h5 className='truncate font-[Inter] text-sm font-semibold text-light-mode dark:text-dark-mode'>{title}</h5>
            <Button
              type='text'
              to='#'
              className='font-[Inter] text-xs font-semibold tracking-[-0.1px] text-light-mode dark:text-dark-mode'
            >
              {artistsNames}
            </Button>
          </div>
          <div className='flex items-center'>
            <HeartIcon
              className={`mr-[22px] cursor-pointer text-light-mode dark:text-dark-mode`}
              width='14px'
              height='14px'
            />
            <MoreIcon
              className={`mr-[22px] cursor-pointer text-light-mode dark:text-dark-mode `}
              width='14px'
              height='14px'
            />
          </div>
        </div>
      )}
    </div>
  )
}
export default PlayerLeft
