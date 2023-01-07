import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import MusicCardHightlight from '~/components/MusicCardHightlight'
import Poster from '~/components/Poster'
import SingerListMusic from '~/components/SingerListMusic'
import { getInfoSinger } from '~/feature/singer/singerSlice'
import MV from '~/components/MV'
import SingleSP from '~/components/SingleSP'

const Singer = () => {
  const dispatch = useDispatch()
  const { name } = useParams()
  const [poster, setPoster] = useState({})
  const [isPoster, setIsPoster] = useState(true)
  const [listMusic, setListMusic] = useState({})
  const [hightlightSong, setHightlightSong] = useState({})
  const [singleSP, setSingleSP] = useState({})
  const [mv, setMv] = useState({})

  useEffect(() => {
    dispatch(getInfoSinger(name))
      .unwrap()
      .then((result) => {
        console.log(result)
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
      })
      .catch((err) => console.log(err))
  }, [name])
  return (
    <div className='mb-[200px] w-full'>
      <Poster poster={poster} isPoster={isPoster} />
      <div className='mb-main-margin flex items-start '>
        <MusicCardHightlight item={hightlightSong} large />
        <SingerListMusic listMusic={listMusic} />
      </div>
      <SingleSP singleSP={singleSP} />
      <MV mv={mv}/>
    </div>
  )
}
export default Singer
