import React, {Component} from "react";
import "./../styles/Info.css"

class Info extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {firstName, lastName, jobTitle, phoneNumber, email, linkedIn, gitHub, personalWebsite, languages} = this.props;

        const languageList = [];

        for (let i = 0; i < languages.length; i++) {
            languageList.push(
                <p className="languages-known">{languages[i]}</p>
            )
        }

        return (
            <React.Fragment>
                <div className="info">
                    <div className="left-side">
                        <div className="face-photo" />
                        <div className="contacts">
                            <h3 className="side-title">Contacts</h3>
                            <div className="contact-wrapper">
                                <img src={require("./../images/phone.png")} alt="" className="icon" />
                                <p className="phone-number output">{phoneNumber}</p>
                            </div>
                            <div className="contact-wrapper">
                                <img src={require("./../images/email.png")} alt="" className="icon" />
                                <p className="email output">{email}</p>
                            </div>
                            <div className="contact-wrapper">
                                <img src={require("./../images/linkedin.png")} alt="" className="icon" />
                                <p className="linkedin output">{linkedIn}</p>
                            </div>
                            <div className="contact-wrapper">
                                <img src={require("./../images/github.png")} alt="" className="icon" />
                                <p className="github output">github.com/{gitHub}</p>
                            </div>
                            <div className="contact-wrapper">
                                <img src={require("./../images/website.png")} alt="" className="icon" />
                                <p className="website output">{personalWebsite}</p>
                            </div>
                        </div>
                        <div className="languages">
                            <h3 className="side-title language-title">Languages</h3>
                            <div className="language-wrapper">
                                {languageList}
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="name-and-title">
                            <h2 className="first-and-last-name main-output">{firstName} {lastName}</h2>
                            <h3 className="job-title main-output">{jobTitle}</h3>
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