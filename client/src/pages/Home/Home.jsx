import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ArtistSpotlight from '~/components/ArtistSpotlight'
import AutoThemeOne from '~/components/AutoThemeOne'
import AutoThemeTwo from '~/components/AutoThemeTwo/AutoThemeTwo'
import Banner from '~/components/Banner'
import Event from '~/components/Event'
import LiveStreamRadio from '~/components/LiveStreamRadio/LiveStreamRadio'
import NewRelease from '~/components/NewRelease'
import PlayList from '~/components/PlayList'
import Top100 from '~/components/Top100'
import WeekChart from '~/components/WeekChart'
import Xone from '~/components/Xone'
import ZingChart from '~/components/ZingChart'
import { artistSpotlightData } from '~/Data'
import { getHome } from '~/feature/app/appSlice'

const Home = () => {
  const dispatch = useDispatch()
  const [banner, setBanner] = useState([])
  const [playList, setPlayList] = useState({})
  const [recentPlaylist, setRecentPlaylist] = useState({})
  const [newRelease, setNewRelease] = useState({})
  const [autoThemeOne, setAutoThemeOne] = useState({})
  const [autoThemeTwo, setAutoThemeTwo] = useState({})
  const [liveStream, setLiveStream] = useState({})
  const [artists, setArtists] = useState(artistSpotlightData)
  const [top100, setTop100] = useState({})
  const [xone, setXone] = useState({})
  const [zingChart, setZingChart] = useState({})
  const [weekChart, setWeekChart] = useState({})
  const [event, setEvent] = useState({})

  useEffect(() => {
    dispatch(getHome())
      .unwrap()
      .then((result) => {
        setBanner(result.items.find((item) => item.sectionType === 'banner' && item.sectionId === 'hSlider'))
        setPlayList(result.items.find((item) => item.sectionType === 'playlist' && item.sectionId === 'hArtistTheme'))
        setRecentPlaylist(
          result.items.find((item) => item.sectionType === 'recentPlaylist' && item.sectionId === 'hRecent')
        )
        setNewRelease(result.items.find((item) => item.sectionType === 'new-release'))
        setAutoThemeOne(
          result.items.find((item) => item.sectionType === 'playlist' && item.sectionId === 'hAutoTheme1')
        )
        setLiveStream(result.items.find((item) => item.sectionType === 'livestream' && item.sectionId === 'hLiveRadio'))
        setAutoThemeTwo(
          result.items.find((item) => item.sectionType === 'playlist' && item.sectionId === 'hAutoTheme2')
        )
        setTop100(result.items.find((item) => item.sectionType === 'playlist' && item.sectionId === 'h100'))
        setXone(result.items.find((item) => item.sectionType === 'playlist' && item.sectionId === 'hXone'))
        setZingChart(result.items.find((item) => item.sectionType === 'RTChart' && item.sectionId === 'hZC'))
        setWeekChart(result.items.find((item) => item.sectionType === 'weekChart'))
        setEvent(result.items.find((item) => item.sectionType === 'event' && item.sectionId === 'hSlider'))
      })
  }, [])
  return (
    <div className=' w-full pt-[32px]'>
      <Banner banner={banner} />
      <NewRelease newRelease={newRelease} />
      <AutoThemeOne autoThemeOne={autoThemeOne} />
      <PlayList playList={playList} recentPlaylist={recentPlaylist} />
      <LiveStreamRadio liveStream={liveStream} />
      <AutoThemeTwo autoThemeTwo={autoThemeTwo} />
      <ZingChart zingChart={zingChart} />
      <WeekChart weekChart={weekChart} />
      <ArtistSpotlight artists={artists} />
      <Top100 top100={top100} />
      <Xone xone={xone} />
      <Event event={event} />
    </div>
  )
}
export default Home
