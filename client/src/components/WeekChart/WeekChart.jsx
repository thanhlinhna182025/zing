import WeekChartItem from './WeekChartItem'

const WeekChart = ({ weekChart }) => {
  return (
    <div className='mb-margin-main-sm grid grid-cols-1 gap-y-2 gap-x-3 sm:grid-cols-3 lg:mb-main-margin'>
      {weekChart?.items?.map((item) => (
        <WeekChartItem item={item} key={item.country} />
      ))}
    </div>
  )
}
export default WeekChart
