import useRedirect from '~/hooks/useRedirect'

const BannerItem = ({ item }) => {
  const handleRedirect = useRedirect()

  return (
    <div className='cursor-pointer rounded-lg hover:shadow'>
      <img alt={item.title} src={item.banner} className='rounded-lg' onClick={() => handleRedirect(item)} />
    </div>
  )
}
export default BannerItem
