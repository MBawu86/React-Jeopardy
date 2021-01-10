import React, { Component } from 'react';
import './App.css';
import HeroImage from './components/images/HeroImage.js';

class App extends Component {
  constructor(props) {
    super(props)
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
    })
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
            <HeroImage/>
            {/* <div className='HeroImage'>
      <img src='https://i.imgur.com/bZj78qm.jpg'/> 
    </div> */}
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
