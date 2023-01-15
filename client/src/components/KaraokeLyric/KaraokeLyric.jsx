const KaraokeLyric = ({ songData, thumbnailM }) => {
  console.log(songData)
  return (
    <div className='flex gap-x-10 px-10 py-2'>
      <div className='w-[240px] overflow-hidden rounded-md'>
        <img src={thumbnailM} className='w-full object-cover' />
      </div>
      <div>Lyric</div>
    </div>
  )
}
export default KaraokeLyric
