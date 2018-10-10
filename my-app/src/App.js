import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  clicked: [],
  score: 0,
  topScore: 0,
};

handleClick = id => {
  if (this.state.clicked.includes(id.target.id) === false) {
    this.setState({clicked:  [...this.state.clicked, id.target.id]});
    this.handleScore();
  } else {
    alert(`Sorry.  You have already selected this character!`);
    this.setState({score: 0});
  }
};

handleScore = () =>
  this.setState({score: this.state.score +1});
  

  render() {
    return (
      <div className="App">


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
  <a className="navbar-brand" href="#">Clicky Game!</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li> */}
    </ul>
    <span className="navbar-text">
      Score: {this.state.score} | Top Score: {this.state.topScore}
    </span>
  </div>
</nav>

<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Clicky Game!</h1>
    <p className="lead">Click on an image to earn points, <br />but don't click on any more than once!</p>
  </div>
</div>

<img src="./assets/images/peter.jpeg" onClick={this.handleClick} style={{width: 180}} alt="..." id="peter" className="img-thumbnail"/>
<img src="./assets/images/quagmire.jpg" onClick={this.handleClick} style={{width: 180}} alt="..." id="quagmire" className="img-thumbnail"/>
<img src="./assets/images/brian.jpg" onClick={this.handleClick} style={{width: 180}} alt="..." id="brian" className="img-thumbnail"/>
<img src="./assets/images/cleveland.jpg" onClick={this.handleClick} style={{width: 180}} alt="..." id="cleveland" className="img-thumbnail"/><br/>
<img src="./assets/images/lois.jpg" onClick={this.handleClick} style={{width: 180}} alt="..." id="lois" className="img-thumbnail"/>
<img src="./assets/images/west.jpg" onClick={this.handleClick} style={{width: 180}} alt="..." id="mayor" className="img-thumbnail"/>
<img src="./assets/images/stewie.jpg" onClick={this.handleClick} style={{width: 180}} alt="..." id="stewie" className="img-thumbnail"/>
<img src="./assets/images/meg.jpg" onClick={this.handleClick} style={{width: 180}} alt="..." id="meg" className="img-thumbnail"/><br/>
<img src="./assets/images/joe.jpeg" onClick={this.handleClick} style={{width: 180}} alt="..." id="joe" className="img-thumbnail"/>
<img src="./assets/images/doctor.jpg" onClick={this.handleClick} style={{width: 180}} alt="..." id="doctor" className="img-thumbnail"/>
<img src="./assets/images/tucker.jpg" onClick={this.handleClick} style={{width: 180}} alt="..." id="tucker" className="img-thumbnail"/>
<img src="./assets/images/mort.png" onClick={this.handleClick} style={{width: 180}} alt="..." id="mort" className="img-thumbnail"/>

<footer className="bg-dark">Eric Korslin</footer>
      </div>
    );
  }
}

export default App;
