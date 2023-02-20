import useColors from '~/hooks/useColors'

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

const SearchModal = ({ relatedKeywords, handleClearKeyword, handleSuggestKeyword, formWidth }) => {
  const { ColorBg100 } = useColors()

  return (
    <div
      style={{ width: `${formWidth}px` }}
      className={`${ColorBg100} relative z-20 w-full rounded-md px-1 py-2 shadow md:px-2 md:py-4 md:shadow-md`}
    >
      <p className='text-sm font-bold text-light-mode dark:text-dark-mode'>Đề xuất cho bạn</p>
      <div className='max-h-[calc(100vh-var(--header-height)-var(--player-height)-70px)] scrollbar'>
        <ul className='mt-1 border-b-[1px] border-solid border-white py-1 md:mt-2 lg:mt-3'>
          {suggests.map((item) => (
            <SuggestItem item={item} key={item.id} handleSuggestKeyword={handleSuggestKeyword} />
          ))}
        </ul>
        <p className='mt-3 text-sm font-bold text-light-mode dark:text-dark-mode'>Gợi ý kết quả</p>
        <ul className='mt-3 py-1'>
          {relatedKeywords &&
            relatedKeywords.map((item) => (
              <ResultItem key={item?.encodeId} handleClearKeyword={handleClearKeyword} item={item} />
            ))}
        </ul>
      </div>
    </div>
  )
}
export default SearchModal
