import { useSelector } from 'react-redux'

const useColorHover = () => {
  const color = useSelector((state) => state.app.color)
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
  return { hoverColor, hoverColor100, hoverColor200, hoverColor300 }
}
export default useColorHover
