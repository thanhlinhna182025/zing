import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import SeeAllButton from '~/components/SeeAllButton'
import Title from '~/components/Title'
import configs from '~/configs'
import useColors from '~/hooks/useColors'
import SongCartItemSkeleton from '../Skeleton/SongCartItemSkeleton/SongCartItemSkeleton'
import SongCardItem from './SongCardItem'

const NewRelease = ({ newRelease }) => {
  const loading = useSelector((state) => state.app.loading)
  const { ColorBg100, ColorBorder500 } = useColors()
  //  Local state
  const [data, setData] = useState(newRelease?.items?.all?.slice(0, 12))
  const [typeData, setTypeData] = useState('all')

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
      <div className='mb-5 flex w-full items-center justify-between'>
        <div className='flex justify-between md:justify-start'>
          <Button
            type='primary'
            onClick={() => handleTypeData('all')}
            rounded
            className={`${
              typeData === 'all'
                ? `${ColorBg100} shadow-[1px_1px_3px_rgba(0,0,0,0.5),-1px_-1px_3px_rgba(255,255,255,0.5)] `
                : 'shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.5)]'
            } ${ColorBorder500} mr-2 border-[1px] border-solid py-1 px-3 text-xs font-semibold leading-[1.42] md:mr-3 md:px-2 lg:px-3`}
          >
            TẤT CẢ
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeData('vPop')}
            rounded
            className={`${
              typeData === 'vPop'
                ? `${ColorBg100} shadow-[1px_1px_3px_rgba(0,0,0,0.5),-1px_-1px_3px_rgba(255,255,255,0.5)] `
                : 'shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.5)]'
            } ${ColorBorder500} mr-2 border-[1px]  border-solid py-1 px-3 text-xs font-semibold leading-[1.42] sm:px-6 md:mr-3 md:px-2`}
          >
            VIỆT NAM
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeData('others')}
            rounded
            className={`${
              typeData === 'others'
                ? `${ColorBg100} shadow-[1px_1px_3px_rgba(0,0,0,0.5),-1px_-1px_3px_rgba(255,255,255,0.5)] `
                : 'shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.5)]'
            } ${ColorBorder500} border-[1px] border-solid py-1 px-3 text-xs font-semibold leading-[1.42] sm:px-6 md:px-2 lg:px-3`}
          >
            QUÔC TẾ
          </Button>
        </div>
        <div className='hidden md:block'>
          <SeeAllButton to={configs.routes.newreleaseSong} />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-2 gap-y-1 sm:grid-cols-2 lg:grid-cols-3'>
        {loading
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => <SongCartItemSkeleton key={item} />)
          : data?.map((item) => <SongCardItem key={item.encodeId} item={item} />)}
      </div>
      <div className='mt-4 md:hidden'>
        <SeeAllButton to={configs.routes.newreleaseSong} />
      </div>
    </div>
  )
}
export default NewRelease
