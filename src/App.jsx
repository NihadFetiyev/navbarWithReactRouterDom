import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Gallery from './pages/gallery'
import MainLayout from './layouts/mainLayout'
import Languages from './pages/languages'
import Shortcodes from './pages/shortcodes'
import Login from './pages/login'
import ErrorPage from './pages/notFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/shortcodes" element={<Shortcodes />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
