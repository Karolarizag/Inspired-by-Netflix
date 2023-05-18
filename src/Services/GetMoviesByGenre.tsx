import { useEffect, useState } from 'react'

export const GetMoviesByGenre = (id: number) => {
  const [loading, setLoading] = useState(false)
  const [genreMovies, setGenreMovies] = useState([])
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const request = await fetch(API_URL)
      const response = await request.json()
      setLoading(false)
      setGenreMovies(response.results)
    }
    fetchData()
  }, [API_URL])

  return { genreMovies, loading }
}
