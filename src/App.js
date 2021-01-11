
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
      showMe: false
    }
  }

  operation()
  {
    this.setState({
      showMe:true
    })
  }

jeopardy() {    
fetch('http://jservice.io/api/random')
.then(res => res.json())
.then(json => {
  this.setState({
    isLoaded: true,
    items: json,
  })
})

}
  componentDidMount() {this.jeopardy()
    /*fetch('http://jservice.io/api/random')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
    */
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {

    return (
      <div className= "App">
        <div className ="Card">
        <header className="App-header">
          <h1>Jeopardy! App </h1>
        </header>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h3>Value: ${item.value}</h3>
                <h3>Question: {item.question}</h3> 

                {
                  this.state.showMe?
                  <div>
                  Answer: {item.answer} 
                  </div>
                  :null
                }
                </li>
              ))}
            </ul>
                  <div className= "button">
                  <button className= "btn btn-default" onClick={()=>this.operation()}> 
                  <span>Reveal Answer</span>
                  </button>
                  </div>

          <div className ="button"> 
          <button className= "btn btn-default" onClick={()=>this.jeopardy()}>
            <span>Next question, Alex</span>
          </button>
          </div>
          </div>
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

/* { <ul>
  {items.map(item => (
    <li key={item.id}>
      value:${item.value} |
      Question: {item.question} |
      Answer: {item.answer} |
      Question: {item.question}
    </li>
</ul> } */