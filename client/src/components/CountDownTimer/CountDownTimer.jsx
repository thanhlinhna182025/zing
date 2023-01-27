import useCountdown from '~/hooks/useCountdown'

const CountDownTimer = ({ duration }) => {
  const [minutes, seconds] = useCountdown()

  return (
    <div>
      <span className='text-xs font-bold text-light-mode dark:text-dark-mode'>05:</span>
      <span className='text-xs font-bold text-light-mode dark:text-dark-mode'>02</span>
    </div>
  )
}
export default CountDownTimer
