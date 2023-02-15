import { useSelector } from 'react-redux'
import MusicCardItem from '~/components/MusicCardItem'
import MusicCardItemSkeleton from '~/components/Skeleton/MusicCardItemSkeleton'
import Title from '~/components/Title'

const PlayList = ({ playList, recentPlaylist }) => {
  const loading = useSelector((state) => state.app.loading)
  return (
    <div className='my-margin-main-sm lg:my-main-margin '>
      <div className='mb-5'>
        <Title>{playList.title}</Title>
      </div>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:ml-[-14px] lg:mr-[-14px] lg:grid-cols-5'>
        {loading
          ? [0, 1, 2, 3, 4].map((item) => <MusicCardItemSkeleton key={item} />)
          : playList?.items
              ?.slice(0, 5)
              .map((item) => <MusicCardItem item={item} key={item.encodeId} large sortDescription />)}
      </div>
      {Boolean(playList?.item?.length > 5) && (
        <div className='mb-5'>
          <Title>{recentPlaylist.title}</Title>
        </div>
      )}
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:ml-[-14px] lg:mr-[-14px] lg:grid-cols-7 '>
        {loading
          ? [0, 1, 2, 3, 4, 5, 6].map((item) => <MusicCardItemSkeleton key={item} />)
          : playList?.items?.slice(5, 12).map((item) => <MusicCardItem item={item} key={item.encodeId} title />)}
      </div>
    </div>
  )
}
export default PlayList
