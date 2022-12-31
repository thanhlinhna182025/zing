import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailPlaylist } from '../../feature/album/albumSlice'
import { AlbumListSong, AlbumThumnail } from './components'

const Album = () => {
  const { id } = useParams()
  const [albumResource, setAlbumResource] = useState(null)
  const dispath = useDispatch()
  useEffect(() => {
    dispath(getDetailPlaylist(id))
      .unwrap()
      .then((result) => setAlbumResource(result))
      .catch((error) => console.log(error))
  }, [id])

  return (
    <div className='flex flex-col pt-10'>
      <div className='flex gap-x-[30px]'>
        <AlbumThumnail
          artists={albumResource?.artists}
          thumbnailM={albumResource?.thumbnailM}
          releaseDate={albumResource?.releaseDate}
          title={albumResource?.title}
          like={albumResource?.like}
        />
        <AlbumListSong song={albumResource?.song} description={albumResource?.description} />
      </div>
      <div>Lệ Quyên Xuất Hiện Trong</div>
      <div>Hoài Sa Xuất Hiện Trong</div>
      <div>V-Pop</div>
    </div>
  )
}
export default Album
