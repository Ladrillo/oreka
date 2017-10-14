import React, { Component } from 'react';
import styled from 'styled-components';
import Game from './Game';
import Form from './Form';


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
