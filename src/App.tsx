import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Store } from './pages/Store'
import { Summary } from './pages/Summary'
import { Report } from './pages/Report'
import { ShopContextProvider } from './ShopContext'
import Container from '@mui/material/Container'
import { NotFound } from './pages/NotFound'
import { Footer } from './components/Footer'

function App() {
  return (
    <ShopContextProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/reports" element={<Report />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </ShopContextProvider>
  )
}

export default App
