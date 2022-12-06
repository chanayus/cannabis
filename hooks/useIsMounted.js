import { useEffect, useState } from "react"

const useIsMounted = () => {
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)

    return () => {
      setIsMount(false)
    }
  }, [])

  return isMount
}

export default useIsMounted
