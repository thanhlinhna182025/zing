import { useRef } from 'react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HeartIcon, MoreIcon, PlayVideoIcon } from '~/components/Icons'
import { LeftArrowIcon, RightArrowIcon } from '~/components/Icons/Icons'
import NameArtist from '~/components/NameArtist'
import SortDescription from '~/components/SortDescription'
import useColorHover from '~/hooks/useColorHover'
import useRedirect from '~/hooks/useRedirect'

const KaraokeList = ({ playlists }) => {
  const handleRedirect = useRedirect()
  const { hoverColor300 } = useColorHover()

  const swiperRef = useRef()

  return (
    <div className='relative m-auto w-[1080px]'>
      <Swiper
        className='karaokeListSwiper'
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
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
        centeredSlides={true}
        freeMode={true}
      >
        {playlists?.slice(0, 10).map((item) => (
          <SwiperSlide key={item.encodeId}>
            <div className='px-[14px]' onClick={() => handleRedirect(item)}>
              <div className='group relative mb-3 box-border overflow-hidden rounded-md' key={item.encodeId}>
                <img
                  src={item.thumbnailM}
                  className='w-full rounded-md object-cover transition-all duration-1000 ease-[3000] group-hover:scale-[1.1] hover:ease-[3000]'
                />
                <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.5)]'>
                  <div className='flex items-center gap-x-5'>
                    <div className={`cursor-pointer rounded-full p-[5px] ${hoverColor300}`}>
                      <HeartIcon width='20px' height='20px' className='text-light-mode dark:text-dark-mode' />
                    </div>
                    <PlayVideoIcon
                      width='45px'
                      height='45px'
                      className='cursor-pointer text-light-mode dark:text-dark-mode'
                    />
                    <div className={`rounded-full p-[5px] ${hoverColor300}`}>
                      <MoreIcon
                        width='16px'
                        height='16px'
                        className='cursor-pointer text-light-mode dark:text-dark-mode'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h5 className='hover:text-secondary-100 cursor-pointer truncate text-sm font-bold text-light-mode dark:text-dark-mode'>
                {item.title}
              </h5>
              <NameArtist artists={item.artists} large />
              <SortDescription>{item.sortDescription}</SortDescription>
              <span className='text-xs font-bold text-light-mode dark:text-dark-mode'>{item.releaseDateText}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='swiper-button-prev-karaoke' onClick={() => swiperRef.current?.slidePrev()}>
        <LeftArrowIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
      </button>
      <button className='swiper-button-next-karaoke' onClick={() => swiperRef.current?.slideNext()}>
        <RightArrowIcon className='text-light-mode dark:text-dark-mode' width='14px' height='14px' />
      </button>
    </div>
  )
}
export default KaraokeList
