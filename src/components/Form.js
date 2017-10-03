import React from 'react';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
      memory: 'no',
      onFirst: 'trust',
      onNext: 'trust',
      flash: '',
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ flash: '' });
    this.setState({ [e.target.name]: e.target.value });

    if (e.target.value === 'noMemory' && this.state.onNext === 'onNextRciprocate') {
      this.setState({ flash: 'not happening' });
      this.setState({ onNext: 'trust' })
    }
  }

  render() {
    return (
      <form>
        <input name='color' type='color' value={this.state.color} onChange={this.changeHandler} />

        <select name='memory' value={this.state.memory} onChange={this.changeHandler}>
          <option value='noMemory'>No Memmory</option>
          <option value='shortMemory'>Short Memmory</option>
          <option value='longMemory'>Long Memmory</option>
        </select>

        <select name='onFirst' placeholder='on first' value={this.state.onFirst} onChange={this.changeHandler}>
          <option value='onFirstTrust'>Trust</option>
          <option value='onFirstDefect'>Defect</option>
        </select>

        <select name='onNext' placeholder='on next' value={this.state.onNext} onChange={this.changeHandler}>
          <option value='onNextTrust'>Trust</option>
          <option value='onNextDefect'>Defect</option>
          {this.state.memory !== 'no' && <option value='onNextRciprocate'>Reciprocate</option>}
        </select>
        {this.state.flash && <span>{this.state.flash}</span>}
      </form>
    );
  }
}