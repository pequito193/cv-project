import React, {Component} from "react";
import Header from "./components/Header";
import ParentWrapper from "./components/ParentWrapper";
import "./styles/App.css"

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <ParentWrapper />
        </div>
      </div>
    );
  }
}

export default App;
