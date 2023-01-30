import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PlayFillIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import useColor from '~/hooks/useColor'
import useRedirect from '~/hooks/useRedirect'
import { secondToMinuteAndSecond } from '../../../utils/hepper'

const ZingMusicItem = ({ item, number }) => {
  const [bgColor, bg100Color, bg200Color, bg300Color] = useColor()
  const [link, setLink] = useState(null)
  useEffect(() => {
    setLink(item?.album?.link.split('.')[0])
  }, [])
  const handleRedirect = useRedirect()

  return (
    <div className='${bg100Color} group flex items-center justify-between rounded-md py-3 hover:bg-hover-light-mode dark:hover:bg-hover-dark-mode'>
      <span
        style={{
          paintOrder: 'stroke fill',
          color: 'transparent',
          WebkitTextStroke: `2px ${
            number === 1 ? '#498BD9' : number === 2 ? '#4BD2B9' : number === 3 ? '#CB5056' : '#000000'
          }`
        }}
        className='mr-3 inline-block w-[60px] text-center text-[36px] font-extrabold'
      >
        {number}
      </span>
      <div className='flex flex-grow'>
        <div
          className='relative mr-5 h-[60px]   w-[60px] cursor-pointer overflow-hidden rounded-md'
          onClick={() => handleRedirect(item)}
        >
          <img src={item?.thumbnail} />
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
      <Link to={link} className='text-xs font-semibold text-light-mode hover:underline dark:text-dark-mode'>
        {item?.album?.title}
      </Link>
      <span className='ml-20 inline-block min-w-[50px] text-xs font-semibold text-light-mode dark:text-dark-mode'>
        {secondToMinuteAndSecond(item?.duration)}
      </span>
    </div>
  )
}
export default ZingMusicItem
