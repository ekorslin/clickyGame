import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Clicky Game!</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span className="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>

<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Clicky Game!</h1>
    <p className="lead">Click on an image to earn points, <br />but don't click on any more than once!</p>
  </div>
</div>

<img src="./assets/images/peter.jpeg" style={{width: 180}} alt="..." class="img-thumbnail"/>
<img src="./assets/images/quagmire.jpg" style={{width: 180}} alt="..." class="img-thumbnail"/>
<img src="./assets/images/brian.jpg" style={{width: 180}} alt="..." class="img-thumbnail"/>
<img src="./assets/images/cleveland.jpg" style={{width: 180}} alt="..." class="img-thumbnail"/><br/>
<img src="./assets/images/lois.jpg" style={{width: 180}} alt="..." class="img-thumbnail"/>
<img src="./assets/images/west.jpg" style={{width: 180}} alt="..." class="img-thumbnail"/>
<img src="./assets/images/stewie.jpg" style={{width: 180}} alt="..." class="img-thumbnail"/>
<img src="./assets/images/meg.jpg" style={{width: 180}} alt="..." class="img-thumbnail"/><br/>
<img src="./assets/images/joe.jpeg" style={{width: 180}} alt="..." class="img-thumbnail"/>
<img src="./assets/images/doctor.jpg" style={{width: 180}} alt="..." class="img-thumbnail"/>
<img src="./assets/images/tucker.jpg" style={{width: 180}} alt="..." class="img-thumbnail"/>
<img src="./assets/images/mort.png" style={{width: 180}} alt="..." class="img-thumbnail"/>

<footer>Eric Korslin</footer>
      </div>
    );
  }
}

export default App;
