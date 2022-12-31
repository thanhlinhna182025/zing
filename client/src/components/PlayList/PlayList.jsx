import MusicCard from '~/components/MusicCard'
import Title from '~/components/Title'
const PlayList = ({ playList, recentPlaylist }) => {
  return (
    <div className='my-main-margin '>
      <Title>{playList.title}</Title>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-5'>
        {playList?.items?.slice(0, 5).map((item) => (
          <MusicCard item={item} key={item.encodeId} large />
        ))}
      </div>
      <Title>{recentPlaylist.title}</Title>
      <div className='ml-[-14px] mr-[-14px] grid grid-cols-7 '>
        {playList?.items?.slice(5, 12).map((item) => (
          <MusicCard item={item} key={item.encodeId} />
        ))}
      </div>
    </div>
  )
}
export default PlayList
