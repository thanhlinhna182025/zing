import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'
import SeeAllButton from '../SeeAllButton/SeeAllButton'
const Top100 = ({ top100 }) => {
  return (
    <div className='my-main-margin'>
      <div className='mb-5 flex items-center justify-between'>
        <Title>{top100.title}</Title>
        <SeeAllButton />
      </div>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-5'>
        {top100?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} large />
        ))}
      </div>
    </div>
  )
}
export default Top100
