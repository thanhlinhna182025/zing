import Button from '~/components/Button'
import { HeartIcon, MoreIcon } from '~/components/Icons/Icons'

const PlayerLeft = ({ musicInfo }) => {
  const { thumbnail, artistsNames, title } = musicInfo

  return (
    <div className='flex w-[30%] items-center justify-start'>
      <div className='mr-[10px] flex-shrink-0'>
        <img src={thumbnail} className='block h-16 w-16 rounded-md object-cover' />
      </div>
      <div className='mr-[30px]'>
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
          className='mr-[22px] cursor-pointer text-light-mode dark:text-dark-mode'
          width='14px'
          height='14px'
        />
        <MoreIcon className='mr-[22px] cursor-pointer text-light-mode dark:text-dark-mode' width='14px' height='14px' />
      </div>
    </div>
  )
}
export default PlayerLeft
