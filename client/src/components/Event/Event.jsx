import { useRef } from 'react'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LeftArrowIcon, RightArrowIcon } from '../Icons/Icons'
import EventItem from './EventItem'

const Event = ({ event }) => {
  const swiperRef = useRef()
  return (
    <div className='relative'>
      <Swiper
        className='eventSwiper'
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
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
        {event?.items?.map((item) => (
          <SwiperSlide key={item.id}>
            <EventItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='swiper-button-prev-event' onClick={() => swiperRef.current?.slidePrev()}>
        <LeftArrowIcon className='text-white' width='14px' height='14px' />
      </button>
      <button className='swiper-button-next-event' onClick={() => swiperRef.current?.slideNext()}>
        <RightArrowIcon className='text-white' width='14px' height='14px' />
      </button>
    </div>
  )
}
export default Event
