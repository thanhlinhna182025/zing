const KaraokeLyric = ({ songData, audioTime }) => {
  return (
    <div className='px-2 lg:px-10 py-2'>
      <ul className='flex max-h-[450px] flex-col items-center  overflow-y-auto scroll-auto scrollbar overflow-x-hidden'>
        {songData?.sentences?.flatMap((item, index) => (
          <li key={index}>
            {item.words.map((w, index) => (
              <span
                key={index}
                data={audioTime * 1000}
                starttime={w.startTime}
                endtime={w.endTime}
                className={`lg:mr-3 mr-2 lg:text-[20px] text-[18px] font-bold  text-light-mode dark:text-dark-mode`}
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
