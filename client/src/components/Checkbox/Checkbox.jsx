const Checkbox = ({ className }) => {
  let baseClass = ''
  if (className) {
    baseClass = [className, 'group relative hidden cursor-pointer select-none text-[22px]']
  }
  return (
    <label className={baseClass}>
      <input type='checkbox' className='peer absolute h-0 w-0 cursor-pointer opacity-0' />
      <span className='group-hover:bg-main-400 absolute top-0 left-0 h-[14px] w-[14px] rounded-[3px] border-[1px] border-solid border-[#ccc] bg-transparent after:absolute after:top-[1px] after:left-[3px] after:hidden after:h-[10px] after:w-[5px] after:rotate-45 after:border-t-0 after:border-r-[3px] after:border-b-[2px] after:border-l-0 after:border-solid after:border-white after:content-[""] peer-checked:bg-black peer-checked:after:block'></span>
    </label>
  )
}
export default Checkbox
