import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  BackMusicIcon,
  CloseCirleIcon,
  ExitFullScreenIcon,
  ExpandFullScreenIcon,
  HeartIcon,
  MoreIcon,
  MusicNodeIcon,
  NextMusicIcon,
  PauseVieoIcon,
  PlayFillIcon,
  VolumeIcon,
  VolumeMutedIcon
} from '~/components/Icons'
import Load from '~/components/Load'
import NameArtist from '~/components/NameArtist'
import { getVideo } from '~/feature/app/appSlice'
import useColors from '~/hooks/useColors'
import { secondToMinuteAndSecond } from '~/utils/hepper'
import VideoClipItem from './VideoClipItem'
const VideoClip = () => {
  //Local State
  const [video, setVideo] = useState({})
  const [open, setOpen] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volumeValue, setVolumeValue] = useState(50)
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [hasFullScreen, setHasFullScreen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [poster, setPoster] = useState(null)
  const [url, setUrl] = useState('')

  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const videoRef = useRef()
  const volumeRef = useRef()
  const playVideoRef = useRef()
  const currentTimeRef = useRef()
  const videoContainerRef = useRef()
  // CSS
  const { ColorBg200, ColorBg400, ColorHoverBg300, ColorText500, ColorBg100 } = useColors()
  const style = {
    backgroundSize: `${volumeValue}% 100%`
  }
  const currentTimeType = {
    backgroundSize: `${(currentTime / video?.duration).toFixed(2) * 100}% 100%`
  }

  useEffect(() => {
    setLoading(true)
    dispatch(getVideo(id))
      .unwrap()
      .then((result) => {
        setVideo(result)
        setIsPlaying(false)
        setLoading(false)
        setPoster(result?.thumbnailM)
        if (result?.streaming?.mp4['720p']) {
          setUrl(result?.streaming?.mp4['720p'])
        } else if (result?.streaming?.mp4['480p']) {
          setUrl(result?.streaming?.mp4['480p'])
        } else {
          setUrl(result?.streaming?.mp4['360p'])
        }
      })
      .catch((err) => console.log(err))
  }, [id])

  useEffect(() => {
    if (isMuted) {
      videoRef.current.volume = 0
      setVolumeValue(0)
    } else {
      videoRef.current.volume = volumeValue / 100
    }
  }, [volumeValue, isMuted])
  useEffect(() => {
    let timerId
    if (isPlaying) {
      timerId = setInterval(() => {
        if (videoRef.current) setCurrentTime(Number(videoRef.current.currentTime.toFixed()))
      }, 1000)
    }
    return () => {
      if (videoRef.current) clearInterval(timerId)
    }
  }, [isPlaying])
  useEffect(() => {
    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor((currentTime / 60) % 60)
    setSecond(seconds)
    setMinute(minutes)
  }, [currentTime])

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(video.duration)
      videoRef.current.load()
    }
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleEnded)
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleEnded)
      }
    }
  }, [])
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('click', handleClick)
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('click', handleClick)
      }
    }
  }, [isPlaying])
  const handleClose = () => {
    setOpen(false)
    navigate('/list_mv')
  }

  const togglePlay = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }
  const handleVolume = (e) => {
    setIsMuted(false)
    setVolumeValue(e.target.value)
  }

  const handleCurrentTime = (e) => {
    setCurrentTime(e.target.value)
    videoRef.current.currentTime = e.target.value
  }

  const handleClick = () => {
    setIsPlaying((pre) => !pre)
    togglePlay()
  }

  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setHasFullScreen(false)
    } else if (document.webkitFullscreenElement) {
      // Need this to support Safari
      document.webkitExitFullscreen()
      setHasFullScreen(false)
    } else if (videoContainerRef.current.webkitRequestFullscreen) {
      // Need this to support Safari
      videoContainerRef.current.webkitRequestFullscreen()
      setHasFullScreen(true)
    } else {
      videoContainerRef.current.requestFullscreen()
      setHasFullScreen(true)
    }
  }

  return (
    <div
      className={`${ColorBg200} ${
        open ? 'animate-slide-top' : 'animate-slide-bottom'
      } flex min-h-[100vh] flex-col p-1 md:p-2 lg:p-5`}
    >
      {loading ? (
        <Load />
      ) : (
        <div>
          <div className='mb-8 flex justify-between'>
            <div className='flex items-center gap-3'>
              <div className='h-10 w-10 overflow-hidden rounded-full'>
                <img alt='thumbnail' src={video?.artist?.thumbnail} className='block w-full object-cover' />
              </div>
              <div>
                <h5 className={`${ColorText500} text-[20px] font-bold`}>{video?.song?.title}</h5>
                <NameArtist artists={video?.artists} large />
              </div>
              <div className='flex items-center gap-x-3'>
                <button className={`${ColorBg100} ${ColorHoverBg300} rounded-full p-2 `}>
                  <HeartIcon className={`${ColorText500} `} width='20px' height='20px' />
                </button>
                <button className={`${ColorBg100} ${ColorHoverBg300} rounded-full p-2 `}>
                  <MusicNodeIcon className={`${ColorText500} `} width='20px' height='20px' />
                </button>
                <button className={`${ColorBg100} ${ColorHoverBg300} rounded-full p-2 `}>
                  <MoreIcon className={`${ColorText500} `} width='20px' height='20px' />
                </button>
              </div>
            </div>
            <div>
              <button onClick={handleClose} className={`${ColorBg100} ${ColorHoverBg300} rounded-full p-2 `}>
                <CloseCirleIcon className={`${ColorText500} `} width='20px' height='20px' />
              </button>
            </div>
          </div>
          <div
            className='group/video flex w-full flex-col items-start justify-center lg:flex-row'
            ref={videoContainerRef}
          >
            <div className={`${hasFullScreen ? 'w-full' : 'mb-5 w-full lg:mb-0 lg:w-[70%]'} relative `}>
              <video poster={poster} className='h-full w-full' ref={videoRef}>
                <source src={url} />
              </video>
              {!isPlaying && (
                <div
                  ref={playVideoRef}
                  onClick={handleClick}
                  className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[rgba(0,0,0,0.5)] p-5`}
                >
                  <PlayFillIcon className='text-white' width='30px' height='30px' />
                </div>
              )}
              <div className='z-1 absolute bottom-4 left-5 right-5 flex hidden h-[60px] flex-col px-10 group-hover/video:flex'>
                <div className='mb-2'>
                  <input
                    onChange={handleCurrentTime}
                    ref={currentTimeRef}
                    value={currentTime}
                    className='h-[4px] w-full '
                    type='range'
                    name='volume'
                    min='0'
                    max={video?.duration}
                    step='1'
                    style={currentTimeType}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <button>
                      <BackMusicIcon className='mr-5 text-white' width='20px' height='20px' />
                    </button>
                    <button onClick={togglePlay}>
                      {isPlaying ? (
                        <PauseVieoIcon className='mr-5 text-white' width='22px' height='22px' />
                      ) : (
                        <PlayFillIcon className='mr-5 text-white' width='22px' height='22px' />
                      )}
                    </button>
                    <button>
                      <NextMusicIcon className='mr-5 text-white' width='20px' height='20px' />
                    </button>
                    <div className='group/volume flex items-center'>
                      {isMuted ? (
                        <button onClick={() => setIsMuted(false)}>
                          <VolumeMutedIcon className='text-white' width='24px' height='24px' />
                        </button>
                      ) : (
                        <button onClick={() => setIsMuted(true)}>
                          <VolumeIcon className='text-white' width='24px' height='24px' />
                        </button>
                      )}
                      <input
                        onChange={handleVolume}
                        ref={volumeRef}
                        value={volumeValue}
                        className='hidden h-[4px] w-[0px] group-hover/volume:inline-block group-hover/volume:w-[100px]'
                        type='range'
                        name='volume'
                        min='0'
                        max='100'
                        step='1'
                        style={style}
                      />
                    </div>
                    <div className='ml-3 flex items-center'>
                      <div className='flex w-[51px] items-center border-r-[1px] border-solid border-[#eee]'>
                        <span className='text-white'>{minute < 10 ? '0' + minute : minute}:</span>
                        <span className='text-white'>{second < 10 ? '0' + second : second}</span>
                      </div>
                      <div className='px-2 text-white'>{secondToMinuteAndSecond(video?.duration)}</div>
                    </div>
                  </div>
                  <div>
                    <button onClick={toggleFullScreen}>
                      {hasFullScreen ? (
                        <ExitFullScreenIcon className='text-white' width='20px' height='20px' />
                      ) : (
                        <ExpandFullScreenIcon className='text-white' width='20px' height='20px' />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${hasFullScreen ? 'hidden' : `${ColorBg400} flex w-full flex-col  lg:p-4 md:p-2 p-1 lg:ml-5 lg:w-[30%] `} `}
            >
              <div className='mb-5 flex justify-between'>
                <p className='hidden md:inline-block'>DANH SÁCH PHÁT</p>
                <label className='relative inline-flex cursor-pointer items-center'>
                  <input type='checkbox' defaultValue className='peer sr-only' defaultChecked />
                  <div className="bg-gray-200 dark:bg-gray-700 after:border-gray-300 dark:border-gray-600 peer h-6 w-11 rounded-full after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800" />
                  <span className='text-gray-900 dark:text-gray-300 ml-3 text-sm font-medium'>Tự Động Phát</span>
                </label>
              </div>
              <div className={`grid max-h-[440px] grid-cols-1 md:gap-y-2 gap-y-1 lg:gap-y-3 scrollbar md:grid-cols-2 lg:grid-cols-1`}>
                {video?.recommends?.map((item) => (
                  <VideoClipItem item={item} key={item.encodeId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default VideoClip
