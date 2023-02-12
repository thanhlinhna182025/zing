import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import bgOne from '~/assets/images/iu.jpg'
import bgTwo from '~/assets/images/jack.jpg'
import bgThree from '~/assets/images/ji-chang-wook.jpg'
import bgFour from '~/assets/images/lisa.jpg'
import Toast from '~/components/Toast/Toast'
import { setContentError, setError } from '~/feature/app/appSlice'
import { addErrorMusicId, getLinkMusic } from '~/feature/music/musicSlice'
import useColors from '~/hooks/useColors'
import Header from '~/layouts/MainLayout/components/Header'
import Player from '~/layouts/MainLayout/components/Player'
import SideBar from '~/layouts/MainLayout/components/SideBar'
import Karaoke from '~/pages/Karaoke'
import { setOmitPage } from '../../feature/app/appSlice'
import DisplayModal from './components/Header/DisplayModal'
import RightPlayList from './components/RightPlayList'

const MainLayout = ({ children }) => {
  const [isTransparent, setIsTransparent] = useState(false)
  const [urlImg, setUrlImg] = useState()
  const error = useSelector((state) => state.app.error)
  const musicId = useSelector((state) => state.music.musicId)
  const errorMusicId = useSelector((state) => state.music.errorMusicId)
  const color = useSelector((state) => state.app.color)
  const displayMode = useSelector((state) => state.app.displayMode)
  const karaokMode = useSelector((state) => state.app.karaokMode)
  const { ColorBg300 } = useColors()
  const ref = useRef()
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname.startsWith('/album')) {
      dispatch(setOmitPage('album'))
    } else if (location.pathname.startsWith('/playlist')) {
      dispatch(setOmitPage('playlist'))
    }
  }, [location])

  useEffect(() => {
    if (errorMusicId) {
      dispatch(setError(true))
      dispatch(getLinkMusic(errorMusicId))
        .unwrap()
        .then((result) => {
          if (result) {
            dispatch(setContentError(result))
          }
        })
        .catch((error) => console.log(error))
    }
  }, [errorMusicId])
  useEffect(() => {
    let timerId
    if (error) {
      timerId = setTimeout(() => {
        dispatch(setError(false))
        dispatch(addErrorMusicId(null))
      }, 3000)
    }
    return () => {
      clearTimeout(timerId)
    }
  }, [error])

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
    } else if (color === '4') {
      setUrlImg({
        backgroundImage: `url(${bgFour})`,
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
    <div ref={ref} style={urlImg} className={`${ColorBg300} relative flex h-[100vh] w-full items-start scrollbar`}>
      <SideBar />
      <RightPlayList />
      <div className=' w-full flex-col items-start px-2 '>
        <Header isTransparent={isTransparent} />
        <main className='mt-header-height ml-[var(--sidebar-width-sm)] mb-player-height lg:ml-[var(--sidebar-width)] lg:w-[calc(100%-var(--sidebar-width))] lg:px-5 xl:px-main-padding'>
          {children}
        </main>
      </div>
      {musicId && <Player />}
      {karaokMode && <Karaoke />}
      {displayMode && <DisplayModal />}
      {error && <Toast />}
    </div>
  )
}
export default MainLayout
