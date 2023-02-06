import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import SeeAllButton from '~/components/SeeAllButton'
import SongCardItem from '~/components/SongCardItem'
import Title from '~/components/Title'
import configs from '~/configs'
import SongCartItemSkeleton from '../Skeleton/SongCartItemSkeleton/SongCartItemSkeleton'
const NewRelease = ({ newRelease }) => {
  const [data, setData] = useState(newRelease?.items?.all?.slice(0, 12))
  const [typeData, setTypeData] = useState('all')
  const color = useSelector((state) => state.app.color)
  const bgColor = `${color === 'B' ? `bg-BB` : color === 'C' ? 'bg-CC' : color === 'D' ? 'bg-DD' : 'bg-AA'}`

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
  const loading = useSelector((state) => state.app.loading)

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
            className={`mr-[14px] ${
              typeData === 'all' && bgColor
            } py-1 px-3 text-xs font-normal leading-[1.42] sm:px-6`}
          >
            TẤT CẢ
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeData('vPop')}
            rounded
            className={`mr-[14px] ${
              typeData === 'vPop' && bgColor
            } py-1 px-3 text-xs  font-normal leading-[1.42] sm:px-6`}
          >
            VIỆT NAM
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeData('others')}
            rounded
            className={`mr-[14px] ${
              typeData === 'others' && bgColor
            } py-1 px-3 text-xs font-normal leading-[1.42] sm:px-6`}
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
