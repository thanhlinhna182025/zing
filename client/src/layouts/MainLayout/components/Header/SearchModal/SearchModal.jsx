import { useSelector } from 'react-redux'

import SuggestItem from './SuggestItem'
const suggests = [
  {
    id: 1,
    title: 'Sơn Tùng'
  },
  {
    id: 2,
    title: 'Karaoke'
  },
  {
    id: 3,
    title: 'Đan Trường'
  }
]
const SearchModal = () => {
  const color = useSelector((state) => state.app.color)
  const bgColor = `${color === 'B' ? `bg-B` : color === 'C' ? 'bg-C' : color === 'D' ? 'bg-D' : ' bg-A'}`
  return (
    <div className={`min-h-[400px] w-search-input-width ${bgColor} rounded-md px-2 py-4`}>
      <span className='text-sm font-bold text-white'>Đề xuất cho bạn</span>
      <ul className='mt-3 border-b-[1px] border-solid border-white py-1'>
        {suggests.map((item) => (
          <SuggestItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
export default SearchModal
