import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useColor from '~/hooks/useColor'

import { LeftArrowIcon, RightArrowIcon } from '~/components/Icons'
const ArtistSpotlight = ({ artists }) => {
  const { bg300Color, hoverColor300 } = useColor()

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
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false
        // }}
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
      <div
        className={`absolute -top-6 left-0 z-[10] flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full ${bg300Color} ${hoverColor300}`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <LeftArrowIcon className='text-light-mode dark:text-dark-mode' width='25px' height='25px' />
      </div>
      <div
        className={`absolute -top-6 right-0 z-[10] flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full ${bg300Color} ${hoverColor300}`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <RightArrowIcon className='text-light-mode dark:text-dark-mode' width='25px' height='25px' />
      </div>
    </div>
  )
}
export default ArtistSpotlight
