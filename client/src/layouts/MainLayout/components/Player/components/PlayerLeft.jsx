import Button from '~/components/Button'
import { HeartIcon, MoreIcon } from '~/components/Icons/Icons'
import useColors from '~/hooks/useColors'

const PlayerLeft = ({ musicInfo }) => {
  const { thumbnail, artistsNames, title } = musicInfo
  const { ColorText500 } = useColors()

  return (
    <div className=' hidden w-[30%] items-center justify-start lg:flex'>
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
        <HeartIcon className={`text-light-mode dark:text-dark-mode mr-[22px] cursor-pointer`} width='14px' height='14px' />
        <MoreIcon className={`text-light-mode dark:text-dark-mode mr-[22px] cursor-pointer `} width='14px' height='14px' />
      </div>
    </div>
  )
}
export default PlayerLeft
