import { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LeftArrowIcon, RightArrowIcon } from '~/components/Icons/Icons'
import useColors from '~/hooks/useColors'
import KaraokeItem from './KaraokeItem'
const KaraokeList = ({ playlists }) => {
  const swiperRef = useRef()
  const { ColorBg100, ColorHoverBg200, ColorText500 } = useColors()

  return (
    <div className='relative'>
      <Swiper
        className='karaokeSwiper'
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={10}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 7,
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
        {playlists?.map((item) => (
          <SwiperSlide key={item.encodeId}>
            <KaraokeItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`${ColorBg100} ${ColorHoverBg200} absolute top-1/2 left-3 z-[1] flex h-[50px] w-[50px] translate-y-[-50%]  items-center justify-center rounded-full drop-shadow-md hover:drop-shadow-xl`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <LeftArrowIcon className={`${ColorText500}`} width='25px' height='25px' />
      </button>
      <button
        className={`${ColorBg100} ${ColorHoverBg200} absolute right-3 top-1/2 z-[1] flex h-[50px] w-[50px] translate-y-[-50%] items-center justify-center rounded-full drop-shadow-md hover:drop-shadow-xl`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <RightArrowIcon className={`${ColorText500}`} width='25px' height='25px' />
      </button>
    </div>
  )
}
export default KaraokeList
