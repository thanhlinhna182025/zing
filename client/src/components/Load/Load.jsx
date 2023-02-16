const Load = () => {
  return (
    <div className='fixed top-[50%] left-[50%] translate-x-[50%] translate-y-[-50%]'>
      <div className='relative flex h-[74px] w-[74px] animate-spin-5 items-center justify-center rounded-full border-[4px] border-dashed border-[#00ffe7]'>
        <div className='aminate-spin absolute z-[3] flex h-[68px] w-[68px] animate-spin-4 items-center justify-center rounded-[50%] before:absolute before:z-[3] before:h-[96%] before:w-[96%] before:rounded-[50%] before:border-[4px] before:border-dashed before:border-[#00ffe7] before:content-[""]'>
          <div className='absolute z-[4] h-[115%] w-[115%] rounded-[50%] bg-[#00ffe7] opacity-[0.5] blur-[30px]'></div>
          <div className='absolute z-[4] h-[82%] w-[82%] animate-spin-4 rounded-[50%] border-[4px] border-solid border-[#00ffe7] border-l-transparent opacity-[0.2]'></div>
          <div className='absolute z-[4] h-[55%] w-[55%] animate-spin-3 rounded-[50%] border-[4px] border-solid border-[#00ffe7] border-t-transparent border-b-transparent opacity-[0.6]'></div>
        </div>
        <div className='absolute z-[5] flex h-[46%] w-[46%] items-center justify-center rounded-[50%] bg-[#00ffe7] before:absolute before:z-[5] before:h-[90%] before:w-[90%] before:rounded-full before:bg-[#fff] before:content-[""] '>
          <div className='absolute z-[5] z-[5] h-[160%] w-[160%] animate-spin-5 rounded-full border-[4px] border-solid border-[#00ffe7] border-t-transparent border-b-transparent'></div>
        </div>
      </div>
    </div>
  )
}
export default Load
