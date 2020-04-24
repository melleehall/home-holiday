import React from 'react'
import { Route } from 'react-router-dom'

import Hero from './Hero/Hero'
import LandingMain from './LandingMain/LandingMain'
import Footer from './Footer/Footer'
import './App.css'

function App() {
  return (
    <div className='app'>
      <div className='header-container'>
        <header>
          <Hero />
        </header>
      </div>
      <div className='main-container'>
        <main>
          <LandingMain />
        </main>
      </div>
      <div className='footer-container'>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
