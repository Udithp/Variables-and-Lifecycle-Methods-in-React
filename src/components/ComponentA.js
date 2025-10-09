import React, { Component } from 'react';
import ComponentB from './ComponentB';

class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    console.log('Component A: constructor() method');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Component A: getDerivedStateFromProps() method');
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Component A: shouldComponentUpdate() method');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Component A: getSnapshotBeforeUpdate() method');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component A: componentDidUpdate() method');
  }

  componentDidMount() {
    console.log('Component A: componentDidMount() method');
  }

  updateState = () => {
    console.log('Update State called'); // Confirm button click
    this.setState((prevState) => {
      const newValue = prevState.value + 1;
      console.log('State updating to:', newValue); // Log before update
      return { value: newValue };
    }, () => {
      console.log('Update State completed, new value:', this.state.value); // Log after update
    });
  };

  render() {
    console.log('Component A: render() method');
    return (
      <div>
        <ComponentB />
        <button onClick={this.updateState}>Update State </button>
      </div>
    );
  }
}

export default ComponentA;