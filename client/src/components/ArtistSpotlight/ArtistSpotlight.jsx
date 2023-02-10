import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useColors from '~/hooks/useColors'

import { LeftArrowIcon, RightArrowIcon } from '~/components/Icons'
const ArtistSpotlight = ({ artists }) => {
  const { ColorBg100, ColorHoverBg200, ColorText500 } = useColors()

  const swiperRef = useRef()
  return (
    <div className='relative w-full '>
      <Swiper
        className='artistSwiper'
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
            slidesPerView: 5,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 7,
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
        {artists?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={item.path}>
              <div className='hover:opacity-80'>
                <img alt='singer_avata' src={item.avata} />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`${ColorBg100} ${ColorHoverBg200} absolute top-1/2 left-0 z-[1] flex h-[50px] w-[50px]  translate-y-[-50%] items-center justify-center rounded-full drop-shadow-md hover:drop-shadow-xl md:translate-x-[-50%] `}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <LeftArrowIcon className={`${ColorText500}`} width='25px' height='25px' />
      </button>
      <button
        className={`${ColorBg100} ${ColorHoverBg200} absolute top-1/2 right-0 z-[1] flex h-[50px] w-[50px]  translate-y-[-50%] items-center justify-center rounded-full drop-shadow-md hover:drop-shadow-xl md:translate-x-[50%] `}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <RightArrowIcon className={`${ColorText500}`} width='25px' height='25px' />
      </button>
    </div>
  )
}
export default ArtistSpotlight
