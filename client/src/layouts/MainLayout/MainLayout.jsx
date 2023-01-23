import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addError } from '~/feature/app/appSlice'
import { getLinkMusic } from '~/feature/music/musicSlice'
import Header from '~/layouts/MainLayout/components/Header'
import Player from '~/layouts/MainLayout/components/Player'
import SideBar from '~/layouts/MainLayout/components/SideBar'
import Karaoke from '~/pages/Karaoke'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()
  const [url, setUrl] = useState(null)
  const musicId = useSelector((state) => state.music.musicId)
  const karaokeMode = useSelector((state) => state.app.karaokMode)
  const color = useSelector((state) => state.app.color)

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
  const bgColor = `${color === 'B' ? `bg-B` : color === 'C' ? 'bg-C' : color === 'D' ? 'bg-D' : 'bg-A'}`

  return (
    <div className={`${bgColor} relative flex h-[100vh] w-full items-start scrollbar`}>
      <SideBar />
      <div className='mb-[90px] w-full flex-col items-start'>
        <Header />
        <main className='mt-header-margin ml-[240px] w-[calc(100%-240px)] px-header-padding'>{children}</main>
      </div>
      {url && <Player url={url} />}
      {karaokeMode && <Karaoke url={url} />}
    </div>
  )
}
export default MainLayout
