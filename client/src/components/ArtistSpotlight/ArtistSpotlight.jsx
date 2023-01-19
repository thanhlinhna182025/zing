import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { LeftArrowIcon, RightArrowIcon } from '../Icons/Icons'
const ArtistSpotlight = ({ artists }) => {
  const swiperRef = useRef()
  return (
    <div>
      <div className='relative'>
        <Swiper
          className='artistSwiper'
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
          {artists?.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={item.path}>
                <div className='hover:opacity-80'>
                  <img src={item.avata} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className='swiper-button-prev-artist' onClick={() => swiperRef.current?.slidePrev()}>
          <LeftArrowIcon className='text-gray' width='14px' height='14px' />
        </button>
        <button className='swiper-button-next-artist' onClick={() => swiperRef.current?.slideNext()}>
          <RightArrowIcon className='text-gray' width='14px' height='14px' />
        </button>
      </div>
    </div>
  )
}
export default ArtistSpotlight
