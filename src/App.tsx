import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import {MainPage} from './pages/Movies/MainPage/MainPage';
import {LikedMoviesPage} from './pages/Movies/LikedMoviesPage/LikedMoviesPage';
import {NavBar} from './components/Nav/NavBar/NavBar';

function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route element={<MainPage />} path={"/"} />
        <Route element={<LikedMoviesPage />} path={"/liked"} />
      </Routes>
    </HashRouter>

  )
}

export default App
