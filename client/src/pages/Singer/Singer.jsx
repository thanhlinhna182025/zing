import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import MusicCardHightlight from '~/components/MusicCardHightlight'
import { getInfoSinger } from '~/feature/singer/singerSlice'
import AboutSinger from './AboutSinger'
import Appear from './Appear'
import Collection from './Collection'
import MayBeYouLike from './MayBeYouLike/MayBeYouLike'
import MV from './MV/MV'
import Poster from './Poster/Poster'
import SingerListMusic from './SingerListMusic'
import SingleSP from './SingleSP/SingleSP'

const Singer = () => {
  const dispatch = useDispatch()
  const { name } = useParams()
  const [poster, setPoster] = useState({})
  const [isPoster, setIsPoster] = useState(true)
  const [listMusic, setListMusic] = useState({})
  const [hightlightSong, setHightlightSong] = useState({})
  const [singleSP, setSingleSP] = useState({})
  const [mv, setMv] = useState({})
  const [collection, setCollection] = useState({})
  const [appear, setAppear] = useState({})
  const [mayBeYouLike, setMayBeYouLike] = useState({})
  const [aboutSinger, setAboutSinger] = useState({})

  useEffect(() => {
    dispatch(getInfoSinger(name))
      .unwrap()
      .then((result) => {
        if (result.cover.includes('default')) {
          setPoster({
            cover: result.cover,
            follow: result.follow,
            name: result.name,
            thumbnail: result.thumbnail
          })
          setIsPoster(false)
        } else {
          setPoster({
            cover: result.cover,
            follow: result.follow,
            name: result.name,
            thumbnail: result.thumbnail
          })
          setIsPoster(true)
        }
        setListMusic(result?.sections.find((item) => item.sectionId === 'aSongs'))
        setHightlightSong(result?.sections?.find((item) => item.sectionId === 'aSongs').topAlbum)
        setSingleSP(result?.sections?.find((item) => item?.sectionId === 'aSingle'))
        setMv(result?.sections?.find((item) => item?.sectionId === 'aMV'))
        setCollection(result?.sections?.find((item) => item?.title === 'Tuyển tập'))
        setAppear(result?.sections?.find((item) => item?.title === 'Xuất hiện trong'))
        setMayBeYouLike(result?.sections?.find((item) => item?.sectionId === 'aReArtist'))
        setAboutSinger({ biography: result?.biography, thumbnailM: result?.thumbnailM, follow: result?.follow })
      })
      .catch((err) => console.log(err))
  }, [name])
  return (
    <div className='mb-player-height w-full'>
      <Poster poster={poster} isPoster={isPoster} />
      <div className='mb-main-margin flex items-start '>
        <MusicCardHightlight item={hightlightSong} large />
        <SingerListMusic listMusic={listMusic} />
      </div>
      <SingleSP singleSP={singleSP} />
      <MV mv={mv} />
      <Collection collection={collection} />
      <Appear appear={appear} />
      <MayBeYouLike mayBeYouLike={mayBeYouLike} />
      <AboutSinger aboutSinger={aboutSinger} />
    </div>
  )
}
export default Singer
