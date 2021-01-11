
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroImage from './components/images/HeroImage.js';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            {/* <HeroImage/> */}
            <div className='HeroImage'>
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

function JCard() {
  return (
    <div className="App">
      <header className="App-header">
      Jeopardy!
        <Container>
          <Form>
            <Row>
              <Col md>
                <Card className= "mb-1" style={{ color: '#000' }}>The Answer is </Card>
                <Card className= "mb-1" style={{ color: '#000' }}>The API for the answer goes here</Card>
              </Col>
       
              <Col md>
                <Card className= "mb-1" style={{ color: '#000' }}>Who, what, where is ... </Card>
                <Card className= "mb-1" style={{ color: '#000' }}>The API question goes here</Card>
              </Col>
          </Row>
        </Form>
        <Button variant='primary' type='onClick'>Reveal the Question</Button>
        <Card className= "mb-1" style={{ color: '#000' }}>
          <Card.Img src='https://i.imgur.com/GNv1eXg.jpeg' />
        
        </Card>   
        </Container>        
      </header>
    </div>
  );
}


export default App;
