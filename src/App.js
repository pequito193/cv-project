import React, {Component} from "react";
import Header from "./components/Header";
import Curriculum from "./components/Curriculum";
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
          <Curriculum />
        </div>
      </div>
    );
  }
}

export default App;
