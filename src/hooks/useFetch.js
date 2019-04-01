import { useState, useEffect } from 'react'
import accessToken from '../config'

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null)
  const { method = 'GET', body } = options

  const fetchData = async () => {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: body ? JSON.stringify(body) : null,
    })
    const json = await response.json()
    setData(json)
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return data
}

export default useFetch
