import SeeAllButton from '~/components/SeeAllButton'
import Title from '~/components/Title'
import MVCardItem from '~/components/MVCardItem'
const MV = ({ mv }) => {
  return (
    <div className='flex flex-col'>
      <div className='mb-5 flex items-center justify-between'>
        <Title>{mv?.title}</Title>
        <SeeAllButton />
      </div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {mv?.items?.slice(0, 3).map((item) => (
          <MVCardItem item={item} key={item?.encodeId} />
        ))}
      </div>
    </div>
  )
}
export default MV
