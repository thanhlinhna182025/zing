import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MVCardItem from '~/components/MVCardItem'
import { getListMV, setCategoryId } from '~/feature/app/appSlice'
const dataId = {
  vn: 'IWZ9Z08I',
  'US-UK': 'IWZ9Z08O',
  kpop: 'IWZ9Z08W',
  orchestralMusic: 'IWZ9Z086'
}
const ListMV = () => {
  const dispatch = useDispatch()
  const categoryId = useSelector(state=>state.app.categoryId)
  const [videos, setVideos] = useState({})
  useEffect(() => {
    dispatch(getListMV(categoryId))
      .unwrap()
      .then((result) => {
        if (result) {
          setVideos(result)
        }
      })
      .catch((err) => console.log(err))
  }, [categoryId])
  const handleCatgory = (id) => {
    dispatch(setCategoryId(id))
  }
  return (
    <div className=''>
      <div className='relative mb-5  flex items-center gap-x-2 py-3 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-[#ccc] before:content-[""]'>
        <h5 className='border-r-[1px] border-solid border-[#ccc] px-5 text-[24px] font-bold'>MV</h5>
        <button
          onClick={() => handleCatgory(dataId.vn)}
          className={`relative px-2 py-1 text-[16px] font-semibold ${
            categoryId === dataId.vn
              ? 'after:absolute after:bottom-[-15px] after:left-0 after:h-[2px] after:w-full after:bg-[#9D4BE0] after:content-[""]'
              : ''
          }`}
        >
          VIỆT NAM
        </button>
        <button
          onClick={() => handleCatgory(dataId['US-UK'])}
          className={`relative px-2 py-1 text-[16px] font-semibold ${
            categoryId === dataId['US-UK']
              ? 'after:absolute after:bottom-[-15px] after:left-0 after:h-[2px] after:w-full after:bg-[#9D4BE0] after:content-[""]'
              : ''
          }`}
        >
          US-UK
        </button>
        <button
          onClick={() => handleCatgory(dataId.kpop)}
          className={`relative px-2 py-1 text-[16px] font-semibold ${
            categoryId === dataId.kpop
              ? 'after:absolute after:bottom-[-15px] after:left-0 after:h-[2px] after:w-full after:bg-[#9D4BE0] after:content-[""]'
              : ''
          }`}
        >
          KPOP
        </button>
        <button
          onClick={() => handleCatgory(dataId.orchestralMusic)}
          className={`relative px-2 py-1 text-[16px] font-semibold ${
            categoryId === dataId.orchestralMusic
              ? 'after:absolute after:bottom-[-15px] after:left-0 after:h-[2px] after:w-full after:bg-[#9D4BE0] after:content-[""]'
              : ''
          }`}
        >
          HÒA TẤU
        </button>
      </div>
      <div className='grid grid-cols-2 gap-5 md:grid-cols-3'>
        {videos?.items?.map((item) => (
          <MVCardItem item={item} key={item.encodeId} />
        ))}
      </div>
    </div>
  )
}
export default ListMV
