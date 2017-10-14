import React, { Component } from 'react';
import styled from 'styled-components';
import Game from '../game';
import Form from '../form';


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
