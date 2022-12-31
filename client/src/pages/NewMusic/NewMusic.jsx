const NewMusic = () => {
  const after = `after:border-r-3px after:border-r-solid after:border-r-pink-500 after:border-b-3px after:border-b-solid after:border-b-pink-500`
  return (
    <div>
      <label className='relative flex w-fit items-center justify-center'>
        <input
          type='checkbox'
          value=''
          className='after:border-r-solid after:border-b-solid cursor-pointer appearance-none rounded-[3px] border-[1px] border-solid border-[#ccc] p-[7px] after:absolute after:left-[5px] after:top-[2px] after:hidden after:h-[10px] after:w-[6px] after:rotate-45 after:border-r-[3px] after:border-b-[2px] after:border-r-white after:border-b-white after:bg-transparent after:content-[""] checked:bg-main-500 checked:after:block'
        />
      </label>
    </div>
  )
}
export default NewMusic
