import React, {Component} from "react";
import Info from "./Info";
import Editor from "./Editor";

class ParentWrapper extends Component {
    
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            jobTitle: '',
            phoneNumber: '',
            email: '',
            linkedIn: '',
            gitHub: '',
            personalWebsite: ''
        };
    }

    handleInput(input) {
        this.setState({[this.prop]: input});
    }

    render() {
        console.log(this.state)
        return (
        <React.Fragment>
            <Info />
            <Editor  handleInputChange={this.handleInput} />
        </React.Fragment>
        )    
    }
}

export default ParentWrapper;