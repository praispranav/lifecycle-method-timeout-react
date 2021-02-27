import "./styles.css";
import React from "react";
import Conditional from "./conditional";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 5000);
  }
  render() {
    return (
      <div className="App">
        <Conditional isLoading={this.state.isLoading} />
        <h1>Hello</h1>
      </div>
    );
  }
}
export default App;
