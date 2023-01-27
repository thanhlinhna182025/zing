import { useSelector } from 'react-redux'

const useColor = () => {
  const color = useSelector((state) => state.app.color)
  const bgColor = `${color === 'B' ? `bg-B-0` : color === 'C' ? 'bg-C-0' : color === 'D' ? 'bg-D-0' : 'bg-A-0'}`
  const bg100Color = `${
    color === 'B' ? `bg-B-100` : color === 'C' ? 'bg-C-100' : color === 'D' ? 'bg-D-100' : 'bg-A-100'
  }`
  const bg200Color = `${
    color === 'B' ? `bg-B-200` : color === 'C' ? 'bg-C-200' : color === 'D' ? 'bg-D-200' : 'bg-A-200'
  }`
  const bg300Color = `${
    color === 'B' ? `bg-B-300` : color === 'C' ? 'bg-C-300' : color === 'D' ? 'bg-D-300' : 'bg-A-300'
  }`
  return [bgColor, bg100Color, bg200Color, bg300Color]
}
export default useColor
