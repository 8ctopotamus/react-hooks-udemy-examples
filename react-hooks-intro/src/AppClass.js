import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null,
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = event => this.setState({
    x: event.pageX,
    y: event.pageY,
  })

  incrementCount = () => {
    this.setState(prevState => ({
      count: this.state.count + 1
    }))
  }

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render() {
    const { count, isOn } = this.state

    return (
      <>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>
          I was clicked {count} times.
        </button>
        
        <h2>Toggle Light</h2>
        <div
          onClick={this.toggleLight}
          style={{
            height: "50px",
            width: "50px",
            background: isOn ? 'yellow' : 'grey',
          }}
        ></div>
        
        <h2>Mouse Position</h2>
        <p>X position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
      </>
    )
  }
}

export default App;
