const useCountdown = (duration) => {
  let seconds = Math.floor(duration % 60)
  let minutes = Math.floor((duration / 60) % 60)
  return [minutes, seconds]
}

export default useCountdown
