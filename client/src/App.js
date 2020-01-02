import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import {Container} from 'react-bootstrap';
import Navigation from './components/Navigation';
import Main from './components/Main';

class App extends Component {
  render() {
      return (
      <Router>
          <Container>
                <Navigation/>
                <Main/>
          </Container>
      </Router> 
     );
  }
}

export default App;
