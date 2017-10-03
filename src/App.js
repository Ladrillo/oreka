import React, { Component } from 'react';
import styled from 'styled-components';
import Game from './components/Game';
import Form from './components/Form';


export default class App extends Component {
  render() {
    return (
      <div>
        <Game />
        <Form />
      </div>
    );
  }
}
