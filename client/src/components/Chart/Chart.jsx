import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from 'chart.js'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import { PlayFillIcon } from '~/components/Icons'
import configs from '~/configs'
import { getChartHome } from '~/feature/app/appSlice'
import useColor from '~/hooks/useColor'
import ZingChartItem from './ZingChartItem'

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip)

const Chart = () => {
  const { bgColor, bg200Color, bg300Color, hoverColor300 } = useColor()

  const [top123, setTop123] = useState([])
  const [top123Data, setTop123Data] = useState([])
  const [labelNames, setLabelNames] = useState([])
  const [totalScore, setTotalScore] = useState(0)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChartHome())
      .unwrap()
      .then((result) => {
        setLabelNames(result?.RTChart?.chart.times)
        setTop123Data(Object.values(result?.RTChart?.chart.items))
        setTop123(
          result?.RTChart.items.filter((item) => Object.keys(result?.RTChart?.chart?.items).includes(item.encodeId))
        )
        setTotalScore(result?.RTChart?.chart?.totalScore)
      })
      .catch((err) => console.log(err))
  }, [])

  const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div')
    if (!tooltipEl) {
      tooltipEl = document.createElement('div')
      tooltipEl.style.background = 'rgba(248,113,113,0.9)'
      tooltipEl.style.borderRadius = '3px'
      tooltipEl.style.color = 'white'
      tooltipEl.style.opacity = 1
      tooltipEl.style.pointerEvents = 'none'
      tooltipEl.style.position = 'absolute'
      tooltipEl.style.transform = 'translate(-50%, 0)'
      tooltipEl.style.transition = 'all .1s ease'

      const table = document.createElement('table')
      table.style.margin = '0px'

      tooltipEl.appendChild(table)
      chart.canvas.parentNode.appendChild(tooltipEl)
    }

    return tooltipEl
  }
  const externalTooltipHandler = (context) => {
    // Tooltip Element
    const { chart, tooltip } = context
    const tooltipEl = getOrCreateTooltip(chart)
    // Hide if no tooltip

    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0
      return
    }
    // Set Text
    if (tooltip.body) {
      const titleLines = tooltip.title || []
      const bodyLines = tooltip.body.map((b) => b.lines)
      const tableHead = document.createElement('thead')
      titleLines.forEach((title) => {
        const tr = document.createElement('tr')
        tr.style.borderWidth = 0
        const th = document.createElement('th')
        th.style.borderWidth = 0
        const text = document.createTextNode(title)
        th.appendChild(text)
        tr.appendChild(th)
        tableHead.appendChild(tr)
      })
      const tableBody = document.createElement('tbody')
      bodyLines.forEach((body, i) => {
        const colors = tooltip.labelColors[i]
        const span = document.createElement('span')
        span.style.background = colors.backgroundColor
        span.style.borderColor = colors.borderColor
        span.style.borderWidth = '2px'
        span.style.marginRight = '10px'
        span.style.height = '10px'
        span.style.width = '10px'
        span.style.display = 'inline-block'

        const img = document.createElement('img')
        const filtered = top123.filter((item) => body.includes(item.title))
        if (filtered) {
          img.src = filtered[0].thumbnail
        }

        img.style.width = '40px'
        img.style.height = '40px'
        img.style.display = 'inline-block'
        img.style.borderRadius = '3px'
        img.style.marginRight = '3px'

        const tr = document.createElement('tr')
        tr.style.backgroundColor = 'inherit'
        tr.style.borderWidth = 0
        const td = document.createElement('td')
        td.style.borderWidth = 0
        const text = document.createTextNode(body)
        td.appendChild(img)
        td.appendChild(text)
        tr.appendChild(td)
        tableBody.appendChild(tr)
      })
      const tableRoot = tooltipEl.querySelector('table')
      // Remove old children
      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove()
      }
      // Add new children
      tableRoot.appendChild(tableHead)
      tableRoot.appendChild(tableBody)
    }
    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas
    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1
    tooltipEl.style.left = positionX + tooltip.caretX + 'px'
    tooltipEl.style.top = positionY + tooltip.caretY + 'px'
    tooltipEl.style.font = tooltip.options.bodyFont.string
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px'
  }
  const data = {
    labels: labelNames?.map((item) => item.hour + ':' + '00'),
    datasets: [
      {
        label: top123[0]?.title,
        data: top123Data[0]?.map((item) => item.counter),
        fill: false,
        borderColor: 'red',
        backgroundColor: 'red',
        hoverBackgroundColor: 'rgba(232,105,90,0.8)',
        hoverBorderColor: 'orange',
        hoverBorderWidth: 6
      },
      {
        label: top123[1]?.title,
        data: top123Data[1]?.map((item) => item.counter),
        fill: false,
        borderColor: 'blue',
        backgroundColor: 'blue',
        hoverBackgroundColor: 'rgba(232,105,90,0.8)',
        hoverBorderColor: 'orange',
        hoverBorderWidth: 6
      },
      {
        label: top123[2]?.title,
        data: top123Data[2]?.map((item) => item.counter),
        fill: false,
        borderColor: 'green',
        backgroundColor: 'green',
        hoverBackgroundColor: 'rgba(232,105,90,0.8)',
        hoverBorderColor: 'orange',
        hoverBorderWidth: 6
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Xếp Hạng ZingMusic',
        font: {
          size: 30
        },
        color: 'white'
      },
      interaction: {
        intersect: false,
        mode: 'index'
      },
      scales: {
        y: {
          // not 'yAxes: [{' anymore (not an array anymore)
          ticks: {
            color: '#ffffff', // not 'fontColor:' anymore
            // fontSize: 18,
            font: {
              size: 30 // 'size' now within object 'font {}'
            },
            stepSize: 1,
            beginAtZero: true
          }
        },
        x: {
          // not 'xAxes: [{' anymore (not an array anymore)
          ticks: {
            color: '#ffffff', // not 'fontColor:' anymore
            //fontSize: 14,
            font: {
              size: 30 // 'size' now within object 'font {}'
            },
            stepSize: 1,
            beginAtZero: true
          }
        }
      },

      tooltip: {
        enabled: false,
        position: 'nearest',
        external: externalTooltipHandler,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || ''
            return label
          },
          title: function (context) {
            let percent = ''
            if (context) {
              context.forEach((item) => (percent = Math.round((item.parsed.y * 100) / totalScore)))
              return percent + '%'
            }
            return percent
          }
        }
      }
    }
  }

  return (
    <div className={`mb-margin-main-sm w-full gap-x-5 lg:mb-main-margin ${bgColor} rounded-lg px-4 py-2`}>
      <div className='mb-2 flex items-center'>
        <h5 className='mr-2 text-[28px] font-bold text-light-mode dark:text-dark-mode'>#ZingChart</h5>
        <Button text='text' rounded className={`flex h-[32px] w-[32px] items-center justify-center ${bg200Color}`}>
          <PlayFillIcon className='text-white' width='14px' height='14px' />
        </Button>
      </div>
      <div className='flex w-full flex-col-reverse gap-x-5 lg:flex-row'>
        <div className='flex w-full flex-col gap-y-3 lg:w-1/2'>
          {top123?.map((item, index) => (
            <ZingChartItem number={index + 1} item={item} key={item.encodeId} totalScore={totalScore} />
          ))}
          <Link
            to={configs.routes.zingchart}
            className={`${bg300Color} inline-block w-32 rounded-full py-1 text-center text-light-mode ${hoverColor300} dark:text-dark-mode`}
          >
            Xem Thêm
          </Link>
        </div>
        <div
          className='mb-5 w-full flex-grow lg:w-1/2'
          style={{
            background:
              'url(https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.8.26/static/media/bg-chart.fd766403.jpg) top/cover no-repeat'
          }}
        >
          <Line id='myChart' options={options} data={data} />
        </div>
      </div>
    </div>
  )
}
export default Chart
