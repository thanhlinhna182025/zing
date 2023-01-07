import { Link } from 'react-router-dom'

const Button = ({
  type = 'primary' || 'secondary' || 'outline' || 'text',
  rounded,
  isBlock,
  to,
  href,
  children,
  className,
  hasBorder
}) => {
  const backgoundColor = {
    primary: 'bg-tranparent font-[Inter] hover:opacity-[0.9]',
    secondary: 'bg-secondary-100 font-[Inter] hover:opacity-[0.9]',
    outline: 'bg-tranparent font-[Inter] hover:opacity-[0.9]',
    text: 'bg-tranparent font-[Inter] hover:opacity-[0.9]'
  }
  const color = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-white',
    text: 'text-white'
  }
  const border = {
    primary: 'border-[1px] border-solid border-main-300',
    secondary: '',
    outline: 'border-none',
    text: ''
  }
  let baseClass = [backgoundColor[type], color[type], border[type]]
  if (className) {
    baseClass = [...baseClass, ...className.split(' ')]
  }
  if (isBlock) {
    baseClass = [...baseClass, 'block w-full']
  }
  if (rounded) {
    baseClass = [...baseClass, 'rounded-full']
  }
  if (hasBorder) {
    baseClass = [...baseClass, 'border-[1px] border-white border-solid']
  }
  if (to) {
    let linkClasses = [...baseClass, 'flex items-center text-[14px] whitespace-nowrap']
    return (
      <Link to={to} className={linkClasses.join(' ')}>
        {children}
      </Link>
    )
  }
  if (href) {
    let linkClasses = [...baseClass, 'flex items-center justify-start whitespace-nowrap']

    return (
      <a href={href} className={linkClasses.join(' ')}>
        {children}
      </a>
    )
  }

  return <button className={baseClass.join(' ')}>{children}</button>
}
export default Button
