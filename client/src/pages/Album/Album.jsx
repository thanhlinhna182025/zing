import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MusicNodeIcon, SortIcon } from '../../components/Icons/Icons'
import { getDetailPlaylist } from '../../feature/album/albumSlice'
import { AlbumThumnail } from './components'

const Album = () => {
  const { id } = useParams()
  const [albumResource, setAlbumResource] = useState(null)
  const dispath = useDispatch()
  console.log(id)
  useEffect(() => {
    dispath(getDetailPlaylist(id))
      .unwrap()
      .then((result) => setAlbumResource(result))
      .catch((error) => console.log(error))
  }, [id])
  console.log(albumResource)
  return (
    <div className='flex flex-col pt-10'>
      <div className='flex gap-x-[30px]'>
        <AlbumThumnail
          albumResource={albumResource}
          artists={albumResource?.artists}
          thumbnailM={albumResource?.thumbnailM}
          releaseDate={albumResource?.releaseDate}
          title={albumResource?.title}
          like={albumResource?.like}
        />
        <div className='w-full'>
          <div className='mb-[10px] leading-[21px]'>
            <span className='text-sm font-normal  leading-[1.5] text-gray'>Lời tựa </span>
            <span className='text-sm font-normal leading-[1.5] text-white'>{albumResource?.description}</span>
          </div>
          <div className='flex h-[46px] items-center border-b-[1px] border-solid border-[#231B2E] p-[10px]'>
            <div className='flex w-full items-center'>
              <div className='flex w-1/2 items-center'>
                <div className='mr-3 rounded-[4px] border-[1px] border-solid border-[#7E7A85] p-[1px]'>
                  <SortIcon className='text-gray' width='10px' height='10px' />
                </div>
                <span className='text-xs font-semibold text-gray'>BÀI HÁT</span>
              </div>
              <span className='ml-[10px] flex-1 text-xs font-semibold text-gray'>ALBUM</span>
              <span className='text-xs font-semibold text-gray'>THỜI GIAN</span>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className='flex h-[60px] items-center rounded-[4px] border-b-[1px] border-solid border-[#231B2E] bg-main-300 p-[10px]'>
              <div className='flex w-1/2 items-center gap-[10px]'>
                <MusicNodeIcon className='text-white' width='14px' height='14px' />
                <div className='h-10 w-10 overflow-hidden rounded-[4px]'>
                  <img
                    src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/images/d/a/9/0/da904d203b03cc3bdb37eef4e66ddf76.jpg'
                    className='block w-full object-cover'
                  />
                </div>
                <div className='flex flex-col justify-start'>
                  <span className='mb-[2px] translate-y-[-2px] text-left text-sm font-medium leading-[17px] text-white'>
                    Mấy Khi
                  </span>
                  <a className='text-xs text-gray hover:text-[#9D4BE0] hover:underline hover:decoration-[#9D4BE0] hover:decoration-solid'>
                    Wren Evans
                  </a>
                </div>
              </div>
              <a className='ml-[10px] flex-1 text-xs font-semibold capitalize leading-[17px] text-gray hover:text-[#9D4BE0] hover:underline hover:decoration-[#9D4BE0] hover:decoration-solid'>
                Chiều Hôm Ấy Anh Thấy Màu Đỏ
              </a>
              <span className='px-[6px] text-right text-xs font-semibold capitalize text-gray'>02:29</span>
            </div>
          </div>
        </div>
      </div>
      <div>Lệ Quyên Xuất Hiện Trong</div>
      <div>Hoài Sa Xuất Hiện Trong</div>
      <div>V-Pop</div>
    </div>
  )
}
export default Album
