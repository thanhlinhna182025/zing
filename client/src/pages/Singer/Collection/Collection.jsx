import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'

const Collection = ({ collection }) => {
  return (
    <div className='mb-main-margin '>
      <div className='mb-5 flex items-center justify-between'>
        <Title>{collection?.title}</Title>
      </div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {collection?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} name large title />
        ))}
      </div>
    </div>
  )
}
export default Collection
