import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bgOne from '~/assets/images/bg_1.jpg'
import bgTwo from '~/assets/images/bg_2.jpg'
import bgThree from '~/assets/images/bg_3.jpg'
import { addError } from '~/feature/app/appSlice'
import { getLinkMusic } from '~/feature/music/musicSlice'
import Header from '~/layouts/MainLayout/components/Header'
import Player from '~/layouts/MainLayout/components/Player'
import SideBar from '~/layouts/MainLayout/components/SideBar'
import Karaoke from '~/pages/Karaoke'
import RightPlayList from './components/RightPlayList'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()
  const [url, setUrl] = useState(null)
  const musicId = useSelector((state) => state.music.musicId)
  const color = useSelector((state) => state.app.color)
  const ref = useRef()

  const [urlImg, setUrlImg] = useState()
  const [isTransparent, setIsTransparent] = useState(false)

  useEffect(() => {
    dispatch(getLinkMusic(musicId))
      .unwrap()
      .then((result) => {
        if (result.error) {
          dispatch(addError(result.msg))
        } else {
          setUrl(result['128'])
          dispatch(addError(null))
        }
      })
      .catch((error) => console.log(error))
  }, [musicId])
  const bgColor = `${color === 'B' ? `bg-B-200` : color === 'C' ? 'bg-C-200' : color === 'D' ? 'bg-D-200' : 'bg-A-200'}`
  useEffect(() => {
    if (color === '1') {
      setUrlImg({
        backgroundImage: `url(${bgOne})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      })
    } else if (color === '2') {
      setUrlImg({
        backgroundImage: `url(${bgTwo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      })
    } else if (color === '3') {
      setUrlImg({
        backgroundImage: `url(${bgThree})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      })
    } else {
      setUrlImg({})
    }
  }, [color])
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', handleHeaderColor)
    }
    return () => {
      if (ref.current) ref.current.removeEventListener('scroll', handleHeaderColor)
    }
  }, [])
  const handleHeaderColor = () => {
    if (ref.current.scrollTop >= 32) {
      setIsTransparent(false)
    } else {
      setIsTransparent(true)
    }
  }

  return (
    <div ref={ref} style={urlImg} className={`${bgColor} relative flex h-[100vh] w-full items-start scrollbar`}>
      <SideBar />
      <RightPlayList />
      <div className=' w-full flex-col items-start '>
        <Header isTransparent={isTransparent} />
        <main className='mt-header-margin ml-[240px] mb-player-height w-[calc(100%-240px)] px-header-padding'>
          {children}
        </main>
      </div>
      {url && <Player url={url} />}
      <Karaoke url={url} />
    </div>
  )
}
export default MainLayout
