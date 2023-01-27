import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import SeeAllButton from '~/components/SeeAllButton'
import SongCardItem from '~/components/SongCardItem'
import Title from '~/components/Title'
import configs from '~/configs'

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

  return (
    <div className='my-main-margin'>
      <div className='mb-5'>
        <Title>{newRelease.title}</Title>
      </div>
      <div className='mb-5 flex items-center justify-between'>
        <div>
          <Button
            type='primary'
            onClick={() => handleTypeData('all')}
            rounded
            className={`mr-[14px] ${typeData === 'all' && bgColor} py-1 px-6 text-xs font-normal leading-[1.42]`}
          >
            TẤT CẢ
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeData('vPop')}
            rounded
            className={`mr-[14px] ${typeData === 'vPop' && bgColor} py-[3px] px-6  text-xs font-normal leading-[1.42]`}
          >
            VIỆT NAM
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeData('others')}
            rounded
            className={`mr-[14px] ${typeData === 'others' && bgColor} py-[3px] px-6 text-xs font-normal leading-[1.42]`}
          >
            QUÔC TẾ
          </Button>
        </div>
        <div>
          <SeeAllButton to={configs.routes.newreleaseSong} />
        </div>
      </div>
      <div className='grid grid-cols-3 grid-rows-4 gap-x-5'>
        {data?.map((item) => (
          <SongCardItem key={item.encodeId} item={item} />
        ))}
      </div>
    </div>
  )
}
export default NewRelease
