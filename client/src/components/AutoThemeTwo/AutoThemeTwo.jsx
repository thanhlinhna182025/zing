import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'

const AutoThemeTwo = ({ autoThemeTwo }) => {
  console.log(autoThemeTwo.title)
  return (
    <div className='my-main-margin '>
      <div className='mb-5'>
        <Title>{autoThemeTwo.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-5'>
        {autoThemeTwo?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} name large />
        ))}
      </div>
    </div>
  )
}
export default AutoThemeTwo
