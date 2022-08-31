import React, {Component} from "react";
import "./../styles/Info.css"

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="curriculum">
                    <div className="left-side">
                        <div className="face-photo" />
                        <div className="contacts">
                            <h3 className="side-title">Contacts</h3>
                            <p className="phone-number">
                                <img src={require("./../images/phone.png")} alt="" className="icon" />
                            </p>
                            <p className="email">
                                <img src={require("./../images/email.png")} alt="" className="icon" />
                            </p>
                            <p className="phone-number"/>
                            <p className="github">
                                <img src={require("./../images/github.png")} alt="" className="icon" />
                            </p>
                        </div>
                        <div className="languages">
                            <h3 className="side-title">Languages</h3>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="name-and-title">
                            <h2 className="first-and-last-name"></h2>
                            <h3 className="job-title"></h3>
                        </div>
                        <div className="relevant-info">
                            <div className="capabilities">
                                <h3 className="capabilities-title">Knowledge</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Info;