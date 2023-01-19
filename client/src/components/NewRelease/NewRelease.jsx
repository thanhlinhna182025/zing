import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '~/components/Button'
import SeeAllButton from '~/components/SeeAllButton'
import SongCardItem from '~/components/SongCardItem'
import Title from '~/components/Title'
import configs from '~/configs'
import { setTypeRelease } from '~/feature/app/appSlice'
const NewRelease = ({ newRelease }) => {
  const typeRelease = useSelector((state) => state.app.typeRelease)
  console.log(newRelease)
  const dispatch = useDispatch()
  const handleTypeNewRelease = (type) => {
    dispatch(setTypeRelease(type))
  }
  const [data, setData] = useState([])
  useEffect(() => {
    if (typeRelease === 'vPop') {
      setData(newRelease?.items?.vPop?.slice(0, 12))
    } else if (typeRelease === 'others') {
      setData(newRelease?.items?.others?.slice(0, 12))
    }
  }, [typeRelease])

  return (
    <div className='my-main-margin'>
      <div className='mb-5'>
        <Title>{newRelease.title}</Title>
      </div>
      <div className='mb-5 flex items-center justify-between'>
        <div>
          <Button
            type='primary'
            onClick={() => handleTypeNewRelease('all')}
            rounded
            className={`mr-[14px] ${
              typeRelease === 'all' && 'bg-secondary-100'
            } py-1 px-6 text-xs font-normal leading-[1.42]`}
          >
            TẤT CẢ
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeNewRelease('others')}
            rounded
            className={`mr-[14px] ${
              typeRelease === 'others' && 'bg-secondary-100'
            }  py-[3px] px-6 text-xs font-normal leading-[1.42]`}
          >
            VIỆT NAM
          </Button>
          <Button
            type='primary'
            onClick={() => handleTypeNewRelease('vPop')}
            rounded
            className={`mr-[14px] ${
              typeRelease === 'vPop' && 'bg-secondary-100'
            } py-[3px] px-6 text-xs font-normal leading-[1.42]`}
          >
            QUÔC TẾ
          </Button>
        </div>
        <div>
          <SeeAllButton to={configs.routes.newrelease} />
        </div>
      </div>
      <div className='grid grid-cols-3 grid-rows-4 gap-x-5'>
        {typeRelease === 'all'
          ? newRelease?.items?.all?.slice(0, 12).map((item) => <SongCardItem key={item.encodeId} item={item} />)
          : data?.map((item) => <SongCardItem key={item.encodeId} item={item} />)}
      </div>
    </div>
  )
}
export default NewRelease
