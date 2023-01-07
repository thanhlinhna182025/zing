import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'

const AutoThemeOne = ({ autoThemeOne }) => {
  return (
    <div className='my-main-margin '>
      <div className='mb-5'>
        <Title>{autoThemeOne.title}</Title>
      </div>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-5'>
        {autoThemeOne?.items?.slice(0, 5).map((item) => (
          <MusicCardItem item={item} key={item.encodeId} sortDescription title large/>
        ))}
      </div>
    </div>
  )
}
export default AutoThemeOne
