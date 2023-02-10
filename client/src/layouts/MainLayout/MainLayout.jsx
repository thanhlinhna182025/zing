import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bgOne from '~/assets/images/iu.jpg'
import bgTwo from '~/assets/images/jack.jpg'
import bgThree from '~/assets/images/ji-chang-wook.jpg'
import bgFour from '~/assets/images/lisa.jpg'
import { getLinkMusic } from '~/feature/music/musicSlice'
import useColors from '~/hooks/useColors'
import Header from '~/layouts/MainLayout/components/Header'
import Player from '~/layouts/MainLayout/components/Player'
import SideBar from '~/layouts/MainLayout/components/SideBar'
import Karaoke from '~/pages/Karaoke'
import DisplayModal from './components/Header/DisplayModal'
import RightPlayList from './components/RightPlayList'
const MainLayout = ({ children }) => {
  const { ColorBg300 } = useColors()
  const dispatch = useDispatch()
  const [url, setUrl] = useState(null)
  const musicId = useSelector((state) => state.music.musicId)
  const color = useSelector((state) => state.app.color)
  const displayMode = useSelector((state) => state.app.displayMode)
  const ref = useRef()
  const [urlImg, setUrlImg] = useState()
  const [isTransparent, setIsTransparent] = useState(false)

  useEffect(() => {
    if (musicId) {
      dispatch(getLinkMusic(musicId))
        .unwrap()
        .then((result) => {
          console.log(result)
          if (result) {
            if (result.error) {
              console.log('Tai khoan VIP')
            } else {
              setUrl(result['128'])
            }
          }
        })
        .catch((error) => console.log(error))
    }
  }, [musicId])
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
      {url && <Player url={url} />}
      <Karaoke url={url} />
      {displayMode && <DisplayModal />}
    </div>
  )
}
export default MainLayout
