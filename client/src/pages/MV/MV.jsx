import useColorHover from '~/hooks/useColorHover'

const MV = () => {
  const { hoverColor, hoverColor100, hoverColor200, hoverColor300 } = useColorHover()
  return <div className={`h-5 w-10 ${hoverColor300}`}>MV</div>
}
export default MV
