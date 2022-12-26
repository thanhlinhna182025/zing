import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoMusic } from '../../../feature/music/musicSlice'
import { PlayerCenter, PlayerLeft, PlayerRight } from './components'

const Player = () => {
  const [musicInfo, setMusicInfo] = useState({})
  const [isPlaying, setIsPlaying] = useState(false)
  const musicId = useSelector((state) => state.music.musicId)
  const dispath = useDispatch()
  const handlePlaying = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    dispath(getInfoMusic(musicId))
      .unwrap()
      .then((result) => setMusicInfo(result))
      .catch((error) => console.log(error))
  }, [musicId])
  return (
    <div className='border-t-solid fixed bottom-0 z-10 flex h-[90px] w-full items-center justify-between border-t border-t-[#414141] bg-main-500 px-5'>
      <PlayerLeft musicInfo={musicInfo} />
      <PlayerCenter handlePlaying={handlePlaying} isPlaying={isPlaying} />
      <PlayerRight />
    </div>
  )
}
export default Player
