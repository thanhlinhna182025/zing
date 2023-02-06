const LiveStreamItem = ({ item }) => {
  return (
    <div>
      <img src={item.thumbnail} alt='thumbnail' className='rounded-full ' />
    </div>
  )
}
export default LiveStreamItem
