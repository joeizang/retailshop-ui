import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Store } from './pages/Store'
import { Summary } from './pages/Summary'
import { Report } from './pages/Report'
import { ShopContextProvider } from './ShopContext'

function App() {
  return (
    <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </ShopContextProvider>
  )
}

export default App
