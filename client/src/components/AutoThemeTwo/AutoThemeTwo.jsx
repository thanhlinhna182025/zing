import { useSelector } from 'react-redux'
import MusicCardItem from '~/components/MusicCardItem'
import MusicCardItemSkeleton from '~/components/Skeleton/MusicCardItemSkeleton'
import Title from '~/components/Title'

const AutoThemeTwo = ({ autoThemeTwo }) => {
  const loading = useSelector((state) => state.app.loading)
  return (
    <div className='my-margin-main-sm lg:my-main-margin'>
      <div className='mb-5'>
        <Title>{autoThemeTwo.title}</Title>
      </div>
      <div className='mb-main-margin-sm gap-3 lg:main-main-margin grid grid-cols-2 sm:grid-cols-3 lg:ml-[-14px] lg:mr-[-14px] lg:grid-cols-5'>
        {loading
          ? [0, 1, 2, 3, 4].map((item) => <MusicCardItemSkeleton key={item} />)
          : autoThemeTwo?.items
              ?.slice(0, 5)
              .map((item) => <MusicCardItem item={item} key={item.encodeId} name large />)}
        {}
      </div>
    </div>
  )
}
export default AutoThemeTwo
