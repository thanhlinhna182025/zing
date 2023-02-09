const KaraokeLyric = ({ songData, audioTime }) => {
  return (
    <div className='px-2 py-2 lg:px-10'>
      <ul className='flex max-h-[450px] flex-col items-center  overflow-y-auto scroll-auto scrollbar overflow-x-hidden'>
        {songData?.sentences?.flatMap((item, index) => (
          <li key={index}>
            {item.words.map((w, index) => (
              <span
                key={index}
                data={audioTime * 1000}
                starttime={w.startTime}
                endtime={w.endTime}
                className={`mr-2 text-[18px] font-bold text-light-mode dark:text-dark-mode  lg:mr-3 lg:text-[20px]`}
              >
                {w.data}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default KaraokeLyric
