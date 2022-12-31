import MusicCard from '~/components/MusicCard'
import Title from '~/components/Title'

const AutoThemeOne = ({ autoTheme }) => {
  return (
    <div className='my-main-margin '>
      <Title>{autoTheme.title}</Title>
      <div className='ml-[-14px] mr-[-14px] mb-main-margin grid grid-cols-5'>
        {autoTheme?.items?.slice(0, 5).map((item) => (
          <MusicCard item={item} key={item.encodeId} large />
        ))}
      </div>
    </div>
  )
}
export default AutoThemeOne
