import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Hero from './Hero/Hero'
import NavBackground from './NavBackground/NavBackground'
import LandingMain from './LandingMain/LandingMain'
import DashboardMain from './DashboardMain/DashboardMain'
import AddTripMain from './AddTripMain/AddTripMain'
import TripListMain from './TripListMain/TripListMain'
import Footer from './Footer/Footer'
import './App.css'

function App() {
  return (
    <div className='app'>
      <div className='header-container'>
        <header>
          <Route 
              exact path='/'
              component={Hero}
          />
           <Route 
            path = '/dashboard'
            component={NavBackground}
          />
          <Route 
            path = '/trips'
            component={NavBackground}
          />
          <Route 
            path = '/add-trip'
            component={NavBackground}
          />
        </header>
      </div>
      <div className='main-container'>
        <main>
            <Switch>
              <Route 
                exact path='/'
                component={LandingMain}
              />
              <Route 
                path='/dashboard'
                component={DashboardMain}
              />
              <Route 
                path='/add-trip'
                component={AddTripMain}
              />
              <Route 
                path='/trips'
                component={TripListMain}
              />
            </Switch>
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
