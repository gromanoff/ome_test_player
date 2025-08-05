import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WebRTCPlayer from './components/WebRTCPlayer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < WebRTCPlayer/>
  </StrictMode>,
)
