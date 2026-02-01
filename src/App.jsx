import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'
import FooterAnuj from './components/Footer/FooterAnuj'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        <FooterAnuj/>
      </BrowserRouter>
    </>
  )
}

export default App
