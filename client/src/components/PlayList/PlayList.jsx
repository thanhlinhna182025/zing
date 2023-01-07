import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'
const PlayList = ({ playList, recentPlaylist }) => {
  return (
    <div className='my-main-margin '>
      <div className='mb-5'>
        <Title>{playList.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-5'>
        {playList?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} large sortDescription/>
        ))}
      </div>
      <div className='mb-5'>
        <Title>{recentPlaylist.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] grid grid-cols-7 '>
        {playList?.items?.slice(5, 12).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} title />
        ))}
      </div>
    </div>
  )
}
export default PlayList
