import React, {Component} from "react";
import Info from "./Info";
import Languages from "./Languages";
import "./../styles/Curriculum.css"

class Curriculum extends Component {
    
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleNewLanguage = this.handleNewLanguage.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            jobTitle: '',
            phoneNumber: '',
            email: '',
            linkedIn: '',
            gitHub: '',
            personalWebsite: '',
            languages: []
        };
    }

    handleInputChange(e) {
        const inputField = e.target.name;
        const value = e.target.value;
        this.setState({[inputField]: value});
    }

    handleNewLanguage(e) {
        e.preventDefault();
        this.setState({
            languages: this.state.languages.concat(),
        });
    }

    render() {

        return (
        <React.Fragment>
            <Info {...this.state}/>
            <div className="editor-wrapper">
                <h2 className="editor-title">Personal Info</h2>
                <div className="inputs">
                    <input className="input first-name" name="firstName" onChange={this.handleInputChange} type="text" placeholder="First Name" maxLength={12} />
                    <input className="input last-name" name="lastName" onChange={this.handleInputChange} type="text" placeholder="Last Name" maxLength={12} />
                    <input className="input job-title" name="jobTitle" onChange={this.handleInputChange} type="text" placeholder="Job Title" maxLength={20} />
                    <input className="input phone-number" name="phoneNumber" onChange={this.handleInputChange} type="tel" placeholder="Phone Number" />
                    <input className="input email" name="email" onChange={this.handleInputChange} type="email" placeholder="Email" />
                    <input className="input linked-in" name="linkedIn" onChange={this.handleInputChange} type="url" placeholder="LinkedIn" />
                    <input className="input git-hub" name="gitHub" onChange={this.handleInputChange} type="url" placeholder="Github Username" />
                    <input className="input personal-website" name="personalWebsite" onChange={this.handleInputChange} type="url" placeholder="Personal Website" />
                </div>
                <h2 className="editor-title">Add Languages</h2>
                {/* <Languages /> */}
                <form className="language-button-wrapper">
                    <input className="input personal-website" name="language" onSubmit={this.handleNewLanguage} type="url" placeholder="Language" />
                    <button type="submit" className="new-language">Add Language</button>
                </form>
            </div>
        </React.Fragment>
        )    

    }
}

export default Curriculum;