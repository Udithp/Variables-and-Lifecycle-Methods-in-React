import React, { Component } from 'react';

class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = { initialState: null }; // Explicit initial state
    console.log('Component B: constructor() method');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Component B: getDerivedStateFromProps() method');
    return null; // No state update from props
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Component B: shouldComponentUpdate() method');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Component B: getSnapshotBeforeUpdate() method');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component B: componentDidUpdate() method');
  }

  componentDidMount() {
    console.log('Component B: componentDidMount() method');
  }

  render() {
    console.log('Component B: render() method');
    return <div>Component B</div>;
  }
}

export default ComponentB;