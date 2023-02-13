const WeekChartItem = ({ item }) => {
  return (
    <div className='rounded-xs group overflow-hidden rounded-md shadow md:shadow-md'>
      <img
        src={item.cover}
        className='w-full rounded-md object-cover transition-all duration-500 ease-linear hover:scale-110'
      />
    </div>
  )
}
export default WeekChartItem
