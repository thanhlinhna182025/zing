import MusicCardItem from '~/components/MusicCardItem'
import SeeAllButton from '~/components/SeeAllButton'
import Title from '~/components/Title'
const Top100 = ({ top100 }) => {
  return (
    top100 &&
    <div className='my-margin-main-sm lg:my-main-margin'>
      <div className='mb-5 flex items-center justify-between'>
        <Title>{top100.title}</Title>
        <SeeAllButton />
      </div>
      <div className='mb-main-margin-sm grid grid-cols-2  gap-3 sm:grid-cols-5 lg:ml-[-14px] lg:mr-[-14px] lg:mb-main-margin'>
        {top100?.items?.slice(0, 5).map((item) => (
          <MusicCardItem padding='p-0' item={item} key={item.encodeId} large />
        ))}
      </div>
    </div>
  )
}
export default Top100
