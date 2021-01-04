import { useState, useLayoutEffect } from 'react'

function useDocTitle(title: string) {
  const [state, setState] = useState<string | null>(null)
  useLayoutEffect(() => {
    document.title = title
    setState(title)
  }, [title])
  return state
}

export default useDocTitle