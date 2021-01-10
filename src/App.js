import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
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
        <Container>
          <Form>
            <Row>
              <Col md>
                <Card className= "mb-1" style={{ color: '#000' }}>The Answer is </Card>
                <Card className= "mb-1" style={{ color: '#000' }}>API for answer goes here</Card>
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
            ))};
            
            </div>
            );
          }
}
}
export default App;

{/* { <ul>
  {items.map(item => (
    <li key={item.id}>
      value:${item.value} |
      Question: {item.question} |
      Answer: {item.answer} |
      Question: {item.question}
    </li>
</ul> } */}