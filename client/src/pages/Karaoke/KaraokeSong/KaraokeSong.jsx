import MusicBar from '~/assets/images/Z23N.gif'

const KaraokeSong = ({ songData, thumbnailM, audioTime, karaokeIsPlaying }) => {
  return (
    <div className='flex flex-col gap-x-10 px-3 py-3 lg:flex-row lg:px-10'>
      <div className='relative flex shrink-0 items-center justify-center overflow-hidden rounded-md lg:h-[240px] lg:w-[240px]'>
        <img
          alt='thumbnailM'
          clear
          src={thumbnailM}
          className='h-[100px] w-[100px] object-cover lg:h-[150px]  lg:w-[150px]'
        />
        {karaokeIsPlaying && (
          <img
            alt='MusicBar'
            src={MusicBar}
            className='absolute  top-[50%] left-[50%] z-10 translate-y-[-50%] translate-x-[-50%]'
          />
        )}
      </div>
      <div className='py-3'>
        <ul className='flex max-h-[380px] flex-col items-center overflow-y-auto scroll-auto scrollbar overflow-x-hidden md:max-h-[350px] lg:max-h-[420px]'>
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
