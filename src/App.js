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
            <li><Scrollchor to='#locations'>Locations</Scrollchor></li>
            <li><Scrollchor to='#menu'>Menu</Scrollchor></li>
            <li><Link to='/menu'> Reservations </Link></li>
            {/* <li><Link to='/'> Home </Link></li>
            <li><Link to='/locations'> Locations </Link></li>
            <li><Link to='/menu'> Menu </Link></li>
            <li><Link to='/menu'> Reservations </Link></li> */}
          </ul>
          <img src='image/chickbannertransparent.png' />
        </div>
        <About />
        <Locations />
        <Menu />
        {/* <Route exact={true} path='/' component={Home} />
        <Route path='/locations' component={Locations} /> */}
      </div>
    )
  }
}

class Locations extends Component {
  render () {
    return (
      <div className='componentSize'>
        <h1 id='locations'> Locations </h1>
        <img id='map' src='https://maps.googleapis.com/maps/api/staticmap?center=8+Claymore+Hill,Singapore,SG&zoom=16&size=600x300&maptype=roadmap&markers=color:orange%7Clabel:C%7C1.308089,103.831722&key=AIzaSyAy0PNSC9SbRpl9b31EtW9HCdcsDBD65IA' />
        <div>
          <p> Contact: +65 1234567, gabrielulu@gmail.com <br />
              Address: 8 Claymore Hill, Singapore 229572 <br />
          </p>
        </div>
      </div>
    )
  }
}

class Menu extends Component {
  render () {
    return (
      <div>
        <h1> Menu </h1>
        <img id='menu' src='image/menu.png' />
      </div>
    )
  }
}

class About extends Component {
  render () {
    return (
      <div>
        <h1> About us </h1>
        <img id='chickenfam' src='image/chickenfam.svg' title='cook us please' alt='Cute chicken family' />
        <img id='familymeal' src='image/familymeal.png' title='yummy' alt='Cooked chicken family' />
        <p> Our founder, Colonel Gabriel Lu, has an undying love for fried chicken, so he decided to cook up a website for his imaginary fried chicken chain. <br />
            To date, we have never ever served any paying customer. I'm really just filling this paragraph up so the site looks meatier. <br />
            If you have a really good recipe to share, please contact us at gabrielulu@gmail.com
        </p>
      </div>
    )
  }
}

export default App;
