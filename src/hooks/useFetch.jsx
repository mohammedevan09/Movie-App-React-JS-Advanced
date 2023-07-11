import { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utlis/Api'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading('loading...')
    setData(null)
    setError(null)

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false)
        setData(res)
      })
      .catch((err) => {
        setLoading(false)
        setError('Something went wrong! ' + err)
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch
