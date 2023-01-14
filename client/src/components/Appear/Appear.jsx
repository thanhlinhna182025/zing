import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'

const Appear = ({ appear }) => {
  return (
    <div className='my-main-margin '>
      <div className='mb-5'>
        <Title>{appear?.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-5'>
        {appear?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} name large title />
        ))}
      </div>
    </div>
  )
}
export default Appear
