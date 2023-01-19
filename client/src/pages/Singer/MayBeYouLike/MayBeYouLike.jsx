import Title from '~/components/Title'
import MayBeYouLikeItem from '../../../components/MayBeYouLikeItem/MayBeYouLikeItem'
const MayBeYouLike = ({ mayBeYouLike }) => {
  return (
    <div className='mb-main-margin'>
      <div className='mb-5'>
        <Title>{mayBeYouLike?.title}</Title>
      </div>
      <div className='grid  grid-cols-5'>
        {mayBeYouLike?.items?.slice(0, 5).map((item) => (
          <MayBeYouLikeItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
export default MayBeYouLike
