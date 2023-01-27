import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Button = (
  {
    type = 'primary' || 'secondary' || 'outline' || 'text',
    rounded,
    isBlock,
    to,
    href,
    children,
    className,
    hasBorder,
    onClick,
    disabled
  },
  ref
) => {
  const backgoundColor = {
    primary: 'font-[Inter] hover:opacity-[0.9]',
    secondary: 'font-[Inter] hover:opacity-[0.9]',
    outline: 'font-[Inter] hover:opacity-[0.9]',
    text: 'font-[Inter] hover:opacity-[0.9]'
  }
  const color = {
    primary: 'text-light-mode dark:text-dark-mode',
    secondary: 'text-light-mode dark:text-dark-mode',
    outline: 'text-light-mode dark:text-dark-mode',
    text: 'text-light-mode dark:text-dark-mode'
  }
  const border = {
    primary: 'border-[1px] border-solid border-main-400',
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
  if (disabled) {
    baseClass = [...baseClass, 'cursor-not-allowed opacity-50']
  }
  if (to) {
    let linkClasses = [...baseClass, 'flex items-center text-[14px] whitespace-nowrap']
    return (
      <Link to={to} ref={ref} className={linkClasses.join(' ')}>
        {children}
      </Link>
    )
  }
  if (href) {
    let linkClasses = [...baseClass, 'flex items-center justify-start whitespace-nowrap']
    return (
      <a href={href} ref={ref} className={linkClasses.join(' ')}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} ref={ref} className={baseClass.join(' ')}>
      {children}
    </button>
  )
}
export default forwardRef(Button)
