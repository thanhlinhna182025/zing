import WeekChartItem from '~/components/WeekChartItem'

const WeekChart = ({ weekChart }) => {
  return (
    <div className='grid grid-cols-3 gap-x-3 mb-main-margin'>
      {weekChart?.items?.map((item) => (
        <WeekChartItem item={item} key={item.country} />
      ))}
    </div>
  )
}
export default WeekChart
