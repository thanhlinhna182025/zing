const ReleaseDate = ({children}) => {
  return (
    <span className='overflow-hidden text-ellipsis text-left text-sm font-semibold text-gray line-clamp-2'>
     {children}
    </span>
  )
}
export default ReleaseDate