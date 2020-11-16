import React, { Component } from 'react';
import './App.css';
import Container from './containers/Container';
import Calendar from './components/Calendar/Calendar';

const Challenge = () =>
  <div>
    <h3>Requirements</h3>
    <ol>
      <li>Build a calendar that shows last month, this month, and the next month</li>
      <li>Each month displays separately with a heading with the month name</li>
    </ol>
  </div>

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Challenge />
        </Container>

        <Container>
          <Calendar />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
