import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import logo from './logo.svg';
import './App.css';

const StyledApp = styled.div`

`;

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <Board />
      </StyledApp>
    );
  }
}

export default App;
