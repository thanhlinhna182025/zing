import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'

const Appear = ({ appear }) => {
  return (
    <div className='my-main-margin '>
      <div className='mb-5'>
        <Title>{appear?.title}</Title>
      </div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {appear?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} name large title />
        ))}
      </div>
    </div>
  )
}
export default Appear
