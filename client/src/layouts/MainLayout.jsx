import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLinkMusic } from '../feature/music/musicSlice'
import Header from './components/Header'
import Player from './components/Player/Player'
import SideBar from './components/SideBar'

const MainLayout = ({ children }) => {
  const [url, setUrl] = useState()
  const dispath = useDispatch()
  const musicId = useSelector((state) => state.music.musicId)
  useEffect(() => {
    dispath(getLinkMusic(musicId))
      .unwrap()
      .then((result) => {
        setUrl(result['128'])
      })
      .catch((error) => console.log(error))
  }, [musicId])
  return (
    <div className='flex h-[100vh] w-full items-start bg-main-500 scrollbar'>
      <SideBar />
      <div className='mb-[90px] flex-col items-start px-header-padding'>
        <Header />
        <main className='mt-header-margin ml-[240px]'>{children}</main>
      </div>
      <Player url={url} />
    </div>
  )
}
export default MainLayout
