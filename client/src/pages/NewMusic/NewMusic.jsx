import {
  CategoryScale,
  Chart as ChartJS,
  Colors,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import newReleaseBg from '~/assets/images/new-release-bg.jpg'
import Load from '~/components/Load'
import ZingMusicItem from '~/components/ZingMusicItem'
import { getChartHome } from '~/feature/app/appSlice'
import useColors from '~/hooks/useColors'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Colors, Title, Tooltip, Legend)

const NewMusic = () => {
  const dispatch = useDispatch()
  const [musicsData, setMusicsData] = useState([])
  const [loading, setLoading] = useState(false)
  const { ColorFrom200, ColorFrom300 } = useColors()

  useEffect(() => {
    setLoading(true)
    dispatch(getChartHome())
      .unwrap()
      .then((result) => {
        setMusicsData(result?.RTChart?.items)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {loading ? (
        <Load />
      ) : (
        <div>
          <div className='relative -mt-[var(--header-height)] ml-[-8px] mr-[-8px] h-[280px] bg-transparent lg:mr-[-67px] lg:ml-[-67px]'>
            <div
              style={{
                backgroundImage: `url(${newReleaseBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%)'
              }}
              className='absolute top-0 left-0 right-0 bottom-0 z-0 sepia'
            ></div>
            <div className={`absolute top-0 left-0 right-0 bottom-0 z-[1] bg-gradient-to-b ${ColorFrom200} `}></div>
            <div className={`absolute top-0 left-0 right-0 bottom-0 z-[1] bg-gradient-to-t ${ColorFrom300} `}></div>
            <div className={`absolute top-0 left-0 right-0 bottom-0 z-[1] bg-gradient-to-t `}></div>
            <div></div>
          </div>

          {musicsData.map((item, index) => (
            <ZingMusicItem number={index + 1} item={item} key={item.encodeId} />
          ))}
        </div>
      )}
    </div>
  )
}
export default NewMusic
