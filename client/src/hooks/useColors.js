import { useSelector } from 'react-redux'

const useColors = () => {
  const color = useSelector((state) => state.app.color)
  const ColorText100 = `${
    color === 'A'
      ? `text-A-100`
      : color === 'B'
      ? 'text-B-100'
      : color === 'C'
      ? 'text-C-100'
      : color === 'D'
      ? 'text-D-100'
      : 'text-E-100'
  }`
  const ColorText200 = `${
    color === 'A'
      ? `text-A-200`
      : color === 'B'
      ? 'text-B-200'
      : color === 'C'
      ? 'text-C-200'
      : color === 'D'
      ? 'text-D-200'
      : 'text-E-200'
  }`
  const ColorText300 = `${
    color === 'A'
      ? `text-A-300`
      : color === 'B'
      ? 'text-B-300'
      : color === 'C'
      ? 'text-C-300'
      : color === 'D'
      ? 'text-D-300'
      : 'text-E-300'
  }`
  const ColorText400 = `${
    color === 'A'
      ? `text-A-400`
      : color === 'B'
      ? 'text-B-400'
      : color === 'C'
      ? 'text-C-400'
      : color === 'D'
      ? 'text-D-400'
      : 'text-E-400'
  }`
  const ColorText500 = `${
    color === 'A'
      ? `text-A-500`
      : color === 'B'
      ? 'text-B-500'
      : color === 'C'
      ? 'text-C-500'
      : color === 'D'
      ? 'text-D-500'
      : 'text-E-500'
  }`
  const ColorHoverText100 = `${
    color === 'A'
      ? `hover:text-A-100`
      : color === 'B'
      ? 'hover:text-B-100'
      : color === 'C'
      ? 'hover:text-C-100'
      : color === 'D'
      ? 'hover:text-D-100'
      : 'hover:text-E-100'
  }`
  const ColorHoverText200 = `${
    color === 'A'
      ? `hover:text-A-200`
      : color === 'B'
      ? 'hover:text-B-200'
      : color === 'C'
      ? 'hover:text-C-200'
      : color === 'D'
      ? 'hover:text-D-200'
      : 'hover:text-E-200'
  }`
  const ColorHoverText300 = `${
    color === 'A'
      ? `hover:text-A-300`
      : color === 'B'
      ? 'hover:text-B-300'
      : color === 'C'
      ? 'hover:text-C-300'
      : color === 'D'
      ? 'hover:text-D-300'
      : 'hover:text-E-300'
  }`
  const ColorHoverText400 = `${
    color === 'A'
      ? `hover:text-A-400`
      : color === 'B'
      ? 'hover:text-B-400'
      : color === 'C'
      ? 'hover:text-C-400'
      : color === 'D'
      ? 'hover:text-D-400'
      : 'hover:text-E-400'
  }`
  const ColorHoverText500 = `${
    color === 'A'
      ? `hover:text-A-500`
      : color === 'B'
      ? 'hover:text-B-500'
      : color === 'C'
      ? 'hover:text-C-500'
      : color === 'D'
      ? 'hover:text-D-500'
      : 'hover:text-E-500'
  }`
  const ColorHoverTextDark100 = `${
    color === 'A'
      ? `dark:hover:text-A-100`
      : color === 'B'
      ? 'dark:hover:text-B-100'
      : color === 'C'
      ? 'dark:hover:text-C-100'
      : color === 'D'
      ? 'dark:hover:text-D-100'
      : 'dark:hover:text-E-100'
  }`
  const ColorHoverTextDark200 = `${
    color === 'A'
      ? `dark:hover:text-A-200`
      : color === 'B'
      ? 'dark:hover:text-B-200'
      : color === 'C'
      ? 'dark:hover:text-C-200'
      : color === 'D'
      ? 'dark:hover:text-D-200'
      : 'dark:hover:text-E-200'
  }`
  const ColorHoverTextDark300 = `${
    color === 'A'
      ? `dark:hover:text-A-300`
      : color === 'B'
      ? 'dark:hover:text-B-300'
      : color === 'C'
      ? 'dark:hover:text-C-300'
      : color === 'D'
      ? 'dark:hover:text-D-300'
      : 'dark:hover:text-E-300'
  }`
  const ColorHoverTextDark400 = `${
    color === 'A'
      ? `dark:hover:text-A-400`
      : color === 'B'
      ? 'dark:hover:text-B-400'
      : color === 'C'
      ? 'dark:hover:text-C-400'
      : color === 'D'
      ? 'dark:hover:text-D-400'
      : 'dark:hover:text-E-400'
  }`
  const ColorHoverTextDark500 = `${
    color === 'A'
      ? `dark:hover:text-A-500`
      : color === 'B'
      ? 'dark:hover:text-B-500'
      : color === 'C'
      ? 'dark:hover:text-C-500'
      : color === 'D'
      ? 'dark:hover:text-D-500'
      : 'dark:hover:text-E-500'
  }`
  const ColorBg100 = `${
    color === 'A'
      ? `bg-A-100`
      : color === 'B'
      ? 'bg-B-100'
      : color === 'C'
      ? 'bg-C-100'
      : color === 'D'
      ? 'bg-D-100'
      : 'bg-E-100'
  }`
  const ColorBg200 = `${
    color === 'A'
      ? `bg-A-200`
      : color === 'B'
      ? 'bg-B-200'
      : color === 'C'
      ? 'bg-C-200'
      : color === 'D'
      ? 'bg-D-200'
      : 'bg-E-200'
  }`
  const ColorBg300 = `${
    color === 'A'
      ? `bg-A-300`
      : color === 'B'
      ? 'bg-B-300'
      : color === 'C'
      ? 'bg-C-300'
      : color === 'D'
      ? 'bg-D-300'
      : 'bg-E-300'
  }`
  const ColorBg400 = `${
    color === 'A'
      ? `bg-A-400`
      : color === 'B'
      ? 'bg-B-400'
      : color === 'C'
      ? 'bg-C-400'
      : color === 'D'
      ? 'bg-D-400'
      : 'bg-E-400'
  }`
  const ColorBg500 = `${
    color === 'A'
      ? `bg-A-500`
      : color === 'B'
      ? 'bg-B-500'
      : color === 'C'
      ? 'bg-C-500'
      : color === 'D'
      ? 'bg-D-500'
      : 'bg-E-500'
  }`
  const Color50Bg100 = `${
    color === 'A'
      ? `bg-A-100-50`
      : color === 'B'
      ? 'bg-B-100-50'
      : color === 'C'
      ? 'bg-C-100-50'
      : color === 'D'
      ? 'bg-D-100-50'
      : 'bg-E-100-50'
  }`
  const Color70Bg200 = `${
    color === 'A'
      ? `bg-A-200-70`
      : color === 'B'
      ? 'bg-B-200-70'
      : color === 'C'
      ? 'bg-C-200-70'
      : color === 'D'
      ? 'bg-D-200-70'
      : 'bg-E-200-70'
  }`
  const Color50Bg500 = `${
    color === 'A'
      ? `bg-A-500-50`
      : color === 'B'
      ? 'bg-B-500-50'
      : color === 'C'
      ? 'bg-C-500-50'
      : color === 'D'
      ? 'bg-D-500-50'
      : 'bg-E-500-50'
  }`
  const ColorHoverBg100 = `${
    color === 'A'
      ? `hover:bg-A-100`
      : color === 'B'
      ? 'hover:bg-B-100'
      : color === 'C'
      ? 'hover:bg-C-100'
      : color === 'D'
      ? 'hover:bg-D-100'
      : 'hover:bg-E-100'
  }`
  const ColorHoverBg200 = `${
    color === 'A'
      ? `hover:bg-A-200`
      : color === 'B'
      ? 'hover:bg-B-200'
      : color === 'C'
      ? 'hover:bg-C-200'
      : color === 'D'
      ? 'hover:bg-D-200'
      : 'hover:bg-E-200'
  }`
  const ColorHoverBg300 = `${
    color === 'A'
      ? `hover:bg-A-300`
      : color === 'B'
      ? 'hover:bg-B-300'
      : color === 'C'
      ? 'hover:bg-C-300'
      : color === 'D'
      ? 'hover:bg-D-300'
      : 'hover:bg-E-300'
  }`
  const ColorHoverBg400 = `${
    color === 'A'
      ? `hover:bg-A-400`
      : color === 'B'
      ? 'hover:bg-B-400'
      : color === 'C'
      ? 'hover:bg-C-400'
      : color === 'D'
      ? 'hover:bg-D-400'
      : 'hover:bg-E-400'
  }`
  const ColorHoverBg500 = `${
    color === 'A'
      ? `hover:bg-A-500`
      : color === 'B'
      ? 'hover:bg-B-500'
      : color === 'C'
      ? 'hover:bg-C-500'
      : color === 'D'
      ? 'hover:bg-D-500'
      : 'hover:bg-E-500'
  }`
  const ColorBorder100 = `${
    color === 'A'
      ? `border-A-100`
      : color === 'B'
      ? 'border-B-100'
      : color === 'C'
      ? 'border-C-100'
      : color === 'D'
      ? 'border-D-100'
      : 'border-E-100'
  }`
  const ColorBorder200 = `${
    color === 'A'
      ? `border-A-200`
      : color === 'B'
      ? 'border-B-200'
      : color === 'C'
      ? 'border-C-200'
      : color === 'D'
      ? 'border-D-200'
      : 'border-E-200'
  }`
  const ColorBorder300 = `${
    color === 'A'
      ? `border-A-300`
      : color === 'B'
      ? 'border-B-300'
      : color === 'C'
      ? 'border-C-300'
      : color === 'D'
      ? 'border-D-300'
      : 'border-E-300'
  }`
  const ColorBorder400 = `${
    color === 'A'
      ? `border-A-400`
      : color === 'B'
      ? 'border-B-400'
      : color === 'C'
      ? 'border-C-400'
      : color === 'D'
      ? 'border-D-400'
      : 'border-E-400'
  }`
  const ColorBorder500 = `${
    color === 'A'
      ? `border-A-500`
      : color === 'B'
      ? 'border-B-500'
      : color === 'C'
      ? 'border-C-500'
      : color === 'D'
      ? 'border-D-500'
      : 'border-E-500'
  }`
  const ColorGradient500ToBottom = `${
    color === 'A'
      ? `from-A-500-50 to-A-100-50`
      : color === 'B'
      ? 'from-B-500-50 to-B-100-50'
      : color === 'C'
      ? 'from-C-500-50 to-C-100-50'
      : color === 'D'
      ? 'from-D-500-50 to-D-100-50'
      : 'from-E-500-50 to-E-100-50'
  }`
  const ColorGradient500ToTop = `${
    color === 'A'
      ? `from-A-500-50 to-A-100-20`
      : color === 'B'
      ? 'from-B-500-50 to-B-100-20'
      : color === 'C'
      ? 'from-C-500-50 to-C-100-20'
      : color === 'D'
      ? 'from-D-500-50 to-D-100-20'
      : 'from-E-500-50 to-E-100-20'
  }`
  const ColorFrom200 = `${
    color === 'A'
      ? `from-A-200`
      : color === 'B'
      ? 'from-B-200'
      : color === 'C'
      ? 'from-C-200'
      : color === 'D'
      ? 'from-D-200'
      : 'from-E-200'
  }`
  const ColorFrom300 = `${
    color === 'A'
      ? `from-A-300`
      : color === 'B'
      ? 'from-B-300'
      : color === 'C'
      ? 'from-C-300'
      : color === 'D'
      ? 'from-D-300'
      : 'from-E-300'
  }`
  const ColorFrom400 = `${
    color === 'A'
      ? `from-A-400`
      : color === 'B'
      ? 'from-B-400'
      : color === 'C'
      ? 'from-C-400'
      : color === 'D'
      ? 'from-D-400'
      : 'from-E-400'
  }`
  const ColorTo300 = `${
    color === 'A'
      ? `to-A-300`
      : color === 'B'
      ? 'to-B-300'
      : color === 'C'
      ? 'to-C-300'
      : color === 'D'
      ? 'to-D-300'
      : 'to-E-300'
  }`
  const ColorTo400 = `${
    color === 'A'
      ? `to-A-400`
      : color === 'B'
      ? 'to-B-400'
      : color === 'C'
      ? 'to-C-400'
      : color === 'D'
      ? 'to-D-400'
      : 'to-E-400'
  }`

  return {
    ColorText100,
    ColorText200,
    ColorText300,
    ColorText400,
    ColorText500,
    ColorBg100,
    ColorBg200,
    ColorBg300,
    ColorBg400,
    ColorBg500,
    Color50Bg500,
    Color50Bg100,
    Color70Bg200,
    ColorHoverBg100,
    ColorHoverBg200,
    ColorHoverBg300,
    ColorHoverBg400,
    ColorHoverBg500,
    ColorBorder100,
    ColorBorder200,
    ColorBorder300,
    ColorBorder400,
    ColorBorder500,
    ColorHoverText100,
    ColorHoverText200,
    ColorHoverText300,
    ColorHoverText400,
    ColorHoverText500,
    ColorHoverTextDark100,
    ColorHoverTextDark200,
    ColorHoverTextDark300,
    ColorHoverTextDark400,
    ColorHoverTextDark500,
    ColorGradient500ToBottom,
    ColorGradient500ToTop,
    ColorFrom200,
    ColorFrom300,
    ColorFrom400,
    ColorTo300,
    ColorTo400
  }
}
export default useColors
