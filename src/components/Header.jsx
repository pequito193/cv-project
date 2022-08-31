import React, {Component} from "react";
import "./../styles/Header.css"

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <h1 className="page-title"> Curriculum Vitae </h1>;
    }
}

export default Header;