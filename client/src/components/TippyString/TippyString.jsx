import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

const TippyString = ({ children, content, placement }, props) => {
  return (
    <Tippy {...props} placement={placement} content={<span className='text-xs'>{content}</span>}>
      {children}
    </Tippy>
  )
}
export default TippyString
