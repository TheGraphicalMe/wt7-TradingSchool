import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home        from './pages/Home'
import SeptemberBatch from './pages/SeptemberBatch'
import PaymentSuccess from './pages/PaymentSuccess'
import Cursor      from './components/Cursor'
import Preloader from './components/Preloader'
// import PopupNotification from './components/PopupNotification'
import { useMagneticButtons } from './hooks/useMagneticButtons'

function App() {
  const [loaded, setLoaded] = useState(false)
  const handleComplete = useCallback(() => setLoaded(true), [])
  useMagneticButtons()

  return (
    <BrowserRouter>
      {!loaded && <Preloader onComplete={handleComplete} />}
      <Cursor />
      <Routes>
        <Route path="/" element={loaded ? <Home /> : null} />
        <Route path="/live-batch" element={loaded ? <SeptemberBatch /> : null} />
        <Route path="/payment-success" element={loaded ? <PaymentSuccess /> : null} />
      </Routes>
      {/* {loaded && <PopupNotification />} */}
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
