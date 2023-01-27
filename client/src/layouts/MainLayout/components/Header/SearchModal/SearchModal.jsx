import useColor from '~/hooks/useColor'

import ResultItem from './ResultItem'
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

const SearchModal = ({ relatedKeywords, handleClearKeyword }) => {
  const [bgColor, bg100Color, bg200Color, bg300Color] = useColor()
  return (
    <div className={`w-search-input-width  ${bgColor} rounded-md px-2 py-4`}>
      <p className='text-sm font-bold text-light-mode dark:text-dark-mode'>Đề xuất cho bạn</p>
      <div className='max-h-[calc(100vh-var(--header-height)-var(--player-height)-70px)] scrollbar'>
        <ul className='mt-3 border-b-[1px] border-solid border-white py-1'>
          {suggests.map((item) => (
            <SuggestItem item={item} key={item.id} />
          ))}
        </ul>
        <p className='mt-3 text-sm font-bold text-light-mode dark:text-dark-mode'>Gợi ý kết quả</p>
        <ul className='mt-3 py-1'>
          {relatedKeywords &&
            relatedKeywords.map((item) => (
              <ResultItem key={item.id || item.encodeId} handleClearKeyword={handleClearKeyword} item={item} />
            ))}
        </ul>
      </div>
    </div>
  )
}
export default SearchModal
