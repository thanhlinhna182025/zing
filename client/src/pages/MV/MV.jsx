import useColors from '~/hooks/useColors'

const MV = () => {
  const { ColorHoverBg300 } = useColors()
  return <div className={`h-5 w-10 ${ColorHoverBg300}`}>MV</div>
}
export default MV
