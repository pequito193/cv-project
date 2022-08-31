import React, {Component} from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import "./styles/App.css"
import Info from "./components/Info";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Info />
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
