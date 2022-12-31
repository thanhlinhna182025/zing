import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoMusic, playingToggle } from '~/feature/music/musicSlice'
import { PlayerCenter, PlayerLeft, PlayerRight } from './components'
const Player = ({ url }) => {
  const audioRef = useRef()
  const isPlaying = useSelector((state) => state.music.isPlaying)
  const musicId = useSelector((state) => state.music.musicId)
  // console.log('musicId :', musicId, 'isPlaying :', isPlaying)
  const [musicInfo, setMusicInfo] = useState({})
  const dispath = useDispatch()
  const playAudio = async () => {
    await audioRef.current.play()
  }
  const pauseAudio = () => {
    audioRef.current.pause()
  }
  const togglePlaying = () => {
    dispath(playingToggle(!isPlaying))
  }

  useEffect(() => {
    dispath(getInfoMusic(musicId))
      .unwrap()
      .then((result) => setMusicInfo(result))
      .catch((error) => console.log(error))
  }, [musicId])
  useEffect(() => {
    if (isPlaying) {
      playAudio()
    } else {
      pauseAudio()
    }
  }, [url, isPlaying])

  return (
    <div className='border-t-solid fixed bottom-0 z-10 flex h-[90px] w-full items-center justify-between border-t border-t-[#414141] bg-main-500 px-5'>
      <audio src={url} ref={audioRef}></audio>
      <PlayerLeft musicInfo={musicInfo} />
      <PlayerCenter isPlaying={isPlaying} togglePlaying={togglePlaying} musicInfo={musicInfo} />
      <PlayerRight />
    </div>
  )
}
export default Player
