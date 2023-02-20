import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LeftArrowIcon, RightArrowIcon } from '~/components/Icons'
import BannerSkeleton from '~/components/Skeleton/BannerSkeleton'
import useColors from '~/hooks/useColors'
import BannerItem from './BannerItem'
const Banner = ({ banner }) => {
  const { ColorBg100, ColorHoverBg200, ColorText500 } = useColors()
  const swiperRef = useRef()
  const loading = useSelector((state) => state.app.loading)

  return (
    <div className='relative'>
      <Swiper
        className='bannerSwiper'
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
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
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop={true}
        navigation={true}
      >
        <div className='grid grid-cols-3 gap-x-5'>
          {loading
            ? [1, 2, 3].map((item) => <BannerSkeleton key={item} />)
            : banner?.items?.map((item) => (
                <SwiperSlide key={item.encodeId}>
                  <BannerItem item={item} />
                </SwiperSlide>
              ))}
        </div>
      </Swiper>
      <button
        className={`${ColorBg100} ${ColorHoverBg200} absolute top-1/2 left-0 z-[1] flex h-[40px] w-[40px] translate-y-[-50%] items-center justify-center rounded-full  drop-shadow-md hover:drop-shadow-xl  md:h-[45px] md:h-[45px] md:translate-x-[-50%] lg:h-[50px] lg:h-[50px] lg:w-[50px] lg:w-[50px] `}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <LeftArrowIcon className={`${ColorText500} h-[20px] w-[20px] lg:h-[24px] lg:h-[24px]`} />
      </button>
      <button
        className={`${ColorBg100} ${ColorHoverBg200} absolute top-1/2 right-0 z-[1] flex h-[40px] w-[40px] translate-y-[-50%] items-center justify-center rounded-full  drop-shadow-md hover:drop-shadow-xl md:h-[45px] md:h-[45px] md:translate-x-[50%] lg:h-[50px] lg:w-[50px] `}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <RightArrowIcon className={`${ColorText500} h-[20px] w-[20px] lg:h-[24px] lg:h-[24px]`} />
      </button>
    </div>
  )
}
export default Banner
