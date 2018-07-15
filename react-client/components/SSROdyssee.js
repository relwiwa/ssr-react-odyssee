import React, { Component } from 'react';

import Component1 from './Component1';

class SSROdyssee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  
  render() {
    return (
      <div>
        <h1>Server side rendering with React, an Odyssee</h1>
        <Component1 />
        <div>
          <h2>Counter</h2>
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            Increase
          </button>
          <span>{this.state.counter}</span>
          <button
            onClick={() => this.setState({ counter: this.state.counter - 1 })}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
};

export default SSROdyssee;
