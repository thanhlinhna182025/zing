import { useRef } from 'react'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import LiveStreamItem from '~/components/LiveStreamItem'
import Title from '~/components/Title'
import { LeftArrowIcon, RightArrowIcon } from '../Icons/Icons'
import SeeAllButton from '../SeeAllButton/SeeAllButton'
const LiveStreamRadio = ({ liveStream }) => {
  const swiperRef = useRef()
  return (
    <div>
      <div className='mb-5 flex items-center justify-between'>
        <Title>{liveStream?.title}</Title>
        <SeeAllButton />
      </div>
      <div className='relative'>
        <Swiper
          className='liveSwiper'
          modules={[Navigation, Autoplay]}
          slidesPerView={7}
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
        >
          {liveStream?.items?.map((item) => (
            <SwiperSlide key={item.encodeId}>
              <LiveStreamItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className='swiper-button-prev-live' onClick={() => swiperRef.current?.slidePrev()}>
          <LeftArrowIcon className='text-gray' width='14px' height='14px' />
        </button>
        <button className='swiper-button-next-live' onClick={() => swiperRef.current?.slideNext()}>
          <RightArrowIcon className='text-gray' width='14px' height='14px' />
        </button>
      </div>
    </div>
  )
}
export default LiveStreamRadio
