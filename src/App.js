<<<<<<< HEAD
/* import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(){
  super();     
=======
import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
>>>>>>> cbe420e47223f059f4d926f39b16af8beb94de1e
    this.state = {
      items: [],
      isLoaded: false,

    }
  }
  }

  
  componentDidMount(){
    
    fetch('http://jservice.io/api/random')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })

  };
    // THIS IS DIMMED OUT FOR SOME REASON ??
  render(){

    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <div>Loading...</div>
      )
    }

    else {

    return (
<<<<<<< HEAD
=======
      <div className= "App">
        <header className="App-header">
          <h1>Jeopardy! App </h1>
        </header>
>>>>>>> cbe420e47223f059f4d926f39b16af8beb94de1e

      <div className= "App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
<<<<<<< HEAD
                Answer: {item.answer} | Question: {item.question} | value:${item.value}
=======
                Answer: {item.answer} |
                Question: {item.question}
>>>>>>> cbe420e47223f059f4d926f39b16af8beb94de1e
              </li>
            ))};
          </ul>
      </div>
    );            
            }
};

<<<<<<< HEAD
export default App
*/


import React, { Component } from 'react';
import './App.css';
import HeroImage from './components/images/heroImage.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('http://jservice.io/api/random')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
    return (
      <div className= "App">
        <header className="App-header">
          <h1>Jeopardy! App </h1>
        </header>
            {/* <HeroImage/> */}
            <div className='hero-container'>
      <img src='https://i.imgur.com/bZj78qm.jpg'/> 
    </div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                value:${item.value} |
                Question: {item.question} |
                Answer: {item.answer} |
                </li>
            ))};
          </ul>
      </div>
    );
  }
}
}
export default App;
=======
export default App;
>>>>>>> cbe420e47223f059f4d926f39b16af8beb94de1e
