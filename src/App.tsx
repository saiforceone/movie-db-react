import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import APIUtils from './Utils/APIUtils';
const MOVIES_ENDPOINT = import.meta.env.VITE_MOVIE_DB_API_POPULAR_MOVIES;

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const getMovies = async () => {
      const movies = await APIUtils.getData(MOVIES_ENDPOINT);
      console.log('movies result: ', movies);
    }

    getMovies().then()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl mb-4">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
