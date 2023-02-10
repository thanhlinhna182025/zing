import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import SeeAllButton from '~/components/SeeAllButton'
import SongCardItem from '~/components/SongCardItem'
import Title from '~/components/Title'
import configs from '~/configs'
import useColors from '~/hooks/useColors'
import SongCartItemSkeleton from '../Skeleton/SongCartItemSkeleton/SongCartItemSkeleton'
const NewRelease = ({ newRelease }) => {
  const loading = useSelector((state) => state.app.loading)

  const [data, setData] = useState(newRelease?.items?.all?.slice(0, 12))
  const [typeData, setTypeData] = useState('all')
  const { ColorBg100, ColorBorder500 } = useColors()
  useEffect(() => {
    if (typeData === 'vPop') {
      setData(newRelease?.items?.vPop?.slice(0, 12))
    } else if (typeData === 'others') {
      setData(newRelease?.items?.others?.slice(0, 12))
    } else {
      setData(newRelease?.items?.all?.slice(0, 12))
    }
  }, [typeData, newRelease])
  const handleTypeData = (type) => {
    setTypeData(type)
  }

  return (
    <div className='my-margin-main-sm lg:my-main-margin'>
      <div className='mb-5'>
        <Title>{newRelease.title}</Title>
      </div>
      <div className='mb-5 flex items-center justify-between'>
        <div>
          <Button
            type='primary'
            onClick={() => handleTypeData('all')}
            rounded
            className={`${
              typeData === 'all' ? ColorBg100 : ''
            } ${ColorBorder500} mr-[14px] border-[1px] border-solid py-1 px-3 text-xs font-semibold leading-[1.42] sm:px-6`}
          >
            TẤT CẢ
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeData('vPop')}
            rounded
            className={`mr-[14px] ${
              typeData === 'vPop' && ColorBg100
            } ${ColorBorder500} border-[1px] border-solid py-1 px-3 text-xs  font-semibold leading-[1.42] sm:px-6`}
          >
            VIỆT NAM
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeData('others')}
            rounded
            className={`mr-[14px] ${
              typeData === 'others' && ColorBg100
            } ${ColorBorder500} border-[1px] border-solid py-1 px-3 text-xs font-semibold leading-[1.42] sm:px-6`}
          >
            QUÔC TẾ
          </Button>
        </div>
        <div>
          <SeeAllButton to={configs.routes.newreleaseSong} />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2 lg:grid-cols-3'>
        {loading
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => <SongCartItemSkeleton key={item} />)
          : data?.map((item) => <SongCardItem key={item.encodeId} item={item} />)}
      </div>
    </div>
  )
}
export default NewRelease
