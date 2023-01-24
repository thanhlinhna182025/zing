import Button from '~/components/Button'

const EventItem = ({ item }) => {
  return (
    <div>
      <div className='relative  mb-3'>
        <div className='overflow-hidden rounded-md'>
          <img src={item.coverHM} className='block w-full object-cover' />
        </div>
        <div className='absolute left-0 bottom-0 p-[10px]'>
          <span className='rounded-sm bg-white py-[2px] px-1 text-[9px] uppercase text-red-600'>{item.label}</span>
          <p className='mb-1 text-base font-bold text-white'>{item.shortTitle}</p>
          <p className='text-sm font-normal capitalize text-white'>{item.startText}</p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <span className='mb-[6px] text-sm text-white'>Lượt quan tâm</span>
          <div className='flex items-center '>
            <div className='ml-1 flex items-center'>
              {item?.followers.map((follow) => (
                <div
                  className='w-5 rounded-full border-[1px] border-solid  border-secondary-100 first:ml-0 odd:ml-[-4px] even:ml-[-4px] '
                  key={follow.id}
                >
                  <img src={follow.avatar} className='block w-full rounded-full object-cover ' />
                </div>
              ))}
            </div>
            <span className='text-sm font-bold text-white'>+{item.totalFollow}</span>
          </div>
        </div>
        <div>
          <Button type='secondary' rounded className='px-5 py-[9px]'>
            {item.startUrlText ? item.startUrlText : 'CHÚC MỪNG'}
          </Button>
        </div>
      </div>
    </div>
  )
}
export default EventItem
