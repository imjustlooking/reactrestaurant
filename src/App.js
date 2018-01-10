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
            <li><Link to='/'> Home </Link></li>
            <li><Scrollchor to='#locations'>Locations</Scrollchor></li>
            <li><Scrollchor to='#menu'>Menu</Scrollchor></li>
            <li><Scrollchor to='#reservations'>Reservations</Scrollchor></li>
          </ul>
          <img id='banner' src='image/chickbannertransparent.png' />
          <Scrollchor to='#about'><img id='arrow' className='bounce' src='image/icon/arrowdown.png' /></Scrollchor>
        </div>
        <Route exact={true} path='/' component={Home} />
        <Footer />
      </div>
    )
  }
}

class Home extends Component {
  render () {
    return (
      <div>
        <About />
        <Locations />
        <Menu />
        <Reservations />
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
        <div id='maptext'>
          <p>
            <img className='icon' src='image/icon/phone.png' alt='phone' /> +65 1234567 <br />
            <img className='icon' src='image/icon/email.png' alt='email' /> gabrielulu@gmail.com <br /> <br />
            <img className='icon' src='image/icon/address.png' alt='address' /> Fake Building, 8 Claymore Hill, Singapore 229572 <br />
            <img className='icon' src='image/icon/reservations.png' alt='reservations' /> Call directly for reservations<br />
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

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <ul className='nav'>
          <li><Link to='#'> Delivery </Link></li>
          <li><Link to='#'> Media enquiries </Link></li>
          <li><Link to='#'> Franchise & business opportunities </Link></li>
          <li><Link to='#'> Careers </Link></li>
          <li><Scrollchor to='#navcontainer'>Home</Scrollchor></li>
        </ul>
        <p> Follow us on: <Link to='#'><img className='footericon' src='image/icon/20673.png' /></Link> <Link to='#'><img className='footericon' src='image/icon/insta.svg' /></Link> </p>
      </div>
    )
  }
}

class Reservations extends Component {
  render () {
    return (
      <div>
        <h1 id='reservations'> Reservations </h1>
        <p> We are currently working with vendors to provide an online reservation system. </p>
      </div>
    )
  }
}

class About extends Component {
  constructor () {
    super()
    this.state = {
      imgSrc: 'image/chickenfam.svg',
      cookText: 'Hover/tap to cook (may take a second)'
    }
  }
  handleMouseOver () {
    this.setState({
      imgSrc: 'image/familymeal.png',
      cookText: 'Enjoy your meal!'
    })
  }
  handleMouseOut () {
    this.setState({
      imgSrc: 'image/chickenfam.svg',
      cookText: 'Hover/tap to cook (may take a second)'
    })
  }
  render () {
    return (
      <div>
        <h1 id='about'> About us </h1>
        <img id='chickenfam' src={this.state.imgSrc} onMouseOver={() => this.handleMouseOver()} onMouseOut={() => this.handleMouseOut()} title='Yummy' alt='Cute chicken family' />
        <small> {this.state.cookText} </small>
        <p> Our founder, Colonel Gabriel Lu, has an undying love for fried chicken, so he decided to cook up a website for his imaginary fried chicken chain. <br />
            To date, we have never ever served any paying customer. I'm really just filling this paragraph up so the site looks meatier. <br />
            If you have a really good recipe to share, please contact us at gabrielulu@gmail.com
        </p>
      </div>
    )
  }
}

export default App;
