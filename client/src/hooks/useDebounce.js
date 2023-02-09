import { useState, useEffect } from 'react'

function useDebounce(value, delay) {
  const [rebounce, setRebounce] = useState(value)
  useEffect(() => {
    const timeId = setTimeout(() => {
      setRebounce(value)
    }, delay)
    return () => {
      clearTimeout(timeId)
    }
  }, [value])

  return rebounce
}

export default useDebounce
