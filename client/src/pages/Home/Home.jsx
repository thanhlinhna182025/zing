import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AutoThemeOne from '~/components/AutoThemeOne'
import Banner from '~/components/Banner'
import NewRelease from '~/components/NewRelease'
import PlayList from '~/components/PlayList'
import { getHome } from '~/feature/app/appSlice'

const Home = () => {
  const dispatch = useDispatch()
  const [banner, setBanner] = useState([])
  const [playList, setPlayList] = useState({})
  const [recentPlaylist, setRecentPlaylist] = useState({})
  const [newRelease, setNewRelease] = useState({})
  const [autoTheme, setAutoTheme] = useState({})

  useEffect(() => {
    dispatch(getHome())
      .unwrap()
      .then((result) => {
        console.log(result)
        setBanner(result.items.find((item) => item.sectionType === 'banner' && item.sectionId === 'hSlider'))
        setPlayList(result.items.find((item) => item.sectionType === 'playlist' && item.sectionId === 'hArtistTheme'))
        setRecentPlaylist(
          result.items.find((item) => item.sectionType === 'recentPlaylist' && item.sectionId === 'hRecent')
        )
        setNewRelease(result.items.find((item) => item.sectionType === 'new-release'))
        setAutoTheme(result.items.find((item) => item.sectionType === 'playlist' && item.sectionId === 'hAutoTheme1'))
      })
  }, [])
  return (
    <div className='w-full pt-[32px]'>
      <Banner banner={banner} />
      <PlayList playList={playList} recentPlaylist={recentPlaylist} />
      <NewRelease newRelease={newRelease} />
      <AutoThemeOne autoTheme={autoTheme} />
    </div>
  )
}
export default Home
