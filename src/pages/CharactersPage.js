import ListOfCharacters from '../components/ListOfCharacters'
import { useEffect, useRef, useState } from 'react'
import useObserver from '../hooks/useObserver'

export default function CharactersPage() {
  const ref = useRef(null)

  const [page, setPage] = useState(0)
  const isIntersecting = useObserver(ref)

  useEffect(() => {
    if (isIntersecting) {
      setPage(page + 1)
    }
  }, [isIntersecting])

  setTimeout(() => {
    if (ref.current) {
      ref.current.style.display = 'block'
    }
  }, 400)

  return (
    <div>
      <h1>All Characters:</h1>
      <div>
        <ListOfCharacters page={page} />
      </div>
      <div style={{ display: 'none' }} ref={ref}></div>
    </div>
  )
}
