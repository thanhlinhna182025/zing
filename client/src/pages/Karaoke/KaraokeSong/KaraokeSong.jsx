import MusicBar from '~/assets/images/Z23N.gif'

const KaraokeSong = ({ songData, thumbnailM, audioTime, karaokeIsPlaying }) => {
  return (
    <div className='flex gap-x-10 px-10 py-2'>
      <div className='relative h-[240px] w-[240px] shrink-0 overflow-hidden rounded-md'>
        <img src={thumbnailM} className='w-full object-cover' />
        {karaokeIsPlaying && (
          <img src={MusicBar} className='absolute  top-[50%] left-[50%] z-10 translate-y-[-50%] translate-x-[-50%]' />
        )}
      </div>
      <div>
        <ul className='max-h-[450px] overflow-y-auto scroll-auto scrollbar overflow-x-hidden'>
          {songData?.sentences?.flatMap((item, index) => (
            <li key={index}>
              {item.words.map((w, index) => (
                <span
                  key={index}
                  data={audioTime * 1000}
                  starttime={w.startTime}
                  endtime={w.endTime}
                  className={`mr-3 text-[40px] font-bold  ${
                    w.startTime < audioTime * 1000 ? 'text-orange-600' : 'text-white'
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
