import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import './App.css';

class App extends Component {
  render () {
    return (
      <div id='body'>
        <div id='navcontainer'>
          <ul className='nav'>
            {/* <Scrollchor to="#sample-code" className="nav-link">Sample</Scrollchor> */}
            <li><Link to='/'> Home </Link></li>
            <li><Scrollchor to='#sample-code'>Locations</Scrollchor></li>
            <li><Link to='/menu'> Menu </Link></li>
            <li><Link to='/menu'> Reservations </Link></li>
            {/* <li><Link to='/'> Home </Link></li>
            <li><Link to='/locations'> Locations </Link></li>
            <li><Link to='/menu'> Menu </Link></li>
            <li><Link to='/menu'> Reservations </Link></li> */}
          </ul>
          <img src='image/chickbannertransparent.png' />
        </div>
        <Locations />

        {/* <Route exact={true} path='/' component={Home} />
        <Route path='/locations' component={Locations} /> */}
      </div>
    )
  }
}

class Locations extends Component {
  render () {
    return (
      <div className='componentSize'> <h1 id='sample-code'> Locations </h1>
        <img src='https://maps.googleapis.com/maps/api/staticmap?center=8+Claymore+Hill,Singapore,SG&zoom=16&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:G%7C1.308089,103.831722&key=AIzaSyAy0PNSC9SbRpl9b31EtW9HCdcsDBD65IA' />
        <div>
          <p> Contact: +65 1234567, gabrielulu@gmail.com <br />
              Address: 8 Claymore Hill, Singapore 229572 <br />

          </p>
        </div>
      </div>
    )
  }
}

class Home extends Component {
  render () {
    return (
      <div>
        <header>
          <h1>Gabriel's Fried Chicken</h1>
        </header>
        <p>
          Bring in 2018 with a burst of GFC's crunchy goodness.
        </p>
      </div>
    )
  }
}

export default App;
