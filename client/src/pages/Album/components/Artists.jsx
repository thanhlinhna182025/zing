import SingleSingerItem from '~/components/SingleSingerItem'
import Title from '~/components/Title'
const Artists = ({ artists }) => {
  return (
    <div className='mt-main-margin w-full '>
      <Title>Nghệ Sĩ Tham Gia</Title>
      <div className='mt-5 grid grid-cols-2 gap-y-5 lg:grid-cols-3 xl:grid-cols-4'>
        {artists?.map((item) => (
          <SingleSingerItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
export default Artists
