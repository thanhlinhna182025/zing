import { useSelector } from 'react-redux'
import MusicCardItem from '~/components/MusicCardItem'
import Title from '~/components/Title'
import MusicCardItemSkeleton from '~/components/Skeleton/MusicCardItemSkeleton'
const AutoThemeOne = ({ autoThemeOne }) => {
  const loading = useSelector((state) => state.app.loading)
  return (
    <div className='lg:my-main-margin my-margin-main-sm '>
      <div className='mb-5'>
        <Title>{autoThemeOne.title}</Title>
      </div>
      <div className='lg:ml-[-14px] lg:mr-[-14px] mb-main-margin grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
        {loading
          ? [0, 1, 2, 3, 4].map((item) => <MusicCardItemSkeleton key={item} />)
          : autoThemeOne?.items
              ?.slice(0, 5)
              .map((item) => <MusicCardItem item={item} key={item.encodeId} sortDescription title large />)}
      </div>
    </div>
  )
}
export default AutoThemeOne
