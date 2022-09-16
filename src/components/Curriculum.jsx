import React, {Component} from "react";
import Info from "./Info";
import Languages from "./Languages";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import "./../styles/Curriculum.css"

class Curriculum extends Component {
    
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleNewLanguage = this.handleNewLanguage.bind(this);

        this.handleRemoveInput = this.handleRemoveInput.bind(this);
        
        this.handleNewInput = this.handleNewInput.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            jobTitle: '',
            phoneNumber: '',
            email: '',
            linkedIn: '',
            gitHub: '',
            personalWebsite: '',
            languages: [],
            skills: [],
            experience: [],
            education: [],
        };
    }

    // Updates the component's state with the newly written inputs
    handleInputChange(e) {
        const inputField = e.target.name;
        const value = e.target.value;
        this.setState({[inputField]: value});
    }

    // Checks if all conditions are met, and then adds the new language to 'languages' in the state
    handleNewLanguage(e) {
        e.preventDefault();
        const newLanguage = e.target[0].value;
        if (newLanguage.length > 0) {
            const language = newLanguage.charAt(0).toUpperCase() + newLanguage.slice(1);
            if (this.state.languages.includes(language)) return;
            this.setState({
                languages: this.state.languages.concat(language),
            });
            e.target[0].value = '';
        }
    }

    // Maps over existing languages to remove the one whose remove button is clicked
    handleRemoveInput(e) {
        const inputToRemove = e.target.id;
        const inputField = e.target.props;
        const newInputsArray = this.state[inputField].filter((name) => name !== inputToRemove);
            this.setState({
                [inputField]: newInputsArray,
            })
    }


    // Receives new input and sets the state depending on which input was accessed
    handleNewInput(e) {
        e.preventDefault();
        const inputField = e.target[0].name;
        const newInput = e.target[0].value;
        if (newInput.length > 0) {
            if (this.state[inputField].includes(newInput)) return;
            this.setState({
                [inputField]: this.state[inputField].concat(newInput),
            });
            e.target[0].value = '';
        } 
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
                <h2 className="editor-title">Add Language</h2>
                <form onSubmit={this.handleNewLanguage}>
                    <input className="input" name="language" type="text" placeholder="Language" />
                    <button type="submit" className="new-input">Add</button>
                </form>
                <Languages removeLanguage={this.handleRemoveInput} languages={this.state.languages} />
                <h2 className="editor-title">Skills, Experience, Education</h2>
                <div className="details-wrapper">
                    <div>
                        <form onSubmit={this.handleNewInput}>
                            <input className="input" name="skills" type="text" placeholder="Skills" />
                            <button type="submit" className="new-input">Add</button>
                        </form>
                        <Skills removeInput={this.handleRemoveInput} skills={this.state.skills} />
                    </div>
                    <div>
                        <form onSubmit={this.handleNewInput}>
                            <input className="input" name="experience" type="text" placeholder="Experience" />
                            <button type="submit" className="new-input">Add</button>
                        </form>
                        <Experience removeInput={this.handleRemoveInput} experience={this.state.experience} />
                    </div>
                    <div>
                        <form onSubmit={this.handleNewInput}>
                            <input className="input" name="education" type="text" placeholder="Education" />
                            <button type="submit" className="new-input">Add</button>
                        </form>
                        <Education removeInput={this.handleRemoveInput} education={this.state.education} />
                    </div>
                </div>
            </div>
        </React.Fragment>
        )    

    }
}

export default Curriculum;