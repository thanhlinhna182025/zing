import SingleSingerItem from '~/components/SingleSingerItem'
import Title from '~/components/Title'
const MayBeYouLike = ({ mayBeYouLike }) => {
  return (
    <div className='mb-main-margin'>
      <div className='mb-5'>
        <Title>{mayBeYouLike?.title}</Title>
      </div>
      <div className='grid  grid-cols-5'>
        {mayBeYouLike?.items?.slice(0, 5).map((item) => (
          <SingleSingerItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
export default MayBeYouLike
