import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PlayFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import useColors from '~/hooks/useColors'
import useRedirect from '~/hooks/useRedirect'
import { secondToMinuteAndSecond } from '~/utils/hepper'

const ZingMusicItem = ({ item, number }) => {
  const { ColorHoverBg200, ColorHoverText500 } = useColors()

  const [link, setLink] = useState(null)
  useEffect(() => {
    setLink(item?.album?.link.split('.')[0])
  }, [])
  const handleRedirect = useRedirect()
  return (
    <div className={`${ColorHoverBg200} group flex items-center justify-between rounded-md p-1 md:p-2 lg:p-3 `}>
      <span
        style={{
          paintOrder: 'stroke fill',
          color: 'transparent',
          WebkitTextStroke: `2px ${
            number === 1 ? '#498BD9' : number === 2 ? '#4BD2B9' : number === 3 ? '#CB5056' : '#000000'
          }`
        }}
        className='mr-2 inline-block min-w-[50px] text-center text-[30px] font-extrabold md:text-[36px] lg:mr-3 lg:w-[60px]'
      >
        {number}
      </span>
      <div className='flex flex-grow'>
        <div
          className='relative mr-5 h-[60px] w-[60px] shrink-0 cursor-pointer overflow-hidden rounded-md'
          onClick={() => handleRedirect(item)}
        >
          <img src={item?.thumbnail} alt={item.title} className='block w-full object-cover' />
          <PlayFillIcon
            className={`${ColorHoverText500} absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] group-hover:inline-block`}
            width='16px'
            height='16px'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h5 className='mb-1 text-[14px] font-bold text-light-mode dark:text-dark-mode'>{item.title}</h5>
          <NameArtist artists={item.artists} />
        </div>
      </div>
      <Link
        to={link}
        className='hidden text-xs font-semibold text-light-mode hover:underline dark:text-dark-mode lg:inline-block'
      >
        {item?.album?.title}
      </Link>
      <span className='ml-1 hidden min-w-[50px] text-xs font-semibold text-light-mode dark:text-dark-mode md:inline-block lg:ml-5'>
        {secondToMinuteAndSecond(item?.duration)}
      </span>
    </div>
  )
}
export default ZingMusicItem
