import MVCardItem from '~/components/MVCardItem'
import SeeAllButton from '~/components/SeeAllButton'
import Title from '~/components/Title'

const MV = ({ mv }) => {
  console.log(mv)
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between'>
        <Title>{mv.title}</Title>
        <SeeAllButton />
      </div>
      <div className='grid grid-cols-3 gap-x-8'>
        {mv?.items?.slice(0, 3).map((item) => (
          <MVCardItem item={item} key={item.encodeId} />
        ))}
      </div>
    </div>
  )
}
export default MV
