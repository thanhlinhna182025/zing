export function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  return hours + ':' + minutes + ':' + seconds + '.' + milliseconds
}

export function secondToMinuteAndSecond(duration) {
  let seconds = Math.floor(duration % 60)
  let minutes = Math.floor((duration / 60) % 60)
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  return minutes + ':' + seconds
}
export function secondToMinute(duration) {
  let minutes = Math.floor((duration / 60) % 60)
  return minutes
}
export function releaseDay(time) {
  const date = new Date().getTime()
  const duration = date - time * 1000
  let day = Math.floor(duration / (1000 * 60 * 60 * 24))
  day = day === 0 ? 'Hôm nay' : day === 1 ? 'Hôm qua' : day + ' ' + 'ngày trước'
  return day
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
export function numberToStringFollow(number = 1000) {
  const follow = number.toString().slice(0, number.toString().length - 3) + 'K'
  return follow
}
