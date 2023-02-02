import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'

const Collection = ({ collection }) => {
  return (
    <div className='my-main-margin '>
      <div className='mb-5'>
        <Title>{collection?.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-5'>
        {collection?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} name large title />
        ))}
      </div>
    </div>
  )
}
export default Collection
