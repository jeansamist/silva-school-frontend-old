import React, { useState, useEffect } from "react"
/**
 * 
 * @param {React.RefObject} ref 
 */
export default function useDimensions(ref) {
  const getDimensions = () => ({
    width: ref.current.offsetWidth,
    height: ref.current.offsetHeight,
  })
  const [dimensions, setdimensions] = useState({width: 0, height: 0})
  useEffect(() => {
    const handleResize = () => setdimensions(getDimensions())

    if (ref.current) {
      setdimensions(getDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref])
  return dimensions
}