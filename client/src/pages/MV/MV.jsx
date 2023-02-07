import useColor from '~/hooks/useColor'

const MV = () => {
  const { hoverColor300 } = useColor()
  return <div className={`h-5 w-10 ${hoverColor300}`}>MV</div>
}
export default MV
