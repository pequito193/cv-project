import React, {Component} from "react";
import "./../styles/Info.css"

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const {firstName, lastName, jobTitle, phoneNumber, email, linkedIn, gitHub, personalWebsite} = this.props;

        return (
            <React.Fragment>
                <div className="curriculum">
                    <div className="left-side">
                        <div className="face-photo" />
                        <div className="contacts">
                            <h3 className="side-title">Contacts</h3>
                            <p className="phone-number">
                                <img src={require("./../images/phone.png")} alt="" className="icon" />{phoneNumber}
                            </p>
                            <p className="email">
                                <img src={require("./../images/email.png")} alt="" className="icon" />{email}
                            </p>
                            <p className="linkedin">
                                <img src={require("./../images/linkedin.png")} alt="" className="icon" />{linkedIn}
                            </p>
                            <p className="github">
                                <img src={require("./../images/github.png")} alt="" className="icon" />{gitHub}
                            </p>
                            <p className="website">
                                <img src={require("./../images/website.png")} alt="" className="icon" />{personalWebsite}
                            </p>
                        </div>
                        <div className="languages">
                            <h3 className="side-title">Languages</h3>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="name-and-title">
                            <h2 className="first-and-last-name">{firstName} {lastName}</h2>
                            <h3 className="job-title">{jobTitle}</h3>
                        </div>
                        <div className="relevant-info">
                            <div className="capabilities">
                                <h3 className="right-side-title">
                                <img src={require("./../images/skill.png")} alt="" className="right-side-icon"/>Knowledge</h3>
                            </div>
                            <div className="work-experience">
                                <h3 className="right-side-title">
                                <img src={require("./../images/work-experience.png")} alt="" className="work-icon"/>Work Experience</h3>
                            </div>
                            <div className="education">
                                <h3 className="right-side-title">
                                    <img src={require("./../images/education.png")} alt="" className="right-side-icon"/> Education</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Info;