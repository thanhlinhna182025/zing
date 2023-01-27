const ReleaseDate = ({ children }) => {
  return (
    <span className='overflow-hidden text-ellipsis text-left text-sm font-semibold text-light-mode line-clamp-2 dark:text-dark-mode'>
      {children}
    </span>
  )
}
export default ReleaseDate
