import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (sectionIds.length === 0) return

    const updateActive = () => {
      const offset = window.scrollY + window.innerHeight * 0.35

      let current: string | null = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= offset) {
          current = id
        }
      }

      setActiveId(current ?? sectionIds[0])
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)

    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [sectionIds])

  return activeId
}
