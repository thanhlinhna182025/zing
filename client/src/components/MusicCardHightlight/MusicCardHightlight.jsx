import { HeartIcon, MoreIcon, PlayVideoIcon } from '~/components/Icons'
import Title from '~/components/Title'
import useColors from '~/hooks/useColors'
import useRedirect from '~/hooks/useRedirect'

const MusicCardHightlight = ({ item }) => {
  const { ColorHoverBg300, ColorText500 } = useColors()
  const handleRedirect = useRedirect()

  return (
    <div className='w-full lg:w-fit'>
      {item && (
        <div className='flex flex-col xl:mr-7'>
          <div className='mb-5 '>
            <Title>Mới Phát Hành</Title>
          </div>
          <div
            className='flex w-full rounded-md bg-gradient-to-r from-[#574643] to-[#312939] p-4 lg:w-fit xl:w-[336px]'
            onClick={() => handleRedirect(item)}
          >
            <div className=' group relative w-[151px] flex-shrink-0 overflow-hidden rounded-md'>
              <img
                alt={item.title}
                src={item?.thumbnail || item?.thumnailM}
                className='w-full object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1]'
              />
              <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center gap-x-3 hover:bg-[rgba(0,0,0,0.2)]'>
                <div className={`cursor-pointer rounded-full p-[5px] ${ColorHoverBg300}`}>
                  <HeartIcon width='20px' height='20px' className={`${ColorText500}`} />
                </div>
                <PlayVideoIcon width='45px' height='45px' className={`${ColorText500} cursor-pointer`} />
                <div className={`rounded-full p-[5px] ${ColorHoverBg300}`}>
                  <MoreIcon width='16px' height='16px' className={`${ColorText500} cursor-pointer`} />
                </div>
              </div>
            </div>
            <div className='my-[6px] ml-4 flex flex-grow flex-col xl:flex-grow-0'>
              <span className='mb-[14px] text-xs font-bold text-light-mode dark:text-dark-mode'>{item?.textType}</span>
              <h5 className='mb-[1px] text-sm font-bold text-light-mode dark:text-dark-mode'>{item?.title}</h5>
              <h4 className='mb-[14px] text-xs font-bold text-light-mode dark:text-dark-mode'>{item?.artistsNames}</h4>
              <span className='text-xs font-bold text-light-mode dark:text-dark-mode '>{item?.releaseDate}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default MusicCardHightlight
