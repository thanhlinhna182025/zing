import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import MusicCardItemSkeleton from '~/components/Skeleton/MusicCardItemSkeleton'
import Title from '~/components/Title'
import { LeftArrowIcon, RightArrowIcon } from '../Icons/Icons'
import SeeAllButton from '../SeeAllButton/SeeAllButton'
import LiveStreamItem from './LiveStreamItem'
const LiveStreamRadio = ({ liveStream }) => {
  const swiperRef = useRef()
  const loading = useSelector((state) => state.app.loading)

  return (
    <div>
      <div className='mb-5 flex items-center justify-between'>
        <Title>{liveStream?.title}</Title>
        <SeeAllButton />
      </div>
      <div className='relative'>
        <Swiper
          className='liveSwiper'
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={3}
          spaceBetween={10}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          loop={true}
          navigation={true}
        >
          {loading
            ? [0, 1, 2, 3, 4, 5, 6].map((item) => <MusicCardItemSkeleton key={item} />)
            : liveStream?.items?.map((item) => (
                <SwiperSlide key={item.encodeId}>
                  <LiveStreamItem item={item} />
                </SwiperSlide>
              ))}
        </Swiper>
        <button className='swiper-button-next-live' onClick={() => swiperRef.current?.slidePrev()}>
          <LeftArrowIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
        </button>
        <button className='swiper-button-prev-live' onClick={() => swiperRef.current?.slideNext()}>
          <RightArrowIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
        </button>
      </div>
    </div>
  )
}
export default LiveStreamRadio
