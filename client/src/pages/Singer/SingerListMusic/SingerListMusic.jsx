import Title from '~/components/Title'
import SeeAllButton from '~/components/SeeAllButton'
import SingerSongItem from './SingerSongItem/SingerSongItem'

const SingerListMusic = ({ listMusic }) => {
  const { title, items } = listMusic
  return (
    <div className='flex-grow'>
      <div className='mb-5 flex justify-between'>
        <Title>{title}</Title>
        <SeeAllButton />
      </div>
      <div className='grid grid-cols-2 grid-rows-3 gap-x-5'>
        {items?.slice(0, 6).map((item) => (
          <SingerSongItem key={item.encodeId} item={item} />
        ))}
      </div>
    </div>
  )
}
export default SingerListMusic
