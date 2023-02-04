const LiveStreamItem = ({ item }) => {
  console.log(item)
  return (
    <div>
      <img src={item.thumbnail} alt='thumbnail' className='rounded-full ' />
      {/* <div className='border-[2px] border-solid border-[#000000]'>
      </div> */}
    </div>
  )
}
export default LiveStreamItem
