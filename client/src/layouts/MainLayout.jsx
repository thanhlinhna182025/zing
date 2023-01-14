import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLinkMusic } from '~/feature/music/musicSlice'
import Header from '~/layouts/components/Header'
import Player from '~/layouts/components/Player'
import SideBar from '~/layouts/components/SideBar'
import { addError } from '../feature/app/appSlice'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.app.error)
  const [url, setUrl] = useState(null)
  
  const musicId = useSelector((state) => state.music.musicId)


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

  return (
    <div className='flex h-[100vh] w-full items-start bg-main-500 scrollbar'>
      <SideBar />
      <div className='mb-[90px] w-full flex-col items-start'>
        <Header />
        <main className='mt-header-margin ml-[240px] w-[calc(100%-240px)] px-header-padding'>{children}</main>
      </div>
      {url && <Player url={url} />}
    </div>
  )
}
export default MainLayout
