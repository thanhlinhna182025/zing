import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Autoplay, EffectCoverflow, Navigation } from 'swiper'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getBanner } from '~/feature/app/appSlice'
import { addMusicId } from '../../feature/music/musicSlice'
const Banner = () => {
  const banner = useSelector((state) => state.app.banner)
  const navigate = useNavigate()

  const dispath = useDispatch()
  useEffect(() => {
    const promise = dispath(getBanner())
    return () => {
      promise.abort()
    }
  }, [dispath])
  const handleClick = (item) => {
    if (item?.type === 1) {
      dispath(addMusicId(item.encodeId))
    } else if (item?.type === 3 || item?.type === 4) {
      const link = item?.link.split('.')[0]
      navigate(link)
    }
  }

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay, EffectCoverflow]}
      className='mySwiper'
      spaceBetween={32}
      slidesPerView={3}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      loop={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {banner?.map((item) => (
        <SwiperSlide key={item.encodeId}>
          <div className='rounded-lg'>
            <img src={item.banner} className='rounded-lg' onClick={() => handleClick(item)} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Banner
