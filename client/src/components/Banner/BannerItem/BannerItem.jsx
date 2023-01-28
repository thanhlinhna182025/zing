import useRedirect from '~/hooks/useRedirect'
const BannerItem = ({ item }) => {
  const handleRedirect = useRedirect()
  return (
    <div className='rounded-lg'>
      <img src={item.banner} className='rounded-lg' onClick={() => handleRedirect(item)} />
    </div>
  )
}
export default BannerItem
