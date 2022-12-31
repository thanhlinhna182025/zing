import Button from '~/components/Button'
import { RightArrowIcon } from '~/components/Icons'
import SongCard from '~/components/SongCard'
import Title from '~/components/Title'

const NewRelease = ({ newRelease }) => {
  return (
    <div>
      <Title>{newRelease.title}</Title>
      <div className='mb-5 flex items-center justify-between'>
        <div>
          <Button type='secondary' rounded className='mr-[14px] py-1 px-6 text-xs font-normal leading-[1.42]'>
            TẤT CẢ
          </Button>
          <Button type='primary' rounded className='mr-[14px] py-[3px] px-6 text-xs font-normal leading-[1.42]'>
            VIỆT NAM
          </Button>
          <Button type='primary' rounded className='mr-[14px] py-[3px] px-6 text-xs font-normal leading-[1.42]'>
            TẤT CẢ
          </Button>
        </div>
        <div>
          <Button
            type='text'
            className='mr-[14px] flex items-center py-[3px] px-6 text-xs font-bold text-gray hover:text-secondary-100'
          >
            TẤT CẢ
            <RightArrowIcon className='ml-1 text-gray' width='14px' height='14px' />
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-3 grid-rows-4 gap-x-5'>
        {newRelease?.items?.all.slice(0, 12).map((item) => (
          <SongCard key={item.encodeId} item={item} />
        ))}
      </div>
    </div>
  )
}
export default NewRelease
