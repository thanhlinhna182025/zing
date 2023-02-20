import SeeAllButton from '~/components/SeeAllButton'
import Title from '~/components/Title'
import SingerSongItem from './SingerSongItem/SingerSongItem'

const SingerListMusic = ({ listMusic }) => {
  const { title, items } = listMusic
  return (
    <div className='mt-5 w-full flex-grow xl:mt-0'>
      <div className='mb-5 flex justify-between'>
        <Title>{title}</Title>
        <SeeAllButton />
      </div>
      <div className='grid w-full grid-cols-1 grid-rows-3 gap-x-5 xl:grid-cols-2'>
        {items?.slice(0, 6).map((item) => (
          <SingerSongItem key={item.encodeId} item={item} />
        ))}
      </div>
    </div>
  )
}
export default SingerListMusic
