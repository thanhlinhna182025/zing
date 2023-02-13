import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PlayFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import useColors from '~/hooks/useColors'
import useRedirect from '~/hooks/useRedirect'
import { secondToMinuteAndSecond } from '~/utils/hepper'

const ZingMusicItem = ({ item, number }) => {
  const [link, setLink] = useState(null)
  useEffect(() => {
    setLink(item?.album?.link.split('.')[0])
  }, [])
  const handleRedirect = useRedirect()
  const { ColorHoverBg200 } = useColors()

  return (
    <div className={` ${ColorHoverBg200} hover:shadow group flex items-center rounded-md py-3`}>
      <div className='flex flex-grow'>
        <div className='flex flex-grow'>
          <span
            style={{
              paintOrder: 'stroke fill',
              color: 'transparent',
              WebkitTextStroke: `2px ${
                number === 1 ? '#498BD9' : number === 2 ? '#4BD2B9' : number === 3 ? '#CB5056' : '#000000'
              }`
            }}
            className='mr-3 inline-block min-w-[70px] text-center text-[36px] font-extrabold'
          >
            {number}
          </span>
          <div className='flex '>
            <div
              className='relative mr-5 h-[60px] w-[60px] flex-shrink-0 cursor-pointer overflow-hidden rounded-md'
              onClick={() => handleRedirect(item)}
            >
              <img src={item?.thumbnail} alt={item.title} className='block w-full object-cover' />
              <PlayFillIcon
                className='absolute top-1/2 left-1/2 hidden translate-x-[-50%] translate-y-[-50%] text-white group-hover:inline-block'
                width='16px'
                height='16px'
              />
            </div>
            <div className='flex flex-col justify-center'>
              <h5 className='mb-1 text-[14px] font-bold text-light-mode dark:text-dark-mode'>{item.title}</h5>
              <NameArtist artists={item.artists} />
            </div>
          </div>
        </div>
        <Link
          to={link}
          className='hidden text-xs font-semibold text-light-mode hover:underline dark:text-dark-mode lg:inline-block'
        >
          {item?.album?.title}
        </Link>
      </div>
      <span className='ml-2 inline-block min-w-[50px] text-xs font-semibold text-light-mode dark:text-dark-mode lg:ml-20'>
        {secondToMinuteAndSecond(item?.duration)}
      </span>
    </div>
  )
}
export default ZingMusicItem
