import MusicBar from '~/assets/images/Z23N.gif'
import Button from '~/components/Button'
import { HeartIcon, MoreIcon, PlayFillIcon } from '~/components/Icons'
import { PlayVideoIcon, ShuffleIcon } from '~/components/Icons/Icons'
import NameArtist from '~/components/NameArtist'
import useColors from '~/hooks/useColors'
import { numberWithCommas } from '~/utils/hepper'
const AlbumThumnail = ({
  thumbnailM,
  artists,
  releaseDate,
  title,
  like,
  handleToggle,
  handlePlayAll,
  handleShuffle,
  isPlaying,
  isPlayAll
}) => {
  const { ColorBg100 ,ColorText500} = useColors()
  return (
    <div>
      {isPlaying ? (
        <div
          className='relative mb-3 flex w-full cursor-pointer items-center justify-center overflow-hidden lg:h-[300px] lg:w-[300px] '
          onClick={handleToggle}
        >
          <div className='absolute top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%]'>
            <img alt='musicbar' className='h-10 w-10 text-light-mode dark:text-dark-mode' src={MusicBar} />
          </div>
          <img
            alt='thumbnail'
            src={thumbnailM}
            className='h-[200px] w-[200px] animate-spin-slow rounded-full object-cover lg:h-[300px] lg:w-[300px] '
          />
        </div>
      ) : (
        <div
          className='group mx-0 my-auto mb-3 flex w-full items-center justify-center overflow-hidden rounded-lg lg:w-[300px]'
          onClick={handleToggle}
        >
          <div className='relative overflow-hidden'>
            <div className='absolute top-0 bottom-0 left-0 right-0 z-[-1] flex cursor-pointer items-center justify-center bg-[rgba(0,0,0,0.5)] group-hover:z-10'>
              <PlayVideoIcon className={`${ColorText500}`} width='44px' height='44px' />
            </div>
            <img
              alt='thumbnailM'
              src={thumbnailM}
              className='h-[200px] w-[200px] rounded-lg object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1] hover:ease-[3000] lg:h-[300px] lg:w-[300px]'
            />
          </div>
        </div>
      )}

      <div className='flex flex-col items-center justify-center'>
        <h5 className='text-center font-[Inter] text-[20px] font-bold leading-[1.5] text-light-mode dark:text-dark-mode'>
          {title}
        </h5>
        <div className='mb-[4px] leading-none'>
          <NameArtist artists={artists} />
          {releaseDate && (
            <>
              <b className='px-[4px] align-top text-[20px] font-black leading-3 text-light-mode dark:text-dark-mode'>
                .
              </b>
              <span className='font-[Inter] text-xs font-semibold tracking-[-0.1px] text-light-mode dark:text-dark-mode'>
                {releaseDate}
              </span>
            </>
          )}
        </div>
        <p className='mb-[20px] font-[Inter] text-xs font-semibold text-light-mode dark:text-dark-mode'>
          {numberWithCommas(like)} người yêu thích
        </p>
        {isPlayAll ? (
          <Button
            rounded
            type='secondary'
            className={`mb-4 mr-[10px] flex items-center py-2 px-[25px] ${ColorBg100}`}
            onClick={handleShuffle}
          >
            <ShuffleIcon className={`${ColorText500} mr-[5px]`} width='20px' height='20px' />
            <span className='text-sm font-normal leading-normal'> PHÁT NGẪU NHIÊN </span>
          </Button>
        ) : (
          <Button
            rounded
            type='secondary'
            className={`mb-4 mr-[10px] flex items-center py-2 px-[25px] ${ColorBg100}`}
            onClick={handlePlayAll}
          >
            <PlayFillIcon className={`${ColorText500} mr-[5px]`} width='16px' height='16px' />
            <span className='text-sm font-normal leading-normal'>PHÁT TẤT CẢ</span>
          </Button>
        )}
        <div className='mr-2 flex items-center'>
          <Button
            type='text'
            rounded
            className={`mr-5 flex h-[35px] w-[35px] items-center justify-center ${ColorBg100}`}
          >
            <HeartIcon className={`${ColorText500}`} width='16px' height='16px' />
          </Button>
          <Button type='text' rounded className={`flex h-[35px] w-[35px] items-center justify-center ${ColorBg100}`}>
            <MoreIcon className={`${ColorText500}`} width='16px' height='16px' />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default AlbumThumnail
