import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import App from '../src/App'
import AddTripForm from './AddTripForm/AddTripForm'
import AddTripMain from './AddTripMain/AddTripMain'
import Backdrop from './Backdrop/Backdrop'
import DashboardMain from './DashboardMain/DashboardMain'
import DashboardStat from './DashboardStat/DashboardStat'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import LandingMain from './LandingMain/LandingMain'
import LandingPageFeature from './LandingPageFeature/LandingPageFeature'
import Nav from './Nav/Nav'
import NavBackground from './NavBackground/NavBackground'
import NavTwo from './NavTwo/NavTwo'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import SideDrawer from './SideDrawer/SideDrawer'
import Trip from './Trip/Trip'
import TripListMain from './TripListMain/TripListMain'


describe('Component Smoke Tests', () => {
  const components = [<App />, <AddTripForm />, <AddTripMain />, <Backdrop />, 
  <DashboardMain />, <DashboardStat />, <Footer />, <Hero />, <LandingMain />,
  <LandingPageFeature />, <Nav />, <NavBackground />, <NavTwo />, 
  <DrawerToggleButton />, <SideDrawer />, <Trip />, <TripListMain />]

  components.map(component => {
      let test = it(`renders the ${component} without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            ${component}
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
      return test;
    });

})


 