import React, {Component} from "react";
import "./../styles/Editor.css"

class Editor extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const inputField = e.target.name;
        const value = e.target.value;
        this.props = {
            [inputField]: value, 
        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="editor-wrapper">
                    <h2 className="editor-title">Personal Info</h2>
                    <div className="inputs">
                        <input className="input first-name" name="firstName" onChange={this.handleInputChange} type="text" placeholder="First Name" />
                        <input className="input last-name" name="lastName" onChange={this.handleInputChange} type="text" placeholder="Last Name" />
                        <input className="input job-title" name="jobTitle" onChange={this.handleInputChange} type="text" placeholder="Job Title" />
                        <input className="input phone-number" name="phoneNumber" onChange={this.handleInputChange} type="number" placeholder="Phone Number" />
                        <input className="input email" name="email" onChange={this.handleInputChange} type="email" placeholder="Email" />
                        <input className="input linked-in" name="linkedIn" onChange={this.handleInputChange} type="url" placeholder="Linked In" />
                        <input className="input git-hub" name="gitHub" onChange={this.handleInputChange} type="url" placeholder="Github" />
                        <input className="input personal-website" name="personalWebsite" onChange={this.handleInputChange} type="url" placeholder="Personal Website" />
                    </div>
                    <h2 className="editor-title">Add Languages</h2>
                </div>
            </React.Fragment>
        );
    }
}

export default Editor;