import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import newrelease from '~/assets/images/new-release.jpg'
import AlbumSongItem from '~/components/AlbumSongItem'
import Button from '~/components/Button'
import { PlayFillIcon } from '~/components/Icons'
import Loading from '~/components/Skeleton/Loading'
import configs from '~/configs'
import { getHome } from '~/feature/app/appSlice'
import useColor from '~/hooks/useColor'

const NewReleaseSong = () => {
  const [data, setData] = useState([])
  const [typeData, setTypeData] = useState('all')
  const dispatch = useDispatch()
  const { bgColor, bg300Color, Color200 } = useColor()
  const loading = useSelector((state) => state.app.loading)
  const handleTypeData = (type) => {
    setTypeData(type)
  }
  useEffect(() => {
    dispatch(getHome())
      .unwrap()
      .then((result) => {
        if (typeData === 'vPop') {
          setData(result.items.find((item) => item.sectionType === 'new-release').items?.vPop)
        } else if (typeData === 'others') {
          setData(result.items.find((item) => item.sectionType === 'new-release').items?.others)
        } else {
          setData(result.items.find((item) => item.sectionType === 'new-release').items?.all)
        }
      })
      .catch((err) => console.log(err))
  }, [typeData])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className='mt-[100px]'>
          <div
            className='relative mt-[-100px] mr-[-59px] mb-[20px] px-main-margin xl:ml-[-59px] xl:min-h-[410px]'
            style={{
              backgroundImage: `url(${newrelease})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className={`absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t ${Color200} `}></div>
            <div className={`absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b ${Color200} `}></div>
            <div className=' relative  px-[10px] pt-[70px] lg:pt-[115px]'>
              <div className='mb-[25px] flex items-center lg:mb-[45px]'>
                <h3 className=' mr-[5px] font-[Inter] text-[40px] font-bold capitalize text-light-mode dark:text-dark-mode'>
                  Mới Phát Hành
                </h3>
                <Button type='secondary' rounded className={`px-3 py-3 ${bgColor}`}>
                  <PlayFillIcon className='text-light-mode dark:text-dark-mode' width='16px' height='16px' />
                </Button>
              </div>
              <div className='before:bg-main-200 relative mb-[30px] before:absolute before:bottom-[-14px] before:z-[-1] before:h-[1px] before:w-full before:translate-y-[-50%] xl:mb-[45px]'>
                <NavLink
                  style={({ isActive }) => ({ borderBottom: isActive ? '2px solid #a845de' : 'none' })}
                  className={` mr-[50px] pb-[15px]  text-sm font-[500] text-light-mode dark:text-dark-mode`}
                  to={configs.routes.newreleaseSong}
                  end
                >
                  BÀI HÁT
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({ borderBottom: isActive ? '2px solid #a845de' : 'none' })}
                  className={` py-[15px] text-sm font-[500] text-light-mode dark:text-dark-mode`}
                  to={configs.routes.newreleaseAlbum}
                  end
                >
                  ALBUM
                </NavLink>
              </div>
              <div className='flex'>
                <Button
                  onClick={() => {
                    handleTypeData('all')
                  }}
                  type='primary'
                  rounded
                  className={`mr-[14px] ${
                    typeData === 'all' && bg300Color
                  } py-[4px] px-[24px] text-xs font-[500] leading-[1.42]`}
                >
                  TẤT CẢ
                </Button>
                <Button
                  onClick={() => {
                    handleTypeData('vPop')
                  }}
                  type='primary'
                  rounded
                  className={`mr-[14px] ${
                    typeData === 'vPop' && bg300Color
                  }  py-[4px] px-[24px] text-xs font-[500] leading-[1.42]`}
                >
                  VIỆT NAM
                </Button>
                <Button
                  onClick={() => {
                    handleTypeData('others')
                  }}
                  type='primary'
                  rounded
                  className={`mr-[14px] ${
                    typeData === 'others' && bg300Color
                  }  py-[4px] px-[24px] text-xs font-[500] leading-[1.42]`}
                >
                  QUỐC TẾ
                </Button>
              </div>
            </div>
          </div>
          <div className='relative z-10 mt-[10px] flex max-h-[400px] flex-col lg:scrollbar xl:mt-[-100px]'>
            <div className=' flex h-[46px] w-full items-center border-b-[1px] border-solid border-[#231B2E] p-[10px]'>
              <span className='flex-grow text-xs font-semibold text-light-mode  dark:text-dark-mode lg:w-1/2 lg:flex-grow-0'>
                BÀI HÁT
              </span>
              <span className='hidden flex-1 text-xs font-semibold text-light-mode dark:text-dark-mode lg:inline-block'>
                PHÁT HÀNH
              </span>
              <span className='text-xs font-semibold text-light-mode dark:text-dark-mode'>THỜI GIAN</span>
            </div>
            {data?.map((item, index) => (
              <AlbumSongItem item={item} key={item.encodeId} index={index} release />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default NewReleaseSong
