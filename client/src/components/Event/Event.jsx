import { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useColor from '~/hooks/useColor'
import { LeftArrowIcon, RightArrowIcon } from '../Icons/Icons'
import EventItem from './EventItem'
import useColorHover from '~/hooks/useColorHover'

const Event = ({ event }) => {
  const swiperRef = useRef()
  const { bg300Color } = useColor()
  const { hoverColor300 } = useColorHover()

  return (
    <div className='relative'>
      <Swiper
        className='eventSwiper'
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={2}
        spaceBetween={28}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
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
      <button
        className={`absolute -top-6 left-0 z-[10] flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full ${bg300Color} ${hoverColor300}`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <LeftArrowIcon className='text-light-mode dark:text-dark-mode' width='25px' height='25px' />
      </button>
      <button
        className={`absolute -top-6 right-0 z-[10] flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full ${bg300Color} ${hoverColor300}`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <RightArrowIcon className='text-light-mode dark:text-dark-mode' width='25px' height='25px' />
      </button>
    </div>
  )
}
export default Event
