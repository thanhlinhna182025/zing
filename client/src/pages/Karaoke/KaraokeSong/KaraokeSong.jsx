import MusicBar from '~/assets/images/Z23N.gif'

const KaraokeSong = ({ songData, thumbnailM, audioTime, karaokeIsPlaying }) => {
  return (
    <div className='flex flex-col items-center gap-x-10 px-2 py-2 lg:flex-row lg:px-10'>
      <div className='relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-md lg:h-[240px] lg:w-[240px]'>
        <img src={thumbnailM} className='w-full object-cover' />
        {karaokeIsPlaying && (
          <img src={MusicBar} className='absolute  top-[50%] left-[50%] z-10 translate-y-[-50%] translate-x-[-50%]' />
        )}
      </div>
      <div className='flex-grow '>
        <ul className='max-h-[450px] overflow-y-auto scroll-auto scrollbar overflow-x-hidden'>
          {songData?.sentences?.flatMap((item, index) => (
            <li key={index}>
              {item.words.map((w, index) => (
                <span
                  key={index}
                  data={audioTime * 1000}
                  starttime={w.startTime}
                  endtime={w.endTime}
                  className={`mr-2 text-[20px] font-bold lg:mr-3 lg:text-[40px]  ${
                    w.startTime < audioTime * 1000 ? 'text-orange-600' : 'text-light-mode dark:text-dark-mode'
                  }`}
                >
                  {w.data}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default KaraokeSong
