import { useRef } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const Carousel = () => {
  const swiperRef = useRef()

  return (
    <div className='relative'>
      <Swiper
        className='liveSwiper'
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
      </Swiper>
      <button className='swiper-button-prev-live' onClick={() => swiperRef.current?.slidePrev()}>
        Prev
      </button>
      <button className='swiper-button-next-live' onClick={() => swiperRef.current?.slideNext()}>
        Next
      </button>
    </div>
  )
}

export default Carousel
