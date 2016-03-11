import React, { Component } from "react";
import ReactDOM from "react-dom";
import rebound from "rebound";


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { value: 0 };
  }


  componentDidMount() {
    const springSystem = new rebound.SpringSystem();
    const spring = springSystem.createSpring();

    spring.addListener(this);
    spring.setEndValue(1);

    this.removeListener = () => spring.removeListener(this);
  }


  componentWillUnmount() {
    this.removeListener();
  }


  onSpringUpdate(spring) {
    this.setState({ value: spring.getCurrentValue() });
  }


  render() {
    return (
      <h1>
        {this.state.value}
      </h1>
    );
  }
}


ReactDOM.render(<Header>Make something!</Header>, document.querySelector("main"));
