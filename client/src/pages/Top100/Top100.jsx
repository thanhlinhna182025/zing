import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import banner100 from '~/assets/images/banner-100.png'
import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'
import { getTop100 } from '~/feature/app/appSlice'

const Top100 = () => {
  const [top100Data, setTop100Data] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTop100())
      .unwrap()
      .then((res) => {
        setTop100Data(res)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <div className='relative z-10 mt-[-70px] mr-[-59px] ml-[-59px] h-[280px] bg-transparent'>
        <div
          style={{
            backgroundImage: `url(${banner100})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className='absolute top-0 left-0 right-0 bottom-0 z-0 sepia'
        ></div>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[1] bg-gradient-to-b from-[hsla(0,0%,100%,0)] to-[hsla(214,55%,20%)]'></div>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[1] bg-gradient-to-t from-[hsla(0,0%,100%,0)] to-[hsla(214,55%,20%)]'></div>
        <div></div>
      </div>
      <div className='pt-3'>
        <div className='mb-5'>
          <Title>{top100Data[0]?.title}</Title>
          <div className='mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            {top100Data[0]?.items?.slice(0, 5).map((item) => (
              <MusicCardItem item={item} name title key={item.encodeId} />
            ))}
          </div>
        </div>
        <div className='mb-5 '>
          <Title>{top100Data[1]?.title}</Title>
          <div className='mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            {top100Data[1]?.items?.map((item) => (
              <MusicCardItem item={item} name title key={item.encodeId} />
            ))}
          </div>
        </div>
        <div className='mb-5 '>
          <Title>{top100Data[2]?.title}</Title>
          <div className='mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            {top100Data[2]?.items?.map((item) => (
              <MusicCardItem item={item} name title key={item.encodeId} />
            ))}
          </div>
        </div>
        <div className='mb-5 '>
          <Title>{top100Data[3]?.title}</Title>
          <div className='mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            {top100Data[3]?.items?.map((item) => (
              <MusicCardItem item={item} name title key={item.encodeId} />
            ))}
          </div>
        </div>
        <div className='mb-5 '>
          <Title>{top100Data[4]?.title}</Title>
          <div className='mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            {top100Data[4]?.items?.map((item) => (
              <MusicCardItem item={item} name title key={item.encodeId} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Top100
