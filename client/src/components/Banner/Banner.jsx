import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Autoplay, EffectCoverflow, Navigation } from 'swiper'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { addMusicId } from '~/feature/music/musicSlice'
const Banner = ({ banner }) => {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const handleClick = (item) => {
    if (item.type === 1 || item.link.startsWith('/bai-hat')) {
      dispath(addMusicId(item.encodeId))
    } else if (item.type === 4 || item.link.startsWith('/album')) {
      const link = item?.link.split('.')[0]
      navigate(link)
    } else if (item.type === 5) {
      console.log('Chua su ly')
    } else {
      console.log('Khong thuoc truong hop tren')
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
    >
      {banner?.items?.map((item) => (
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
