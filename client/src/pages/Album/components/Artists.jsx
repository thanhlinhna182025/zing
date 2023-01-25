import SingleSingerItem from '~/components/SingleSingerItem'
import Title from '~/components/Title'
const Artists = ({ artists }) => {
  return (
    <div className='mt-main-margin w-full '>
      <Title>Nghệ Sĩ Tham Gia</Title>
      <div className='mt-5 flex items-center justify-between'>
        {artists?.map((item) => (
          <SingleSingerItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
export default Artists
