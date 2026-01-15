import { useEffect, useRef, useState } from 'react'
import type { PropsWithChildren } from 'react'

type LazySectionProps = PropsWithChildren<{
  className?: string
  rootMargin?: string
}>

export default function LazySection({
  children,
  className,
  rootMargin = '300px',
}: LazySectionProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} className={className}>
      {visible ? children : null}
    </div>
  )
}
