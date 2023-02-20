import { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useColors from '~/hooks/useColors'
import { LeftArrowIcon, RightArrowIcon } from '../Icons/Icons'
import EventItem from './EventItem'

const Event = ({ event }) => {
  const swiperRef = useRef()
  const { ColorBg100, ColorHoverBg200, ColorText500 } = useColors()

  return (
    <div>
      {event && (
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
            className={`${ColorBg100} ${ColorHoverBg200} absolute top-1/2 left-0 z-[1] flex h-[40px] w-[40px] translate-y-[-50%] items-center justify-center rounded-full drop-shadow-md hover:drop-shadow-xl md:h-[45px] md:h-[45px] md:translate-x-[-50%] lg:h-[50px] lg:w-[50px] `}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <LeftArrowIcon className={`${ColorText500} h-[20px] w-[20px] lg:h-[24px] lg:h-[24px]`} />
          </button>
          <button
            className={`${ColorBg100} ${ColorHoverBg200} absolute top-1/2 right-0 z-[1] flex h-[40px] w-[40px] translate-y-[-50%] items-center justify-center rounded-full drop-shadow-md hover:drop-shadow-xl md:h-[45px] md:h-[45px] md:translate-x-[50%] lg:h-[50px] lg:w-[50px] `}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RightArrowIcon className={`${ColorText500} h-[20px] w-[20px] lg:h-[24px] lg:h-[24px]`} />
          </button>
        </div>
      )}
    </div>
  )
}
export default Event
