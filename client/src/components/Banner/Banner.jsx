import { useRef } from 'react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LeftArrowIcon, RightArrowIcon } from '../Icons/Icons'
import BannerItem from './BannerItem'
const Banner = ({ banner }) => {
  const swiperRef = useRef()

  return (
    <div className='relative'>
      <Swiper
        className='bannerSwiper'
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
        {banner?.items?.map((item) => (
          <SwiperSlide key={item.encodeId}>
            <BannerItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='swiper-button-prev-banner' onClick={() => swiperRef.current?.slidePrev()}>
        <LeftArrowIcon className='text-light-mode dark:text-dark-mode' width='25px' height='25px' />
      </button>
      <button className='swiper-button-next-banner' onClick={() => swiperRef.current?.slideNext()}>
        <RightArrowIcon className='text-light-mode dark:text-dark-mode' width='25px' height='25px' />
      </button>
    </div>
  )
}
export default Banner
