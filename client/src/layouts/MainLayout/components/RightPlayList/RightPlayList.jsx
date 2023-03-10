import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '~/components/Button'
import { ClockIcon, MoreIcon } from '~/components/Icons'
import { getAlbumPlaylist } from '~/feature/app/appSlice'
import { addPlaylistSongs } from '~/feature/playlist/playlistSlice'
import useColors from '~/hooks/useColors'
import PlayCurrentItem from './PlayCurrentItem'
import PlayItem from './PlayItem'

const RightPlayList = () => {
  const rightMode = useSelector((state) => state.app.rightMode)
  const playlistId = useSelector((state) => state.playlist.playlistId)
  const { ColorBg100, ColorBg200, ColorText500 } = useColors()
  const [musicData, setMusicData] = useState([])
  const [title, setTitle] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (playlistId) {
      dispatch(getAlbumPlaylist(playlistId))
        .unwrap()
        .then((res) => {
          setTitle(res?.title)
          setMusicData(res?.song?.items)
          dispatch(addPlaylistSongs(res?.song?.items))
        })
        .catch((err) => console.log(err))
    }
  }, [playlistId])

  return (
    <div
      className={`fixed -right-[var(--playlist-right-width)] top-0 z-[99999] h-[calc(100vh-var(--player-height))] w-[var(--playlist-right-width)] flex-shrink-0 -translate-x-6 px-2 ${
        rightMode ? 'animate-slide-list-left' : 'animate-slide-list-right'
      }  ${ColorBg100}`}
    >
      <div className='fixed top-0 right-2 mb-5 flex h-header-height items-center'>
        <div className={`p-[2px] ${ColorBg100} mr-2 rounded-full `}>
          <Button type='text' rounded className={`${ColorBg200} px-[15px] py-1 text-[12px] font-bold`}>
            Danh sách phát
          </Button>
          <Button type='text' rounded className={`px-[15px] py-1 text-[12px] font-bold`}>
            Nghe gần đây
          </Button>
        </div>
        <div className='flex flex-grow items-center justify-between'>
          <Button type='text' rounded className={`p-2 ${ColorBg100} mr-1 `}>
            <ClockIcon width='16px' height='16px' className={`${ColorText500}`} />
          </Button>
          <Button type='text' rounded className={`p-2 ${ColorBg100}`}>
            <MoreIcon width='16px' height='16px' className={`${ColorText500}`} />
          </Button>
        </div>
      </div>
      <div className='mt-header-height h-[calc(100vh-var(--header-height)-var(--player-height))] scrollbar'>
        {rightMode && <PlayCurrentItem />}
        <div className='mt-5'>
          <p className='text-sm font-bold text-light-mode dark:text-dark-mode'>Tiếp theo</p>
          <div>
            <span className='mr-1 text-sm font-bold text-gray '>Từ playlist</span>
            <span className='cursor-pointer text-sm text-light-mode dark:text-dark-mode'>{title}</span>
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          {musicData && musicData.map((item, index) => <PlayItem item={item} index={index} key={item.encodeId} />)}
        </div>
      </div>
    </div>
  )
}
export default RightPlayList
