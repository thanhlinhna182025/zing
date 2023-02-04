import WeekChartItem from './WeekChartItem'

const WeekChart = ({ weekChart }) => {
  return (
    <div className='mb-main-margin grid grid-cols-1 gap-y-2 sm:grid-cols-3 gap-x-3'>
      {weekChart?.items?.map((item) => (
        <WeekChartItem item={item} key={item.country} />
      ))}
    </div>
  )
}
export default WeekChart
