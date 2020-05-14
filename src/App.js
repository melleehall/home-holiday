import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import TripsContext from './TripsContext'
import config from './config'

import Hero from './Hero/Hero'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import NavTwo from './NavTwo/NavTwo'
import LandingMain from  './LandingMain/LandingMain'
import DashboardMain from './DashboardMain/DashboardMain'
import AddTripMain from './AddTripMain/AddTripMain'
import TripListMain from './TripListMain/TripListMain'
import Footer from './Footer/Footer'
import './App.css'




export default class App extends Component {
  state = {
    trips: [],
    tripsPlanned: '',
    tripsTaken: '',
    error: null,
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  setTrips = trips => {
    this.setState({
      trips,
      error: null,
    })
  }

  setPlannedTrips = plannedTrips => {
    let plannedTripTotal = plannedTrips.totalCount;
    this.setState({
      tripsPlanned: plannedTripTotal,
      error: null,
    })
  }

  setTakenTrips = takenTrips => {
    let takenTripTotal = takenTrips.totalCount;
    this.setState({
      tripsTaken: takenTripTotal,
      error: null,
    })
  }

  handleRemoveTripFromState = tripId => {
    const newTrips = this.state.trips.filter(t => {
      return t.id.toString() !== tripId.toString()
    })
    this.setState({
      trips: newTrips
    })
  }

  handleAddTripToState = newTrip => {
    console.log(newTrip)
    this.setState({
      trips: [ ...this.state.trips, newTrip ],
    })
  }

  componentDidMount() {
    fetch(`${config.API_BASE_URL}trips`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        this.setState({ error: res })
      }
      return res.json()
    })
    .then(this.setTrips)
    .catch(e => this.setState({ e }))

    fetch(`${config.API_BASE_URL}dashboard`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        this.setState({ error: res })
      }
      return res.json()
    })
    .then(this.setPlannedTrips)
    .catch(e => this.setState({ e }))    

    fetch(`${config.API_BASE_URL}dashboard/taken`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        this.setState({ error: res })
      }
      return res.json()
    })
    .then(this.setTakenTrips)
    .catch(e => this.setState({ e })) 
  }



  render() {
    const contextValue = {
      trips: this.state.trips,
      tripsPlanned: this.state.tripsPlanned,
      tripsTaken: this.state.tripsTaken,
      removeTripFromState: this.handleRemoveTripFromState,
      addTripToState: this.handleAddTripToState,
    }

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className='app'>
        <div className='App_nav'>
            <NavTwo drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
        </div>
        <TripsContext.Provider value={contextValue}>
          <div className='header-container'>
            <header>
              <Route 
                  exact path='/'
                  component={Hero}
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
        </TripsContext.Provider>
      </div>
    );
  }
}

