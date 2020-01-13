import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    increment = () => {
      let { count } = this.state;
      this.setState({
        count: count + 1
      });
    };
    render() {
      return (
        <div>
          <button onClick={this.increment}>Increment</button>
          <span>{this.state.count}</span>
        </div>
      );
    }
  }
  
  export default ClassCounter;
  