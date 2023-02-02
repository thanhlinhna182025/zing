import { useSelector } from 'react-redux'
import MusicCardItem from '~/components/MusicCardItem'
import MusicCardItemSkeleton from '~/components/Skeleton/MusicCardItemSkeleton'
import Title from '~/components/Title'

const PlayList = ({ playList, recentPlaylist }) => {
  const loading = useSelector((state) => state.app.loading)

  return (
    <div className='my-main-margin '>
      <div className='mb-5'>
        <Title>{playList.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-5'>
        {loading
          ? [0, 1, 2, 3, 4].map((item) => <MusicCardItemSkeleton key={item} />)
          : playList?.items
              ?.slice(0, 5)
              .map((item) => <MusicCardItem item={item} key={item.encodeId} large sortDescription />)}
      </div>
      <div className='mb-5'>
        <Title>{recentPlaylist.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] grid grid-cols-7 '>
        {loading
          ? [0, 1, 2, 3, 4, 5, 6].map((item) => <MusicCardItemSkeleton key={item} />)
          : playList?.items?.slice(5, 12).map((item) => <MusicCardItem item={item} key={item.encodeId} title />)}
      </div>
    </div>
  )
}
export default PlayList
