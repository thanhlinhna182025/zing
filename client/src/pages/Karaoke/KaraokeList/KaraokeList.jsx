import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HeartIcon, MoreIcon, PlayVideoIcon } from '~/components/Icons'
import NameArtist from '~/components/NameArtist'
import SortDescription from '~/components/SortDescription'
import { addAlbumId } from '~/feature/album/albumSlice'
import { addMusicId } from '~/feature/music/musicSlice'
import { addPlaylistId } from '~/feature/playlist/playlistSlice'
import { LeftArrowIcon, RightArrowIcon } from '../../../components/Icons/Icons'
const KaraokeList = ({ playlists }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleRedirect = (item) => {
    if (item.type === 1 || item.link.startsWith('/bai-hat')) {
      dispatch(addMusicId(item.encodeId))
    } else if (item.type === 4 || item.link.startsWith('/album')) {
      const link = item?.link.split('.')[0]
      dispatch(addAlbumId(link.split('/')[3]))
      navigate(link)
    } else if (item.type === 5 || item.link.startsWith('/playlist')) {
      const link = item?.link.split('.')[0]
      dispatch(addPlaylistId(link.split('/')[3]))
      navigate(link)
    } else {
      console.log('Khong thuoc truong hop tren')
    }
  }

  const swiperRef = useRef()

  return (
    <div className='relative m-auto w-[1080px]'>
      <Swiper
        className='karaokeListSwiper'
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
        spaceBetween={28}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop={true}
        navigation={true}
        centeredSlides={true}
        freeMode={true}
      >
        {playlists?.slice(0, 10).map((item) => (
          <SwiperSlide key={item.encodeId}>
            <div className='px-[14px]' onClick={() => handleRedirect(item)}>
              <div className='group relative mb-3 box-border overflow-hidden rounded-md' key={item.encodeId}>
                <img
                  src={item.thumbnailM}
                  className='w-full rounded-md object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1] hover:ease-[3000]'
                />
                <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.5)]'>
                  <div className='flex items-center gap-x-5'>
                    <div className='hover:bg-main-200 cursor-pointer rounded-full p-[5px]'>
                      <HeartIcon width='20px' height='20px' className='text-light-mode dark:text-dark-mode' />
                    </div>
                    <PlayVideoIcon
                      width='45px'
                      height='45px'
                      className='cursor-pointer text-light-mode dark:text-dark-mode'
                    />
                    <div className='hover:bg-main-200 rounded-full p-[5px]'>
                      <MoreIcon
                        width='16px'
                        height='16px'
                        className='cursor-pointer text-light-mode dark:text-dark-mode'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h5 className='hover:text-secondary-100 cursor-pointer truncate text-sm font-bold text-light-mode dark:text-dark-mode'>
                {item.title}
              </h5>
              <NameArtist artists={item.artists} large />
              <SortDescription>{item.sortDescription}</SortDescription>
              <span className='text-xs font-bold text-light-mode dark:text-dark-mode'>{item.releaseDateText}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='swiper-button-prev-karaoke' onClick={() => swiperRef.current?.slidePrev()}>
        <LeftArrowIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
      </button>
      <button className='swiper-button-next-karaoke' onClick={() => swiperRef.current?.slideNext()}>
        <RightArrowIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
      </button>
    </div>
  )
}
export default KaraokeList
