import Button from '~/components/Button'
import SeeAllButton from '~/components/SeeAllButton'
import SongCardItem from '~/components/SongCardItem'
import Title from '~/components/Title'

const NewRelease = ({ newRelease }) => {
  return (
    <div className='my-main-margin'>
      <div className='mb-5'>
        <Title>{newRelease.title}</Title>
      </div>
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
          <SeeAllButton />
        </div>
      </div>
      <div className='grid grid-cols-3 grid-rows-4 gap-x-5'>
        {newRelease?.items?.all.slice(0, 12).map((item) => (
          <SongCardItem key={item.encodeId} item={item} />
        ))}
      </div>
    </div>
  )
}
export default NewRelease
