import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'

const SingleSP = ({ singleSP }) => {
  return (
    <div className='my-main-margin '>
      <div className='mb-5'>
        <Title>{singleSP?.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {singleSP?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} large title releaseDateText />
        ))}
      </div>
    </div>
  )
}
export default SingleSP
