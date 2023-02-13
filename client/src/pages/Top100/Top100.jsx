import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import banner100 from '~/assets/images/banner-100.png'
import MusicCardItem from '~/components/MusicCardItem'
import Loading from '~/components/Skeleton/Loading'
import Title from '~/components/Title'
import { getTop100 } from '~/feature/app/appSlice'
import useColors from '~/hooks/useColors'

const Top100 = () => {
  const [top100Data, setTop100Data] = useState([])
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.app.loading)
  const { ColorGradient500ToBottom, ColorGradient500ToTop } = useColors()

  useEffect(() => {
    dispatch(getTop100())
      .unwrap()
      .then((res) => {
        setTop100Data(res)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className='relative lg:mr-[-59px] lg:ml-[-59px] h-[280px] bg-transparent'>
            <div
              style={{
                backgroundImage: `url(${banner100})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className='absolute top-0 left-0 right-0 bottom-0 z-0 sepia'
            ></div>
            <div
              className={`${ColorGradient500ToBottom} absolute top-0 left-0 right-0 bottom-0 z-[1] bg-gradient-to-b `}
            ></div>
            <div className={`absolute top-0 left-0 right-0 bottom-0 z-[1] bg-gradient-to-t `}></div>
            <div></div>
          </div>
          <div className='pt-3'>
            <div className='mb-5'>
              <Title>{top100Data[0]?.title}</Title>
              <div className='mt-5 grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                {top100Data[0]?.items?.slice(0, 5).map((item) => (
                  <MusicCardItem item={item} name title key={item.encodeId} />
                ))}
              </div>
            </div>
            <div className='mb-5 '>
              <Title>{top100Data[1]?.title}</Title>
              <div className='mt-5 grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                {top100Data[1]?.items?.map((item) => (
                  <MusicCardItem item={item} name title key={item.encodeId} />
                ))}
              </div>
            </div>
            <div className='mb-5 '>
              <Title>{top100Data[2]?.title}</Title>
              <div className='mt-5 grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                {top100Data[2]?.items?.map((item) => (
                  <MusicCardItem item={item} name title key={item.encodeId} />
                ))}
              </div>
            </div>
            <div className='mb-5 '>
              <Title>{top100Data[3]?.title}</Title>
              <div className='mt-5 grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                {top100Data[3]?.items?.map((item) => (
                  <MusicCardItem item={item} name title key={item.encodeId} />
                ))}
              </div>
            </div>
            <div className='mb-5 '>
              <Title>{top100Data[4]?.title}</Title>
              <div className='mt-5 grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                {top100Data[4]?.items?.map((item) => (
                  <MusicCardItem item={item} name title key={item.encodeId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Top100
