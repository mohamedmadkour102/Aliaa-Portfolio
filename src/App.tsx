import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ArtworkDetail } from './pages/ArtworkDetail'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
