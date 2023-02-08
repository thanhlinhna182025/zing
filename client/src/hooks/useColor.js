import { useSelector } from 'react-redux'

const useColor = () => {
  const color = useSelector((state) => state.app.color)
  const Color0 = `${color === 'B' ? `from-B-0` : color === 'C' ? 'from-C-0' : color === 'D' ? 'from-D-0' : 'from-A-0'}`
  const Color100 = `${
    color === 'B' ? `from-B-100` : color === 'C' ? 'from-C-100' : color === 'D' ? 'from-D-100' : 'from-A-100'
  }`
  const Color200 = `${
    color === 'B' ? `from-B-200` : color === 'C' ? 'from-C-200' : color === 'D' ? 'from-D-200' : 'from-A-200'
  }`
  const Color300 = `${
    color === 'B' ? `from-B-300` : color === 'C' ? 'from-C-300' : color === 'D' ? 'from-D-300' : 'from-A-300'
  }`
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
  const bg300Color50 = `${
    color === 'B' ? `bg-B-300-50` : color === 'C' ? 'bg-C-300-50' : color === 'D' ? 'bg-D-300-50' : 'bg-A-300-50'
  }`
  const bg200Color50 = `${
    color === 'B' ? `bg-B-200-50` : color === 'C' ? 'bg-C-200-50' : color === 'D' ? 'bg-D-200-50' : 'bg-A-200-50'
  }`
  const bgColor50 = `${
    color === 'B' ? `bg-B-0-50` : color === 'C' ? 'bg-C-0-50' : color === 'D' ? 'bg-D-0-50' : 'bg-A-0-50'
  }`
  const hoverColor = `${
    color === 'B' ? `hover:bg-B-0` : color === 'C' ? 'hover:bg-C-0' : color === 'D' ? 'hover:bg-D-0' : 'hover:bg-A-0'
  }`
  const hoverColor100 = `${
    color === 'B'
      ? `hover:bg-B-100`
      : color === 'C'
      ? 'hover:bg-C-100'
      : color === 'D'
      ? 'hover:bg-D-100'
      : 'hover:bg-A-100'
  }`
  const hoverColor200 = `${
    color === 'B'
      ? `hover:bg-B-200`
      : color === 'C'
      ? 'hover:bg-C-200'
      : color === 'D'
      ? 'hover:bg-D-200'
      : 'hover:bg-A-200'
  }`
  const hoverColor300 = `${
    color === 'B'
      ? `hover:bg-B-300`
      : color === 'C'
      ? 'hover:bg-C-300'
      : color === 'D'
      ? 'hover:bg-D-300'
      : 'hover:bg-A-300'
  }`
  const hoverText100 = `${
    color === 'B'
      ? `hover:text-B-100`
      : color === 'C'
      ? 'hover:text-C-100'
      : color === 'D'
      ? 'hover:text-D-100'
      : 'hover:text-A-100'
  }`
  const hoverText200 = `${
    color === 'B'
      ? `hover:text-B-200`
      : color === 'C'
      ? 'hover:text-C-200'
      : color === 'D'
      ? 'hover:text-D-200'
      : 'hover:text-A-200'
  }`
  const hoverText300 = `${
    color === 'B'
      ? `hover:text-B-300`
      : color === 'C'
      ? 'hover:text-C-300'
      : color === 'D'
      ? 'hover:text-D-300'
      : 'hover:text-A-300'
  }`
  const borderColor = `${
    color === 'B' ? `border-B-0` : color === 'C' ? 'border-C-0' : color === 'D' ? 'border-D-0' : 'border-A-0'
  }`
  return {
    bgColor,
    bg100Color,
    bg200Color,
    bg300Color,
    Color0,
    Color100,
    Color200,
    Color300,
    hoverColor,
    hoverColor100,
    hoverColor200,
    hoverColor300,
    bg300Color50,
    bg200Color50,
    bgColor50,
    hoverText100,
    hoverText200,
    hoverText300,
    borderColor
  }
}
export default useColor
