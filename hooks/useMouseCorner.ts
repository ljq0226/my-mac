import { useEffect, useState } from 'react'

type MouseCornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>

  return function (...args: Parameters<T>) {
    const context = this

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

const useMouseCorner = (callback: (position: MouseCornerPosition) => void): void => {
  const [position, setPosition] = useState<MouseCornerPosition | null>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      const x = event.clientX
      const y = event.clientY
      if (x < 20 && y < 20)
        setPosition('top-left')

      else if (x > screenWidth * 9.5 / 10 && y < 20)
        setPosition('top-right')

      else if (x < 20 && y > screenHeight * 9.5 / 10)
        setPosition('bottom-left')

      else if (x > screenWidth * 9.5 / 10 && y > screenHeight * 9.5 / 10)
        setPosition('bottom-right')

      else setPosition(null)
    }

    const handleMouseCorner = () => {
      if (position !== null)
        callback(position)
    }

    document.addEventListener('mousemove', debounce(handleMouseMove, 1000))
    document.addEventListener('mousemove', debounce(handleMouseCorner, 1000))

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousemove', handleMouseCorner)
    }
  }, [callback, position])
}

export default useMouseCorner
