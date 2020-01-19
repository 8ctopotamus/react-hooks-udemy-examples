import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function App() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const searchInputRef = useRef()

  useEffect(() => {
    getResults()
  }, [])

  const getResults = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`//hn.algolia.com/api/v1/search?query=${query}`)
      setResults(response.data.hits)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  const handleSearch = event => {
    event.preventDefault()
    getResults()
  }

  const handleClearSearch = () => {
    setQuery('')
    setResults([])
    searchInputRef.current.focus()
  }

  return (
    <div className="container max-w-md mx-auto p-4 m-2 bg-purple-lightest rounded shadow-lg">
      <img src="//icon.now.sh/react/c0c" alt="React Logo" className="float-right h-12" />
      <h1 className="text-grey-darkest font-thin">Hooks News</h1>
      <form onSubmit={handleSearch} className="mb-2">
        <input 
          ref={searchInputRef}
          onChange={event => setQuery(event.target.value)}
          value={query}
          type="text"
          className="border p-1 rounded"
        />
        <button
          className="bg-orange rounded m-1 p-1"
          type="submit"          
        >Search</button>
        <button
          className="bg-teal text-white rounded m-1 p-1"
          type="button"
          onClick={handleClearSearch}
        >Clear</button>
      </form>

      { loading ? (
        <p className="font-bold text-orange-dark">Loading...</p>
      ) : (
        <ul className="list-reset leading-normal">
        {results.map(result => (
          <li key={result.objectID}>
            <a href={result.url} className="text-indigo-dark hover:text-indigo-darkest">{result.title}</a>
          </li>
        ))}
      </ul>
      ) }

      {error && <div className="text-red font-bold">{error.message}</div>}

    </div>
  )
}

export default App
