import useColors from '~/hooks/useColors'
const Title = ({ children }) => {
  const { ColorText500 } = useColors()
  return <h4 className={`${ColorText500} text-[20px] font-bold capitalize`}>{children}</h4>
}
export default Title
