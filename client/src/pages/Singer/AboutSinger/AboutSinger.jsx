import Button from '~/components/Button'
import { numberWithCommas } from '../../../utils/hepper'

const AboutSinger = ({ aboutSinger }) => {
  function createMarkup() {
    return { __html: aboutSinger.biography }
  }

  return (
    <div className='flex '>
      <div className='mr-5 w-[300px] overflow-hidden rounded-lg'>
        <img alt='thumbnailM' src={aboutSinger?.thumbnailM} className='w-full object-cover' />
      </div>
      <div className='flex flex-col'>
        <div className='relative h-[150px]'>
          <p
            className=' block h-[120px] w-[400px] text-sm  font-bold text-light-mode line-clamp-6 dark:text-dark-mode '
            dangerouslySetInnerHTML={createMarkup()}
          ></p>
          <Button type='text' className='absolute bottom-0 right-0'>
            Xem thêm
          </Button>
        </div>
        <div>
          <span className='mr-1 text-xl font-bold text-light-mode dark:text-dark-mode'>
            {numberWithCommas(aboutSinger?.follow || 1000)}
          </span>
          <span className='text-[13px] font-bold text-light-mode dark:text-dark-mode'>Người quan tâm</span>
        </div>
      </div>
    </div>
  )
}
export default AboutSinger
