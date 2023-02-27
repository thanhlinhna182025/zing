const WeekChartItem = ({ item }) => {
  return (
    <div className='rounded-xs shadow-[5px_5px_10px_rgba(0,0,0,0.5),-5px_-5px_10px_rgba(255,255,255,0.5)] group overflow-hidden rounded-md'>
      <img
        src={item.cover}
        className='w-full rounded-md object-cover transition-all duration-500 ease-linear hover:scale-110'
      />
    </div>
  )
}
export default WeekChartItem
