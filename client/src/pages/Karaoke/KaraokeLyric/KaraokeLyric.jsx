const KaraokeLyric = ({ songData, audioTime }) => {
  return (
    <div className='px-10 py-2'>
      <ul className='flex max-h-[450px] flex-col items-center  overflow-y-auto scroll-auto scrollbar overflow-x-hidden'>
        {songData?.sentences?.flatMap((item, index) => (
          <li key={index}>
            {item.words.map((w, index) => (
              <span
                key={index}
                data={audioTime * 1000}
                starttime={w.startTime}
                endtime={w.endTime}
                className={`mr-3 text-[20px] font-bold  text-light-mode dark:text-dark-mode`}
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
