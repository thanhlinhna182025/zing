import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'

const Xone = ({ xone }) => {
  return (
    <div className='my-margin-main-sm lg:my-main-margin'>
      <div className='mb-5'>
        <Title>{xone?.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] mb-margin-main-sm grid grid-cols-5 lg:mb-main-margin'>
        {xone?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} large />
        ))}
      </div>
    </div>
  )
}
export default Xone
