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
    primary: 'bg-tranparent',
    secondary: 'bg-[#9D4DE0]',
    outline: 'bg-tranparent',
    text: 'bg-tranparent'
  }
  const color = {
    primary: 'text-red-900',
    secondary: 'text-white',
    outline: 'text-white',
    text: 'text-white'
  }
  const radius = {
    primary: '',
    secondary: 'rounded-full',
    outline: '',
    text: ''
  }
  const border = {
    primary: '',
    secondary: '',
    outline: '',
    text: ''
  }
  let baseClass = [backgoundColor[type], color[type], radius[type], border[type]]
  if (className) {
    baseClass = [...baseClass, ...className.split(' ')]
  }
  if (isBlock) {
    baseClass = [...baseClass, 'block w-full']
  }
  if (rounded) {
    baseClass = [...baseClass, 'rounded-[50%]']
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
